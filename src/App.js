import React, { useState } from 'react';
import { connect } from 'react-redux';
import ErrorMsg from './components/errorMsg';
import RepoList from './components/repoList';
import { fetchRepos, fetchReposError, fetchReposSuccess, clearRepos } from './actions/repos';
import './App.css';

const gitHubApi = "https://api.github.com";

function App({ dispatch, error, loading, repos }) {

  const [user, setUser] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(fetchRepos());
    return fetch(`${gitHubApi}/users/${user}/repos`)
      .then(response => {
        if (!response.ok) {
          throw response.statusText;
        }
        return response.json()
      })
      .then(repos => dispatch(fetchReposSuccess(repos)))
      .catch(error => dispatch(fetchReposError(error)));
  }

  const handleReset = e => {
    e.preventDefault();
    dispatch(clearRepos());
    setUser('');
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
        <form className="search-form" onSubmit={handleSubmit} onReset={handleReset}>
          <label className="form-label" htmlFor="username">Enter GitHub username:</label>
          <input className="form-field" type="text" id="username" name="username" value={user} onChange={e => setUser(e.target.value)}></input>
          <button className="btn submit-btn" type="submit">Submit</button>
          <button className="btn reset-btn" type="reset">Reset</button>
        </form>
        { repos && <RepoList/> }
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
