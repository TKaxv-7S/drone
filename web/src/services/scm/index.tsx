/* Generated by restful-react */

import React from 'react'
import { Get, GetProps, useGet, UseGetProps, Mutate, MutateProps, useMutate, UseMutateProps } from 'restful-react'

import { getConfigNew } from '../config'
export const SPEC_VERSION = '1.0.0'
export type EnumAccessGrant = number

export type EnumParentResourceType = string

export type EnumPathTargetType = string

export type EnumTokenType = string

export interface FormDataOpenapiLoginRequest {
  password?: string
  username?: string
}

export interface FormDataOpenapiRegisterRequest {
  password?: string
  username?: string
}

export type OpenapiContent = RepoFileContent | OpenapiDirContent | RepoSymlinkContent | RepoSubmoduleContent

export interface OpenapiContentInfo {
  latestCommit?: RepoCommit
  name?: string
  path?: string
  sha?: string
  type?: OpenapiContentType
}

export type OpenapiContentType = 'file' | 'dir' | 'symlink' | 'submodule'

export interface OpenapiCreatePathRequest {
  path?: string
  ref?: string
}

export interface OpenapiCreateRepoPathRequest {
  path?: string
  ref?: string
}

export interface OpenapiCreateRepositoryRequest {
  defaultBranch?: string
  description?: string
  forkId?: number
  gitIgnore?: string
  isPublic?: boolean
  license?: string
  parentID?: number
  readme?: boolean
  uid?: string
}

export interface OpenapiCreateSpaceRequest {
  description?: string
  isPublic?: boolean
  parentId?: number
  uid?: string
}

export interface OpenapiCurrentUserResponse {
  data?: TypesUser
  status?: 'SUCCESS' | 'FAILURE' | 'ERROR'
}

export interface OpenapiDirContent {
  entries?: OpenapiContentInfo[] | null
}

export interface OpenapiGetContentOutput {
  content?: OpenapiContent
  latestCommit?: RepoCommit
  name?: string
  path?: string
  sha?: string
  type?: OpenapiContentType
}

export interface OpenapiMoveRepoRequest {
  keepAsAlias?: boolean
  parentId?: number | null
  ref?: string
  uid?: string | null
}

export interface OpenapiMoveSpaceRequest {
  keepAsAlias?: boolean
  parentId?: number | null
  ref?: string
  uid?: string | null
}

export interface OpenapiUpdateRepoRequest {
  description?: string | null
  isPublic?: boolean | null
  ref?: string
}

export interface OpenapiUpdateSpaceRequest {
  description?: string | null
  isPublic?: boolean | null
  ref?: string
}

export interface RepoBranch {
  commit?: RepoCommit
  sha?: string
  name?: string
  sha?: string
}

export interface RepoCommit {
  author?: RepoSignature
  committer?: RepoSignature
  message?: string
  sha?: string
  title?: string
}

export interface RepoCommitTag {
  commit?: RepoCommit
  isAnnotated?: boolean
  message?: string
  name?: string
  sha?: string
  tagger?: RepoSignature
  title?: string
}

// tslint:disable-next-line:no-empty-interface
export interface RepoContent {}

export interface RepoContentInfo {
  latestCommit?: RepoCommit
  name?: string
  path?: string
  sha?: string
  type?: RepoContentType
}

export type RepoContentType = string

export interface RepoFileContent {
  data?: string
  encoding?: RepoFileEncodingType
  size?: number
}

export type RepoFileEncodingType = string

export interface RepoIdentity {
  email?: string
  name?: string
}

export interface RepoSignature {
  identity?: RepoIdentity
  when?: string
}

export interface RepoSubmoduleContent {
  commitSha?: string
  url?: string
}

export interface RepoSymlinkContent {
  size?: number
  target?: string
}

export interface TypesPath {
  created?: number
  createdBy?: number
  id?: number
  isAlias?: boolean
  targetId?: number
  targetType?: EnumPathTargetType
  updated?: number
  value?: string
}

export interface TypesRepository {
  created?: number
  createdBy?: number
  defaultBranch?: string
  description?: string
  forkId?: number
  id?: number
  isPublic?: boolean
  numClosedPulls?: number
  numForks?: number
  numOpenPulls?: number
  numPulls?: number
  parentId?: number
  path?: string
  uid?: string
  updated?: number
}

export interface TypesServiceAccount {
  blocked?: boolean
  created?: number
  displayName?: string
  email?: string
  parentId?: number
  parentType?: EnumParentResourceType
  uid?: string
  updated?: number
}

export interface TypesSpace {
  created?: number
  createdBy?: number
  description?: string
  id?: number
  isPublic?: boolean
  parentId?: number
  path?: string
  uid?: string
  updated?: number
}

export interface TypesToken {
  createdBy?: number
  expiresAt?: number
  grants?: EnumAccessGrant
  issuedAt?: number
  principalId?: number
  type?: EnumTokenType
  uid?: string
}

export interface TypesTokenResponse {
  access_token?: string
  token?: TypesToken
}

export interface TypesUser {
  admin?: boolean
  blocked?: boolean
  created?: number
  displayName?: string
  email?: string
  uid?: string
  updated?: number
}

export interface TypesUserInput {
  admin?: boolean | null
  email?: string | null
  name?: string | null
  password?: string | null
}

export interface UserUpdateInput {
  displayName?: string | null
  email?: string | null
  password?: string | null
}

export interface UsererrorError {
  message?: string
}

export type GetCurrentUserProps = Omit<GetProps<OpenapiCurrentUserResponse, UsererrorError, void, void>, 'path'>

export const GetCurrentUser = (props: GetCurrentUserProps) => (
  <Get<OpenapiCurrentUserResponse, UsererrorError, void, void>
    path={`/api/user/currentUser`}
    base={getConfigNew('scm')}
    {...props}
  />
)

