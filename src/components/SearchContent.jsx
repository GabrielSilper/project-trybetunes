import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Footer from './Footer';
import Loading from './Loading';

export default class SearchContent extends Component {
  listAlbums = () => {
    const { albums } = this.props;
    if (albums.length <= 0) {
      return (
        <div className="albums-container">
          <p>{'Resultado de álbuns de: '}</p>
          <p>Nenhum álbum foi encontrado</p>
        </div>
      );
    }
    return (
      <div className="albums-container">
        <p>{'Resultado de álbuns de: '}</p>
        {albums.map((song) => (
          <li>{song.artistName}</li>
        ))}
      </div>
    );
  };

  render() {
    const { handleChange, handleClick, buttonDisabled, isLoading } = this.props;
    return (
      <div className="default-page">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="SearchContent">
            <div className="search-container">
              <input
                type="text"
                data-testid="search-artist-input"
                placeholder="Nome do Artista"
                className="search-input login-input"
                onChange={ handleChange }
              />
              <button
                type="button"
                data-testid="search-artist-button"
                disabled={ buttonDisabled }
                className="login-button"
                onClick={ handleClick }
              >
                Pesquisar
              </button>
            </div>
            {this.listAlbums()}
            <Footer />
          </div>
        )}
      </div>
    );
  }
}

SearchContent.propTypes = {
  albums: PropTypes.shape({
    length: PropTypes.number,
    map: PropTypes.func,
  }).isRequired,
  buttonDisabled: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};
