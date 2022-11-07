// Copyright 2022 Harness Inc. All rights reserved.
// Use of this source code is governed by the Polyform Free Trial License
// that can be found in the LICENSE.md file for this repository.

package repo

import (
	"bytes"
	"context"
	"fmt"
	"time"

	"github.com/harness/gitness/gitrpc"

	"github.com/harness/gitness/resources"

	apiauth "github.com/harness/gitness/internal/api/auth"
	"github.com/harness/gitness/internal/api/usererror"
	"github.com/harness/gitness/internal/auth"
	"github.com/harness/gitness/types"
	"github.com/harness/gitness/types/enum"
	zerolog "github.com/rs/zerolog/log"
)

type CreateInput struct {
	ParentID      int64  `json:"parentID"`
	UID           string `json:"uid"`
	DefaultBranch string `json:"defaultBranch"`
	Description   string `json:"description"`
	IsPublic      bool   `json:"isPublic"`
	ForkID        int64  `json:"forkId"`
	Readme        bool   `json:"readme"`
	License       string `json:"license"`
	GitIgnore     string `json:"gitIgnore"`
}

// Create creates a new repository.
//
//nolint:funlen // needs refactor
func (c *Controller) Create(ctx context.Context, session *auth.Session, in *CreateInput) (*types.Repository, error) {
	log := zerolog.Ctx(ctx)
	// ensure we reference a space
	if in.ParentID <= 0 {
		return nil, usererror.BadRequest("A repository can't exist by itself.")
	}

	parentSpace, err := c.spaceStore.Find(ctx, in.ParentID)
	if err != nil {
		log.Err(err).Msgf("Failed to get space with id '%d'.", in.ParentID)
		return nil, usererror.BadRequest("Parent not found'")
	}
	/*
	 * AUTHORIZATION
	 * Create is a special case - check permission without specific resource
	 */
	scope := &types.Scope{SpacePath: parentSpace.Path}
	resource := &types.Resource{
		Type: enum.ResourceTypeRepo,
		Name: "",
	}

	err = apiauth.Check(ctx, c.authorizer, session, scope, resource, enum.PermissionRepoCreate)
	if err != nil {
		return nil, fmt.Errorf("auth check failed: %w", err)
	}

	// set default branch in case it wasn't passed
	if in.DefaultBranch == "" {
		in.DefaultBranch = c.defaultBranch
	}

	// create new repo object
	repo := &types.Repository{
		ParentID:      in.ParentID,
		UID:           in.UID,
		Description:   in.Description,
		IsPublic:      in.IsPublic,
		CreatedBy:     session.Principal.ID,
		Created:       time.Now().UnixMilli(),
		Updated:       time.Now().UnixMilli(),
		ForkID:        in.ForkID,
		DefaultBranch: in.DefaultBranch,
	}

	// validate repo
	if err = c.repoCheck(repo); err != nil {
		return nil, err
	}
	var content []byte
	files := make([]gitrpc.File, 0, 3) // readme, gitignore, licence
	if in.Readme {
		content = createReadme(in.UID, in.Description)
		files = append(files, gitrpc.File{
			Path:    "README.md",
			Content: content,
		})
	}

	if in.License != "" && in.License != "none" {
		content, err = resources.ReadLicense(in.License)
		if err != nil {
			return nil, err
		}
		files = append(files, gitrpc.File{
			Path:    "LICENSE",
			Content: content,
		})
	}

	if in.GitIgnore != "" {
		content, err = resources.ReadGitIgnore(in.GitIgnore)
		if err != nil {
			return nil, err
		}
		files = append(files, gitrpc.File{
			Path:    ".gitignore",
			Content: content,
		})
	}

	resp, err := c.gitRPCClient.CreateRepository(ctx, &gitrpc.CreateRepositoryParams{
		DefaultBranch: repo.DefaultBranch,
		Files:         files,
	})
	if err != nil {
		return nil, fmt.Errorf("error creating repository: %w", err)
	}

	repo.GitUID = resp.UID

	// create in store
	err = c.repoStore.Create(ctx, repo)
	if err != nil {
		log.Error().Err(err).
			Msg("Repository creation failed.")

		// TODO: cleanup git repo!

		return nil, err
	}

	return repo, nil
}

func createReadme(name, description string) []byte {
	content := bytes.Buffer{}
	content.WriteString("#" + name + "\n")
	if description != "" {
		content.WriteString(description)
	}
	return content.Bytes()
}