export type UseGetCurrentUserProps = Omit<UseGetProps<OpenapiCurrentUserResponse, UsererrorError, void, void>, 'path'>

export const useGetCurrentUser = (props: UseGetCurrentUserProps) =>
  useGet<OpenapiCurrentUserResponse, UsererrorError, void, void>(`/api/user/currentUser`, {
    base: getConfigNew('scm'),
    ...props
  })

export type OnLoginProps = Omit<MutateProps<TypesTokenResponse, UsererrorError, void, void, void>, 'path' | 'verb'>

export const OnLogin = (props: OnLoginProps) => (
  <Mutate<TypesTokenResponse, UsererrorError, void, void, void>
    verb="POST"
    path={`/login`}
    base={getConfigNew('scm')}
    {...props}
  />
)

export type UseOnLoginProps = Omit<
  UseMutateProps<TypesTokenResponse, UsererrorError, void, void, void>,
  'path' | 'verb'
>

export const useOnLogin = (props: UseOnLoginProps) =>
  useMutate<TypesTokenResponse, UsererrorError, void, void, void>('POST', `/login`, {
    base: getConfigNew('scm'),
    ...props
  })

export type OnRegisterProps = Omit<MutateProps<TypesTokenResponse, UsererrorError, void, void, void>, 'path' | 'verb'>

export const OnRegister = (props: OnRegisterProps) => (
  <Mutate<TypesTokenResponse, UsererrorError, void, void, void>
    verb="POST"
    path={`/register`}
    base={getConfigNew('scm')}
    {...props}
  />
)

export type UseOnRegisterProps = Omit<
  UseMutateProps<TypesTokenResponse, UsererrorError, void, void, void>,
  'path' | 'verb'
>

export const useOnRegister = (props: UseOnRegisterProps) =>
  useMutate<TypesTokenResponse, UsererrorError, void, void, void>('POST', `/register`, {
    base: getConfigNew('scm'),
    ...props
  })

export interface CreateRepositoryQueryParams {
  /**
   * path of parent space (Not needed in standalone).
   */
  spacePath?: string
}

export type CreateRepositoryProps = Omit<
  MutateProps<TypesRepository, UsererrorError, CreateRepositoryQueryParams, OpenapiCreateRepositoryRequest, void>,
  'path' | 'verb'
>

export const CreateRepository = (props: CreateRepositoryProps) => (
  <Mutate<TypesRepository, UsererrorError, CreateRepositoryQueryParams, OpenapiCreateRepositoryRequest, void>
    verb="POST"
    path={`/repos`}
    base={getConfigNew('scm')}
    {...props}
  />
)

export type UseCreateRepositoryProps = Omit<
  UseMutateProps<TypesRepository, UsererrorError, CreateRepositoryQueryParams, OpenapiCreateRepositoryRequest, void>,
  'path' | 'verb'
>

export const useCreateRepository = (props: UseCreateRepositoryProps) =>
  useMutate<TypesRepository, UsererrorError, CreateRepositoryQueryParams, OpenapiCreateRepositoryRequest, void>(
    'POST',
    `/repos`,
    { base: getConfigNew('scm'), ...props }
  )

export type DeleteRepositoryProps = Omit<MutateProps<void, UsererrorError, void, string, void>, 'path' | 'verb'>

export const DeleteRepository = (props: DeleteRepositoryProps) => (
  <Mutate<void, UsererrorError, void, string, void>
    verb="DELETE"
    path={`/repos`}
    base={getConfigNew('scm')}
    {...props}
  />
)

export type UseDeleteRepositoryProps = Omit<UseMutateProps<void, UsererrorError, void, string, void>, 'path' | 'verb'>

export const useDeleteRepository = (props: UseDeleteRepositoryProps) =>
  useMutate<void, UsererrorError, void, string, void>('DELETE', `/repos`, { base: getConfigNew('scm'), ...props })

export interface FindRepositoryPathParams {
  repoRef: string
}

export type FindRepositoryProps = Omit<
  GetProps<TypesRepository, UsererrorError, void, FindRepositoryPathParams>,
  'path'
> &
  FindRepositoryPathParams

export const FindRepository = ({ repoRef, ...props }: FindRepositoryProps) => (
  <Get<TypesRepository, UsererrorError, void, FindRepositoryPathParams>
    path={`/repos/${repoRef}`}
    base={getConfigNew('scm')}
    {...props}
  />
)

export type UseFindRepositoryProps = Omit<
  UseGetProps<TypesRepository, UsererrorError, void, FindRepositoryPathParams>,
  'path'
> &
  FindRepositoryPathParams

export const useFindRepository = ({ repoRef, ...props }: UseFindRepositoryProps) =>
  useGet<TypesRepository, UsererrorError, void, FindRepositoryPathParams>(
    (paramsInPath: FindRepositoryPathParams) => `/repos/${paramsInPath.repoRef}`,
    { base: getConfigNew('scm'), pathParams: { repoRef }, ...props }
  )

export interface UpdateRepositoryPathParams {
  repoRef: string
}

export type UpdateRepositoryProps = Omit<
  MutateProps<TypesRepository, UsererrorError, void, OpenapiUpdateRepoRequest, UpdateRepositoryPathParams>,
  'path' | 'verb'
> &
  UpdateRepositoryPathParams

export const UpdateRepository = ({ repoRef, ...props }: UpdateRepositoryProps) => (
  <Mutate<TypesRepository, UsererrorError, void, OpenapiUpdateRepoRequest, UpdateRepositoryPathParams>
    verb="PATCH"
    path={`/repos/${repoRef}`}
    base={getConfigNew('scm')}
    {...props}
  />
)

export type UseUpdateRepositoryProps = Omit<
  UseMutateProps<TypesRepository, UsererrorError, void, OpenapiUpdateRepoRequest, UpdateRepositoryPathParams>,
  'path' | 'verb'
