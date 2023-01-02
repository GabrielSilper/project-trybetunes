import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class HeaderContent extends Component {
  render() {
    const { user } = this.props;
    const { name } = user;
    return (
      <div>
        <p data-testid="header-user-name">{name}</p>
      </div>
    );
  }
}

HeaderContent.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
