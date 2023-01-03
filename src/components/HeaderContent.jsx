import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HeaderContent extends Component {
  render() {
    const { user } = this.props;
    const { name } = user;
    return (
      <nav className="HeaderContent">
        <ul className="nav-links">
          <li>
            <Link
              to="/search"
              data-testid="link-to-search"
              className="link-navbar"
            >
              Pesquisar
            </Link>
          </li>
          <li>
            <Link
              to="/favorites"
              data-testid="link-to-favorites"
              className="link-navbar"
            >
              Suas Músicas
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              data-testid="link-to-profile"
              className="link-navbar"
            >
              Perfil
            </Link>
          </li>
        </ul>
        <p data-testid="header-user-name">{name}</p>
      </nav>
    );
  }
}

HeaderContent.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};