> &
  UpdateRepositoryPathParams

export const useUpdateRepository = ({ repoRef, ...props }: UseUpdateRepositoryProps) =>
  useMutate<TypesRepository, UsererrorError, void, OpenapiUpdateRepoRequest, UpdateRepositoryPathParams>(
    'PATCH',
    (paramsInPath: UpdateRepositoryPathParams) => `/repos/${paramsInPath.repoRef}`,
    { base: getConfigNew('scm'), pathParams: { repoRef }, ...props }
  )

export interface ListBranchesQueryParams {
  /**
   * Indicates whether optional commit information should be included in the response.
   */
  include_commit?: boolean
  /**
   * The substring by which the branches are filtered.
   */
  query?: string
  /**
   * The order of the output.
   */
  direction?: 'asc' | 'desc'
  /**
   * The data by which the branches are sorted.
   */
  sort?: 'name' | 'date'
  /**
   * The page to return.
   */
  page?: number
  /**
   * The number of entries returned per page.
   */
  per_page?: number
}

export interface ListBranchesPathParams {
  repoRef: string
}

export type ListBranchesProps = Omit<
  GetProps<RepoBranch[], UsererrorError, ListBranchesQueryParams, ListBranchesPathParams>,
  'path'
> &
  ListBranchesPathParams

export const ListBranches = ({ repoRef, ...props }: ListBranchesProps) => (
  <Get<RepoBranch[], UsererrorError, ListBranchesQueryParams, ListBranchesPathParams>
    path={`/repos/${repoRef}/branches`}
    base={getConfigNew('scm')}
    {...props}
  />
)

export type UseListBranchesProps = Omit<
  UseGetProps<RepoBranch[], UsererrorError, ListBranchesQueryParams, ListBranchesPathParams>,
  'path'
> &
  ListBranchesPathParams

export const useListBranches = ({ repoRef, ...props }: UseListBranchesProps) =>
  useGet<RepoBranch[], UsererrorError, ListBranchesQueryParams, ListBranchesPathParams>(
    (paramsInPath: ListBranchesPathParams) => `/repos/${paramsInPath.repoRef}/branches`,
    { base: getConfigNew('scm'), pathParams: { repoRef }, ...props }
  )

export interface ListCommitsQueryParams {
  /**
   * The git reference (branch / tag / commitID) that will be used to retrieve the data. If no value is provided the default branch of the repository is used.
   */
  git_ref?: string
  /**
   * The page to return.
   */
  page?: number
  /**
   * The number of entries returned per page.
   */
  per_page?: number
}

export interface ListCommitsPathParams {
  repoRef: string
}

export type ListCommitsProps = Omit<
  GetProps<RepoCommit[], UsererrorError, ListCommitsQueryParams, ListCommitsPathParams>,
  'path'
> &
  ListCommitsPathParams

export const ListCommits = ({ repoRef, ...props }: ListCommitsProps) => (
  <Get<RepoCommit[], UsererrorError, ListCommitsQueryParams, ListCommitsPathParams>
    path={`/repos/${repoRef}/commits`}
    base={getConfigNew('scm')}
    {...props}
  />
)

export type UseListCommitsProps = Omit<
  UseGetProps<RepoCommit[], UsererrorError, ListCommitsQueryParams, ListCommitsPathParams>,
  'path'
> &
  ListCommitsPathParams

export const useListCommits = ({ repoRef, ...props }: UseListCommitsProps) =>
  useGet<RepoCommit[], UsererrorError, ListCommitsQueryParams, ListCommitsPathParams>(
    (paramsInPath: ListCommitsPathParams) => `/repos/${paramsInPath.repoRef}/commits`,
    { base: getConfigNew('scm'), pathParams: { repoRef }, ...props }
  )

export interface GetContentQueryParams {
  /**
   * The git reference (branch / tag / commitID) that will be used to retrieve the data. If no value is provided the default branch of the repository is used.
   */
  git_ref?: string
  /**
   * Indicates whether optional commit information should be included in the response.
   */
  include_commit?: boolean
}

export interface GetContentPathParams {
  repoRef: string
  path: string
}

export type GetContentProps = Omit<
  GetProps<OpenapiGetContentOutput, UsererrorError, GetContentQueryParams, GetContentPathParams>,
  'path'
> &
  GetContentPathParams

export const GetContent = ({ repoRef, path, ...props }: GetContentProps) => (
  <Get<OpenapiGetContentOutput, UsererrorError, GetContentQueryParams, GetContentPathParams>
    path={`/repos/${repoRef}/content/${path}`}
    base={getConfigNew('scm')}
    {...props}
  />
)

export type UseGetContentProps = Omit<
  UseGetProps<OpenapiGetContentOutput, UsererrorError, GetContentQueryParams, GetContentPathParams>,
  'path'
> &
  GetContentPathParams

export const useGetContent = ({ repoRef, path, ...props }: UseGetContentProps) =>
  useGet<OpenapiGetContentOutput, UsererrorError, GetContentQueryParams, GetContentPathParams>(
    (paramsInPath: GetContentPathParams) => `/repos/${paramsInPath.repoRef}/content/${paramsInPath.path}`,
    { base: getConfigNew('scm'), pathParams: { repoRef, path }, ...props }
  )

export interface MoveRepositoryPathParams {
  repoRef: string
}

export type MoveRepositoryProps = Omit<
  MutateProps<TypesRepository, UsererrorError, void, OpenapiMoveRepoRequest, MoveRepositoryPathParams>,
  'path' | 'verb'
> &
  MoveRepositoryPathParams

