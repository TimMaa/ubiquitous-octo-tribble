import repos from './repos';
import { RepoActionTypes } from '../actions/repos';

describe('reducer', () => {
  it('nothing should return initial state', () => {
    expect(repos({}, {})).toEqual({});
  });

  it('CLEAR_REPOS should return inital state and repos null', () => {
    expect(repos({}, { type: RepoActionTypes.CLEAR_REPOS })).toEqual({ repos: null });
  });

  it('FETCH_REPOS should return inital state, error null and loading true', () => {
    expect(repos({}, { type: RepoActionTypes.FETCH_REPOS })).toEqual({ error: null, loading: true });
  });

  it('SUCCESS_FETCH_REPOS should return inital state, transmitted repos, error null and loading false', () => {
    expect(repos({}, { type: RepoActionTypes.SUCCESS_FETCH_REPOS, repos: ['test'] }))
      .toEqual({ repos: ['test'], error: null, loading: false });
  });

  it('ERROR_FETCH_REPOS should return inital state, transmitted error, repos null and loading false', () => {
    expect(repos({}, { type: RepoActionTypes.ERROR_FETCH_REPOS, error: 'test' }))
      .toEqual({ repos: null, error: 'test', loading: false });
  });
})