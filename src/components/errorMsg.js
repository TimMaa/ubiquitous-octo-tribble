import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import './errorMsg.css'

const ErrorMsg = ({ error }) => {
  return (
    <div className="error-container">
      <span className="error">Error: {error}</span>
    </div>
  )
}

ErrorMsg.propTypes = {
  error: PropTypes.string.isRequired,
}

const mapStateToProps = state => ({
  error: state.error,
});

export default connect(mapStateToProps)(ErrorMsg);