export const MoveRepository = ({ repoRef, ...props }: MoveRepositoryProps) => (
  <Mutate<TypesRepository, UsererrorError, void, OpenapiMoveRepoRequest, MoveRepositoryPathParams>
    verb="POST"
    path={`/repos/${repoRef}/move`}
    base={getConfigNew('scm')}
    {...props}
  />
)

export type UseMoveRepositoryProps = Omit<
  UseMutateProps<TypesRepository, UsererrorError, void, OpenapiMoveRepoRequest, MoveRepositoryPathParams>,
  'path' | 'verb'
> &
  MoveRepositoryPathParams

export const useMoveRepository = ({ repoRef, ...props }: UseMoveRepositoryProps) =>
  useMutate<TypesRepository, UsererrorError, void, OpenapiMoveRepoRequest, MoveRepositoryPathParams>(
    'POST',
    (paramsInPath: MoveRepositoryPathParams) => `/repos/${paramsInPath.repoRef}/move`,
    { base: getConfigNew('scm'), pathParams: { repoRef }, ...props }
  )

export interface ListRepositoryPathsQueryParams {
  /**
   * The page to return.
   */
  page?: number
  /**
   * The number of entries returned per page.
   */
  per_page?: number
}

export interface ListRepositoryPathsPathParams {
  repoRef: string
}

export type ListRepositoryPathsProps = Omit<
  GetProps<TypesPath[], UsererrorError, ListRepositoryPathsQueryParams, ListRepositoryPathsPathParams>,
  'path'
> &
  ListRepositoryPathsPathParams

export const ListRepositoryPaths = ({ repoRef, ...props }: ListRepositoryPathsProps) => (
  <Get<TypesPath[], UsererrorError, ListRepositoryPathsQueryParams, ListRepositoryPathsPathParams>
    path={`/repos/${repoRef}/paths`}
    base={getConfigNew('scm')}
    {...props}
  />
)

export type UseListRepositoryPathsProps = Omit<
  UseGetProps<TypesPath[], UsererrorError, ListRepositoryPathsQueryParams, ListRepositoryPathsPathParams>,
  'path'
> &
  ListRepositoryPathsPathParams

export const useListRepositoryPaths = ({ repoRef, ...props }: UseListRepositoryPathsProps) =>
  useGet<TypesPath[], UsererrorError, ListRepositoryPathsQueryParams, ListRepositoryPathsPathParams>(
    (paramsInPath: ListRepositoryPathsPathParams) => `/repos/${paramsInPath.repoRef}/paths`,
    { base: getConfigNew('scm'), pathParams: { repoRef }, ...props }
  )

export interface CreateRepositoryPathPathParams {
  repoRef: string
}

export type CreateRepositoryPathProps = Omit<
  MutateProps<TypesPath, UsererrorError, void, OpenapiCreateRepoPathRequest, CreateRepositoryPathPathParams>,
  'path' | 'verb'
> &
  CreateRepositoryPathPathParams

export const CreateRepositoryPath = ({ repoRef, ...props }: CreateRepositoryPathProps) => (
  <Mutate<TypesPath, UsererrorError, void, OpenapiCreateRepoPathRequest, CreateRepositoryPathPathParams>
    verb="POST"
    path={`/repos/${repoRef}/paths`}
    base={getConfigNew('scm')}
    {...props}
  />
)

export type UseCreateRepositoryPathProps = Omit<
  UseMutateProps<TypesPath, UsererrorError, void, OpenapiCreateRepoPathRequest, CreateRepositoryPathPathParams>,
  'path' | 'verb'
> &
  CreateRepositoryPathPathParams

export const useCreateRepositoryPath = ({ repoRef, ...props }: UseCreateRepositoryPathProps) =>
  useMutate<TypesPath, UsererrorError, void, OpenapiCreateRepoPathRequest, CreateRepositoryPathPathParams>(
    'POST',
    (paramsInPath: CreateRepositoryPathPathParams) => `/repos/${paramsInPath.repoRef}/paths`,
    { base: getConfigNew('scm'), pathParams: { repoRef }, ...props }
  )

export interface DeleteRepositoryPathPathParams {
  repoRef: string
}

export type DeleteRepositoryPathProps = Omit<
  MutateProps<void, UsererrorError, void, string, DeleteRepositoryPathPathParams>,
  'path' | 'verb'
> &
  DeleteRepositoryPathPathParams

export const DeleteRepositoryPath = ({ repoRef, ...props }: DeleteRepositoryPathProps) => (
  <Mutate<void, UsererrorError, void, string, DeleteRepositoryPathPathParams>
    verb="DELETE"
    path={`/repos/${repoRef}/paths`}
    base={getConfigNew('scm')}
    {...props}
  />
)

export type UseDeleteRepositoryPathProps = Omit<
  UseMutateProps<void, UsererrorError, void, string, DeleteRepositoryPathPathParams>,
  'path' | 'verb'
> &
  DeleteRepositoryPathPathParams

export const useDeleteRepositoryPath = ({ repoRef, ...props }: UseDeleteRepositoryPathProps) =>
  useMutate<void, UsererrorError, void, string, DeleteRepositoryPathPathParams>(
    'DELETE',
    (paramsInPath: DeleteRepositoryPathPathParams) => `/repos/${paramsInPath.repoRef}/paths`,
    { base: getConfigNew('scm'), pathParams: { repoRef }, ...props }
  )

export interface ListRepositoryServiceAccountsPathParams {
  repoRef: string
}

export type ListRepositoryServiceAccountsProps = Omit<
  GetProps<TypesServiceAccount[], UsererrorError, void, ListRepositoryServiceAccountsPathParams>,
  'path'
> &
  ListRepositoryServiceAccountsPathParams

export const ListRepositoryServiceAccounts = ({ repoRef, ...props }: ListRepositoryServiceAccountsProps) => (
  <Get<TypesServiceAccount[], UsererrorError, void, ListRepositoryServiceAccountsPathParams>
    path={`/repos/${repoRef}/serviceAccounts`}
    base={getConfigNew('scm')}
    {...props}
  />
)

