import React from 'react';
import { connect } from 'react-redux';
import ErrorMsg from './components/errorMsg';
import RepoList from './components/repoList';
import { fetchRepos, fetchReposError, fetchReposSuccess } from './actions/repos';
import './App.css';

const gitHubApi = "https://api.github.com";

function App({ dispatch, error, loading, repos }) {
  const handleSubmit = e => {
    e.preventDefault();
    const data = new FormData(e.target);
    dispatch(fetchRepos());
    return fetch(`${gitHubApi}/users/${data.get('username')}/repos`)
      .then(response => {
        if (!response.ok) {
          throw response.statusText;
        }
        return response.json()
      })
      .then(repos => dispatch(fetchReposSuccess(repos)))
      .catch(error => dispatch(fetchReposError(error)));
  }

  return (
    <>
      { loading &&
      <div className="loader">
        <div className="loading-spinners">
          <div className="loading-spinner-1"></div>
          <div className="loading-spinner-2"></div>
        </div>
      </div>
      }
      <div className="main">
        <form className="search-form" onSubmit={handleSubmit}>
          <label className="form-label" htmlFor="username">Enter GitHub username:</label>
          <input className="form-field" type="text" id="username" name="username"></input>
          <button className="submit-btn" type="submit">Submit</button>
        </form>
        { !!repos.length && <RepoList/> }
        { error && <ErrorMsg /> }
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  loading: state.loading,
  repos: state.repos,
  error: state.error
});

export default connect(mapStateToProps)(App);
