import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import wave from '../images/wave.png';
import defaultPhoto from '../images/defaultwrg.png';

export default class HeaderContent extends Component {
  render() {
    const { user } = this.props;
    const { name, image } = user;
    const perfilPhoto = image === '' ? defaultPhoto : image;
    return (
      <nav className="HeaderContent">
        <div className="header-logo">
          <img src={ wave } alt="wave icon" className="nav-icon" />
          <span>TrybeTunes</span>
          <img src={ wave } alt="wave icon" className="nav-icon" />
        </div>
        <div className="nav-links">
          <div className="teste-item">
            <Link
              to="/search"
              data-testid="link-to-search"
              className="nav-item"
            >
              <span>Pesquisar</span>
            </Link>
          </div>
          <div>
            <Link
              to="/favorites"
              data-testid="link-to-favorites"
              className="nav-item"
            >
              <span>Favoritas</span>
            </Link>
          </div>
          <div>
            <Link
              to="/profile"
              data-testid="link-to-profile"
              className="nav-item"
            >
              <img
                src={ perfilPhoto }
                alt={ `Foto de ${name}` }
                className="perfil nav-icon"
              />
              <span data-testid="header-user-name">{name}</span>
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}

HeaderContent.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
