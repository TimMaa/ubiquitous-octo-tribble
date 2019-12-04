export const fetchReposError = error => ({
  type: RepoActionTypes.ERROR_FETCH_REPOS,
  error,
});

export const fetchRepos = () => ({
  type: RepoActionTypes.FETCH_REPOS,
});

export const fetchReposSuccess = repos => ({
  type: RepoActionTypes.SUCCESS_FETCH_REPOS,
  repos,
});

export const RepoActionTypes = {
  ERROR_FETCH_REPOS: 'ERROR_FETCH_REPOS',
  FETCH_REPOS: 'FETCH_REPOS',
  SUCCESS_FETCH_REPOS: 'SUCCESS_FETCH_REPOS',
}