import { RepoActionTypes } from '../actions/repos';

const INITIAL_STATE = {
  error: null,
  loading: false,
  repos: null,
}

const repos = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case RepoActionTypes.CLEAR_REPOS:
      return {
        ...state,
        repos: INITIAL_STATE.repos,
      };
    case RepoActionTypes.FETCH_REPOS:
      return {
        ...state,
        error: INITIAL_STATE.error,
        loading: true,
      };
    case RepoActionTypes.SUCCESS_FETCH_REPOS:
      return {
        ...state,
        repos: action.repos,
        error: INITIAL_STATE.error,
        loading: INITIAL_STATE.loading,
      };
    case RepoActionTypes.ERROR_FETCH_REPOS:
      return {
        ...state,
        repos: INITIAL_STATE.repos,
        error: action.error,
        loading: INITIAL_STATE.loading,
      };
    default:
      return state;
  }
}

export default repos;