export type UseListRepositoryServiceAccountsProps = Omit<
  UseGetProps<TypesServiceAccount[], UsererrorError, void, ListRepositoryServiceAccountsPathParams>,
  'path'
> &
  ListRepositoryServiceAccountsPathParams

export const useListRepositoryServiceAccounts = ({ repoRef, ...props }: UseListRepositoryServiceAccountsProps) =>
  useGet<TypesServiceAccount[], UsererrorError, void, ListRepositoryServiceAccountsPathParams>(
    (paramsInPath: ListRepositoryServiceAccountsPathParams) => `/repos/${paramsInPath.repoRef}/serviceAccounts`,
    { base: getConfigNew('scm'), pathParams: { repoRef }, ...props }
  )

export interface ListTagsQueryParams {
  /**
   * Indicates whether optional commit information should be included in the response.
   */
  include_commit?: boolean
  /**
   * The substring by which the tags are filtered.
   */
  query?: string
  /**
   * The order of the output.
   */
  direction?: 'asc' | 'desc'
  /**
   * The data by which the tags are sorted.
   */
  sort?: 'name' | 'date'
  /**
   * The page to return.
   */
  page?: number
  /**
   * The number of entries returned per page.
   */
  per_page?: number
}

export interface ListTagsPathParams {
  repoRef: string
}

export type ListTagsProps = Omit<
  GetProps<RepoCommitTag[], UsererrorError, ListTagsQueryParams, ListTagsPathParams>,
  'path'
> &
  ListTagsPathParams

export const ListTags = ({ repoRef, ...props }: ListTagsProps) => (
  <Get<RepoCommitTag[], UsererrorError, ListTagsQueryParams, ListTagsPathParams>
    path={`/repos/${repoRef}/tags`}
    base={getConfigNew('scm')}
    {...props}
  />
)

export type UseListTagsProps = Omit<
  UseGetProps<RepoCommitTag[], UsererrorError, ListTagsQueryParams, ListTagsPathParams>,
  'path'
> &
  ListTagsPathParams

export const useListTags = ({ repoRef, ...props }: UseListTagsProps) =>
  useGet<RepoCommitTag[], UsererrorError, ListTagsQueryParams, ListTagsPathParams>(
    (paramsInPath: ListTagsPathParams) => `/repos/${paramsInPath.repoRef}/tags`,
    { base: getConfigNew('scm'), pathParams: { repoRef }, ...props }
  )

export type ListGitignoreProps = Omit<GetProps<string[], UsererrorError, void, void>, 'path'>

export const ListGitignore = (props: ListGitignoreProps) => (
  <Get<string[], UsererrorError, void, void> path={`/resources/gitignore`} base={getConfigNew('scm')} {...props} />
)

export type UseListGitignoreProps = Omit<UseGetProps<string[], UsererrorError, void, void>, 'path'>

export const useListGitignore = (props: UseListGitignoreProps) =>
  useGet<string[], UsererrorError, void, void>(`/resources/gitignore`, { base: getConfigNew('scm'), ...props })

export interface ListLicensesResponse {
  label?: string
  value?: string
}
;[]

export type ListLicensesProps = Omit<GetProps<ListLicensesResponse, UsererrorError, void, void>, 'path'>

export const ListLicenses = (props: ListLicensesProps) => (
  <Get<ListLicensesResponse, UsererrorError, void, void>
    path={`/resources/license`}
    base={getConfigNew('scm')}
    {...props}
  />
)

export type UseListLicensesProps = Omit<UseGetProps<ListLicensesResponse, UsererrorError, void, void>, 'path'>

export const useListLicenses = (props: UseListLicensesProps) =>
  useGet<ListLicensesResponse, UsererrorError, void, void>(`/resources/license`, {
    base: getConfigNew('scm'),
    ...props
  })

export type CreateSpaceProps = Omit<
  MutateProps<TypesSpace, UsererrorError, void, OpenapiCreateSpaceRequest, void>,
  'path' | 'verb'
>

export const CreateSpace = (props: CreateSpaceProps) => (
  <Mutate<TypesSpace, UsererrorError, void, OpenapiCreateSpaceRequest, void>
    verb="POST"
    path={`/spaces`}
    base={getConfigNew('scm')}
    {...props}
  />
)

export type UseCreateSpaceProps = Omit<
  UseMutateProps<TypesSpace, UsererrorError, void, OpenapiCreateSpaceRequest, void>,
  'path' | 'verb'
>

export const useCreateSpace = (props: UseCreateSpaceProps) =>
  useMutate<TypesSpace, UsererrorError, void, OpenapiCreateSpaceRequest, void>('POST', `/spaces`, {
    base: getConfigNew('scm'),
    ...props
  })

export type DeleteSpaceProps = Omit<MutateProps<void, UsererrorError, void, string, void>, 'path' | 'verb'>

export const DeleteSpace = (props: DeleteSpaceProps) => (
  <Mutate<void, UsererrorError, void, string, void>
    verb="DELETE"
    path={`/spaces`}
    base={getConfigNew('scm')}
    {...props}
  />
)

export type UseDeleteSpaceProps = Omit<UseMutateProps<void, UsererrorError, void, string, void>, 'path' | 'verb'>

export const useDeleteSpace = (props: UseDeleteSpaceProps) =>
  useMutate<void, UsererrorError, void, string, void>('DELETE', `/spaces`, { base: getConfigNew('scm'), ...props })

export interface GetSpacePathParams {
  spaceRef: string
}

export type GetSpaceProps = Omit<GetProps<TypesSpace, UsererrorError, void, GetSpacePathParams>, 'path'> &
  GetSpacePathParams

