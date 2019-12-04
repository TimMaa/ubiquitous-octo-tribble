import { clearRepos, fetchRepos, fetchReposError, fetchReposSuccess, RepoActionTypes } from './repos';

describe('actions', () => {
  it('clearRepos', () => {
    const expectedAction = { type: RepoActionTypes.CLEAR_REPOS };
    expect(clearRepos()).toEqual(expectedAction);
  });

  it('fetchRepos', () => {
    const expectedAction = { type: RepoActionTypes.FETCH_REPOS };
    expect(fetchRepos()).toEqual(expectedAction);
  });

  it('fetchReposError', () => {
    const error = 'Test Error';
    const expectedAction = { 
      type: RepoActionTypes.ERROR_FETCH_REPOS,
      error,
    };
    expect(fetchReposError(error)).toEqual(expectedAction);
  });

  it('fetchReposSuccess', () => {
    const repos = 'Test Repos'
    const expectedAction = { 
      type: RepoActionTypes.SUCCESS_FETCH_REPOS,
      repos
    };
    expect(fetchReposSuccess(repos)).toEqual(expectedAction);
  });
})