import { RepoActionTypes } from '../actions/repos';

const defaultState = {
  repos: [],
  loading: false,
}

const repos = (state = defaultState, action) => {
  switch (action.type) {
    case RepoActionTypes.FETCH_REPOS:
      return {
        ...state,
        error: null,
        loading: true,
      };
      case RepoActionTypes.SUCCESS_FETCH_REPOS:
        return {
          ...state,
          repos: action.repos,
          error: null,
          loading: false,
        };
      case RepoActionTypes.ERROR_FETCH_REPOS:
        return {
          ...state,
          repos: [],
          error: action.error,
          loading: false,
        };
    default:
      return state;
  }
}

export default repos;