export const GetSpace = ({ spaceRef, ...props }: GetSpaceProps) => (
  <Get<TypesSpace, UsererrorError, void, GetSpacePathParams>
    path={`/spaces/${spaceRef}`}
    base={getConfigNew('scm')}
    {...props}
  />
)

export type UseGetSpaceProps = Omit<UseGetProps<TypesSpace, UsererrorError, void, GetSpacePathParams>, 'path'> &
  GetSpacePathParams

export const useGetSpace = ({ spaceRef, ...props }: UseGetSpaceProps) =>
  useGet<TypesSpace, UsererrorError, void, GetSpacePathParams>(
    (paramsInPath: GetSpacePathParams) => `/spaces/${paramsInPath.spaceRef}`,
    { base: getConfigNew('scm'), pathParams: { spaceRef }, ...props }
  )

export interface UpdateSpacePathParams {
  spaceRef: string
}

export type UpdateSpaceProps = Omit<
  MutateProps<TypesSpace, UsererrorError, void, OpenapiUpdateSpaceRequest, UpdateSpacePathParams>,
  'path' | 'verb'
> &
  UpdateSpacePathParams

export const UpdateSpace = ({ spaceRef, ...props }: UpdateSpaceProps) => (
  <Mutate<TypesSpace, UsererrorError, void, OpenapiUpdateSpaceRequest, UpdateSpacePathParams>
    verb="PATCH"
    path={`/spaces/${spaceRef}`}
    base={getConfigNew('scm')}
    {...props}
  />
)

export type UseUpdateSpaceProps = Omit<
  UseMutateProps<TypesSpace, UsererrorError, void, OpenapiUpdateSpaceRequest, UpdateSpacePathParams>,
  'path' | 'verb'
> &
  UpdateSpacePathParams

export const useUpdateSpace = ({ spaceRef, ...props }: UseUpdateSpaceProps) =>
  useMutate<TypesSpace, UsererrorError, void, OpenapiUpdateSpaceRequest, UpdateSpacePathParams>(
    'PATCH',
    (paramsInPath: UpdateSpacePathParams) => `/spaces/${paramsInPath.spaceRef}`,
    { base: getConfigNew('scm'), pathParams: { spaceRef }, ...props }
  )

export interface MoveSpacePathParams {
  spaceRef: string
}

export type MoveSpaceProps = Omit<
  MutateProps<TypesSpace, UsererrorError, void, OpenapiMoveSpaceRequest, MoveSpacePathParams>,
  'path' | 'verb'
> &
  MoveSpacePathParams

export const MoveSpace = ({ spaceRef, ...props }: MoveSpaceProps) => (
  <Mutate<TypesSpace, UsererrorError, void, OpenapiMoveSpaceRequest, MoveSpacePathParams>
    verb="POST"
    path={`/spaces/${spaceRef}/move`}
    base={getConfigNew('scm')}
    {...props}
  />
)

export type UseMoveSpaceProps = Omit<
  UseMutateProps<TypesSpace, UsererrorError, void, OpenapiMoveSpaceRequest, MoveSpacePathParams>,
  'path' | 'verb'
> &
  MoveSpacePathParams

export const useMoveSpace = ({ spaceRef, ...props }: UseMoveSpaceProps) =>
  useMutate<TypesSpace, UsererrorError, void, OpenapiMoveSpaceRequest, MoveSpacePathParams>(
    'POST',
    (paramsInPath: MoveSpacePathParams) => `/spaces/${paramsInPath.spaceRef}/move`,
    { base: getConfigNew('scm'), pathParams: { spaceRef }, ...props }
  )

export interface ListPathsQueryParams {
  /**
   * The page to return.
   */
  page?: number
  /**
   * The number of entries returned per page.
   */
  per_page?: number
}

export interface ListPathsPathParams {
  spaceRef: string
}

export type ListPathsProps = Omit<
  GetProps<TypesPath[], UsererrorError, ListPathsQueryParams, ListPathsPathParams>,
  'path'
> &
  ListPathsPathParams

export const ListPaths = ({ spaceRef, ...props }: ListPathsProps) => (
  <Get<TypesPath[], UsererrorError, ListPathsQueryParams, ListPathsPathParams>
    path={`/spaces/${spaceRef}/paths`}
    base={getConfigNew('scm')}
    {...props}
  />
)

export type UseListPathsProps = Omit<
  UseGetProps<TypesPath[], UsererrorError, ListPathsQueryParams, ListPathsPathParams>,
  'path'
> &
  ListPathsPathParams

export const useListPaths = ({ spaceRef, ...props }: UseListPathsProps) =>
  useGet<TypesPath[], UsererrorError, ListPathsQueryParams, ListPathsPathParams>(
    (paramsInPath: ListPathsPathParams) => `/spaces/${paramsInPath.spaceRef}/paths`,
    { base: getConfigNew('scm'), pathParams: { spaceRef }, ...props }
  )

export interface CreatePathPathParams {
  spaceRef: string
}

export type CreatePathProps = Omit<
  MutateProps<TypesPath, UsererrorError, void, OpenapiCreatePathRequest, CreatePathPathParams>,
  'path' | 'verb'
> &
  CreatePathPathParams

export const CreatePath = ({ spaceRef, ...props }: CreatePathProps) => (
  <Mutate<TypesPath, UsererrorError, void, OpenapiCreatePathRequest, CreatePathPathParams>
    verb="POST"
    path={`/spaces/${spaceRef}/paths`}
    base={getConfigNew('scm')}
    {...props}
  />
)

export type UseCreatePathProps = Omit<
  UseMutateProps<TypesPath, UsererrorError, void, OpenapiCreatePathRequest, CreatePathPathParams>,
  'path' | 'verb'
> &
  CreatePathPathParams

