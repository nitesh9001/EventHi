/**
 *              ___             _   _  _ _
 *             | __|_ _____ _ _| |_| || (_)
 * Property of:| _|\ V / -_) ' \  _| __ | |
 *             |___|\_/\___|_||_\__|_||_|_|
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Admin.css';

class Admin extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <p>...</p>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Admin);
