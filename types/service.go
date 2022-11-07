// Copyright 2022 Harness Inc. All rights reserved.
// Use of this source code is governed by the Polyform Free Trial License
// that can be found in the LICENSE.md file for this repository.

// Package types defines common data structures.
package types

type (
	// Service is a principal representing a different internal service that runs alongside gitness.
	Service struct {
		// Fields from Principal
		ID          int64  `db:"principal_id"          json:"-"`
		UID         string `db:"principal_uid"         json:"uid"`
		Email       string `db:"principal_email"       json:"email"`
		DisplayName string `db:"principal_displayName" json:"displayName"`
		Admin       bool   `db:"principal_admin"       json:"admin"`
		Blocked     bool   `db:"principal_blocked"     json:"blocked"`
		Salt        string `db:"principal_salt"        json:"-"`
		Created     int64  `db:"principal_created"     json:"created"`
		Updated     int64  `db:"principal_updated"     json:"updated"`
	}
)