export const useCreatePath = ({ spaceRef, ...props }: UseCreatePathProps) =>
  useMutate<TypesPath, UsererrorError, void, OpenapiCreatePathRequest, CreatePathPathParams>(
    'POST',
    (paramsInPath: CreatePathPathParams) => `/spaces/${paramsInPath.spaceRef}/paths`,
    { base: getConfigNew('scm'), pathParams: { spaceRef }, ...props }
  )

export interface DeletePathPathParams {
  spaceRef: string
}

export type DeletePathProps = Omit<
  MutateProps<void, UsererrorError, void, string, DeletePathPathParams>,
  'path' | 'verb'
> &
  DeletePathPathParams

export const DeletePath = ({ spaceRef, ...props }: DeletePathProps) => (
  <Mutate<void, UsererrorError, void, string, DeletePathPathParams>
    verb="DELETE"
    path={`/spaces/${spaceRef}/paths`}
    base={getConfigNew('scm')}
    {...props}
  />
)

export type UseDeletePathProps = Omit<
  UseMutateProps<void, UsererrorError, void, string, DeletePathPathParams>,
  'path' | 'verb'
> &
  DeletePathPathParams

export const useDeletePath = ({ spaceRef, ...props }: UseDeletePathProps) =>
  useMutate<void, UsererrorError, void, string, DeletePathPathParams>(
    'DELETE',
    (paramsInPath: DeletePathPathParams) => `/spaces/${paramsInPath.spaceRef}/paths`,
    { base: getConfigNew('scm'), pathParams: { spaceRef }, ...props }
  )

export interface ListReposQueryParams {
  /**
   * The substring which is used to filter the repositories by their path name.
   */
  query?: string
  /**
   * The data by which the repositories are sorted.
   */
  sort?: 'uid' | 'path' | 'created' | 'updated'
  /**
   * The order of the output.
   */
  direction?: 'asc' | 'desc'
  /**
   * The page to return.
   */
  page?: number
  /**
   * The number of entries returned per page.
   */
  per_page?: number
}

export interface ListReposPathParams {
  spaceRef: string
}

export type ListReposProps = Omit<
  GetProps<TypesRepository[], UsererrorError, ListReposQueryParams, ListReposPathParams>,
  'path'
> &
  ListReposPathParams

export const ListRepos = ({ spaceRef, ...props }: ListReposProps) => (
  <Get<TypesRepository[], UsererrorError, ListReposQueryParams, ListReposPathParams>
    path={`/spaces/${spaceRef}/repos`}
    base={getConfigNew('scm')}
    {...props}
  />
)

export type UseListReposProps = Omit<
  UseGetProps<TypesRepository[], UsererrorError, ListReposQueryParams, ListReposPathParams>,
  'path'
> &
  ListReposPathParams

export const useListRepos = ({ spaceRef, ...props }: UseListReposProps) =>
  useGet<TypesRepository[], UsererrorError, ListReposQueryParams, ListReposPathParams>(
    (paramsInPath: ListReposPathParams) => `/spaces/${paramsInPath.spaceRef}/repos`,
    { base: getConfigNew('scm'), pathParams: { spaceRef }, ...props }
  )

export interface ListServiceAccountsPathParams {
  spaceRef: string
}

export type ListServiceAccountsProps = Omit<
  GetProps<TypesServiceAccount[], UsererrorError, void, ListServiceAccountsPathParams>,
  'path'
> &
  ListServiceAccountsPathParams

export const ListServiceAccounts = ({ spaceRef, ...props }: ListServiceAccountsProps) => (
  <Get<TypesServiceAccount[], UsererrorError, void, ListServiceAccountsPathParams>
    path={`/spaces/${spaceRef}/serviceAccounts`}
    base={getConfigNew('scm')}
    {...props}
  />
)

export type UseListServiceAccountsProps = Omit<
  UseGetProps<TypesServiceAccount[], UsererrorError, void, ListServiceAccountsPathParams>,
  'path'
> &
  ListServiceAccountsPathParams

export const useListServiceAccounts = ({ spaceRef, ...props }: UseListServiceAccountsProps) =>
  useGet<TypesServiceAccount[], UsererrorError, void, ListServiceAccountsPathParams>(
    (paramsInPath: ListServiceAccountsPathParams) => `/spaces/${paramsInPath.spaceRef}/serviceAccounts`,
    { base: getConfigNew('scm'), pathParams: { spaceRef }, ...props }
  )

export interface ListSpacesQueryParams {
  /**
   * The substring which is used to filter the spaces by their path name.
   */
  query?: string
  /**
   * The data by which the spaces are sorted.
   */
  sort?: 'uid' | 'path' | 'created' | 'updated'
  /**
   * The order of the output.
   */
  direction?: 'asc' | 'desc'
  /**
   * The page to return.
   */
  page?: number
  /**
   * The number of entries returned per page.
   */
  per_page?: number
}

export interface ListSpacesPathParams {
  spaceRef: string
}

export type ListSpacesProps = Omit<
  GetProps<TypesSpace[], UsererrorError, ListSpacesQueryParams, ListSpacesPathParams>,
  'path'
> &
  ListSpacesPathParams

export const ListSpaces = ({ spaceRef, ...props }: ListSpacesProps) => (
  <Get<TypesSpace[], UsererrorError, ListSpacesQueryParams, ListSpacesPathParams>
    path={`/spaces/${spaceRef}/spaces`}
    base={getConfigNew('scm')}
    {...props}
  />
)

export type UseListSpacesProps = Omit<
  UseGetProps<TypesSpace[], UsererrorError, ListSpacesQueryParams, ListSpacesPathParams>,
  'path'
> &
  ListSpacesPathParams

