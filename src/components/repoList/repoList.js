import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import './repoList.css'

export const RepoList = ({ repos }) => {
  return (
    <div className="repo-list-container">
      <div className="repo-list-title">
        <span>Repository Name</span>
        <span>Forks <i className="fas fa-utensils"></i></span>
        <span>Stars <i className="fas fa-star"></i></span>
      </div>
      { repos.length ?
          <ul className="repo-list">
            { repos.map(repo => (
              <li className="repo-list-item" key={repo.id}>
                <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                  <span>{repo.name}</span> 
                  <span>{repo.forks}</span>
                  <span>{repo.watchers}</span>
                </a>
              </li>
            )) 
            }
          </ul>
        :
        <div className="no-repos">No repos available</div>
      }
    </div>
  )
}

RepoList.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      forks: PropTypes.number.isRequired,
      html_url: PropTypes.string.isRequired,
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      watchers: PropTypes.number.isRequired,
    })
  ).isRequired,
};

const mapStateToProps = state => ({
  repos: state.repos,
});

export default connect(mapStateToProps)(RepoList);