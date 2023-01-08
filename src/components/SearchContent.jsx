import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AlbumCard from './AlbumCard';
import Footer from './Footer';
import Loading from './Loading';

export default class SearchContent extends Component {
  listAlbums = () => {
    const { albums, search } = this.props;
    if (albums.length <= 0) {
      return (
        <div className="albums-container">
          <p>{`Resultado de álbuns de: ${search}`}</p>
          <p>Nenhum álbum foi encontrado</p>
        </div>
      );
    }
    return (
      <div className="albums-container">
        <p>{`Resultado de álbuns de: ${search}`}</p>
        {albums.map((song) => (
          <AlbumCard key={ song.collectionId } song={ song } />
        ))}
      </div>
    );
  };

  render() {
    const {
      handleChange,
      handleClick,
      buttonDisabled,
      isLoading,
      triggerSearch,
      artist,
    } = this.props;
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
                value={ artist }
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
            {triggerSearch && this.listAlbums()}
            <Footer />
          </div>
        )}
      </div>
    );
  }
}

SearchContent.propTypes = {
  albums: PropTypes.arrayOf(PropTypes.string).isRequired,
  artist: PropTypes.string.isRequired,
  buttonDisabled: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  search: PropTypes.string.isRequired,
  triggerSearch: PropTypes.bool.isRequired,
};