export const useListSpaces = ({ spaceRef, ...props }: UseListSpacesProps) =>
  useGet<TypesSpace[], UsererrorError, ListSpacesQueryParams, ListSpacesPathParams>(
    (paramsInPath: ListSpacesPathParams) => `/spaces/${paramsInPath.spaceRef}/spaces`,
    { base: getConfigNew('scm'), pathParams: { spaceRef }, ...props }
  )

export type GetUserProps = Omit<GetProps<TypesUser, UsererrorError, void, void>, 'path'>

export const GetUser = (props: GetUserProps) => (
  <Get<TypesUser, UsererrorError, void, void> path={`/user`} base={getConfigNew('scm')} {...props} />
)

export type UseGetUserProps = Omit<UseGetProps<TypesUser, UsererrorError, void, void>, 'path'>

export const useGetUser = (props: UseGetUserProps) =>
  useGet<TypesUser, UsererrorError, void, void>(`/user`, { base: getConfigNew('scm'), ...props })

export type UpdateUserProps = Omit<MutateProps<TypesUser, UsererrorError, void, UserUpdateInput, void>, 'path' | 'verb'>

export const UpdateUser = (props: UpdateUserProps) => (
  <Mutate<TypesUser, UsererrorError, void, UserUpdateInput, void>
    verb="PATCH"
    path={`/user`}
    base={getConfigNew('scm')}
    {...props}
  />
)

export type UseUpdateUserProps = Omit<
  UseMutateProps<TypesUser, UsererrorError, void, UserUpdateInput, void>,
  'path' | 'verb'
>

export const useUpdateUser = (props: UseUpdateUserProps) =>
  useMutate<TypesUser, UsererrorError, void, UserUpdateInput, void>('PATCH', `/user`, {
    base: getConfigNew('scm'),
    ...props
  })

export type CreateTokenProps = Omit<
  MutateProps<TypesUser, UsererrorError, void, TypesTokenResponse, void>,
  'path' | 'verb'
>

export const CreateToken = (props: CreateTokenProps) => (
  <Mutate<TypesUser, UsererrorError, void, TypesTokenResponse, void>
    verb="POST"
    path={`/user/token`}
    base={getConfigNew('scm')}
    {...props}
  />
)

export type UseCreateTokenProps = Omit<
  UseMutateProps<TypesUser, UsererrorError, void, TypesTokenResponse, void>,
  'path' | 'verb'
>

export const useCreateToken = (props: UseCreateTokenProps) =>
  useMutate<TypesUser, UsererrorError, void, TypesTokenResponse, void>('POST', `/user/token`, {
    base: getConfigNew('scm'),
    ...props
  })

export interface ListUsersQueryParams {
  sort?: 'id' | 'email' | 'created' | 'updated'
  direction?: 'asc' | 'desc'
  page?: number
  per_page?: number
}

export type ListUsersProps = Omit<GetProps<TypesUser[], UsererrorError, ListUsersQueryParams, void>, 'path'>

export const ListUsers = (props: ListUsersProps) => (
  <Get<TypesUser[], UsererrorError, ListUsersQueryParams, void> path={`/users`} base={getConfigNew('scm')} {...props} />
)

export type UseListUsersProps = Omit<UseGetProps<TypesUser[], UsererrorError, ListUsersQueryParams, void>, 'path'>

export const useListUsers = (props: UseListUsersProps) =>
  useGet<TypesUser[], UsererrorError, ListUsersQueryParams, void>(`/users`, { base: getConfigNew('scm'), ...props })

export type CreateUserProps = Omit<MutateProps<TypesUser, UsererrorError, void, TypesUserInput, void>, 'path' | 'verb'>

export const CreateUser = (props: CreateUserProps) => (
  <Mutate<TypesUser, UsererrorError, void, TypesUserInput, void>
    verb="POST"
    path={`/users`}
    base={getConfigNew('scm')}
    {...props}
  />
)

export type UseCreateUserProps = Omit<
  UseMutateProps<TypesUser, UsererrorError, void, TypesUserInput, void>,
  'path' | 'verb'
>

export const useCreateUser = (props: UseCreateUserProps) =>
  useMutate<TypesUser, UsererrorError, void, TypesUserInput, void>('POST', `/users`, {
    base: getConfigNew('scm'),
    ...props
  })

export type DeleteUserProps = Omit<MutateProps<void, UsererrorError, void, string, void>, 'path' | 'verb'>

export const DeleteUser = (props: DeleteUserProps) => (
  <Mutate<void, UsererrorError, void, string, void>
    verb="DELETE"
    path={`/users`}
    base={getConfigNew('scm')}
    {...props}
  />
)

export type UseDeleteUserProps = Omit<UseMutateProps<void, UsererrorError, void, string, void>, 'path' | 'verb'>

export const useDeleteUser = (props: UseDeleteUserProps) =>
  useMutate<void, UsererrorError, void, string, void>('DELETE', `/users`, { base: getConfigNew('scm'), ...props })

export interface GetUserEmailPathParams {
  email: string
}

export type GetUserEmailProps = Omit<GetProps<TypesUser, UsererrorError, void, GetUserEmailPathParams>, 'path'> &
  GetUserEmailPathParams

export const GetUserEmail = ({ email, ...props }: GetUserEmailProps) => (
  <Get<TypesUser, UsererrorError, void, GetUserEmailPathParams>
    path={`/users/${email}`}
    base={getConfigNew('scm')}
    {...props}
  />
)

export type UseGetUserEmailProps = Omit<UseGetProps<TypesUser, UsererrorError, void, GetUserEmailPathParams>, 'path'> &
  GetUserEmailPathParams

export const useGetUserEmail = ({ email, ...props }: UseGetUserEmailProps) =>
  useGet<TypesUser, UsererrorError, void, GetUserEmailPathParams>(
    (paramsInPath: GetUserEmailPathParams) => `/users/${paramsInPath.email}`,
    { base: getConfigNew('scm'), pathParams: { email }, ...props }
  )
