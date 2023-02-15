import PropTypes from 'prop-types';
import React, { Component } from 'react';
import {
  addSong,
  getFavoriteSongs,
  removeSong,
} from '../services/favoriteSongsAPI';

export default class MusicCard extends Component {
  state = {
    checked: false,
    isFavoritesLoading: true,
  };

  componentDidMount() {
    this.favoriteData();
  }

  favoriteData = () => {
    this.setState(
      {
        isFavoritesLoading: true,
      },
      async () => {
        const { song } = this.props;
        const favoritesSongs = await getFavoriteSongs();
        favoritesSongs.forEach((favSong) => {
          if (favSong.trackId === song.trackId) {
            this.setState({ checked: true });
          }
        });
        this.setState({ isFavoritesLoading: false });
      },
    );
  };

  addFavMusic = ({ target: { checked } }) => {
    const { song } = this.props;
    this.setState({ checked });
    if (checked) {
      this.setState({ isFavoritesLoading: true }, () => {
        addSong(song);
        this.setState({ isFavoritesLoading: false });
      });
    } else {
      this.setState({ isFavoritesLoading: true }, () => {
        removeSong(song);
        this.setState({ isFavoritesLoading: false });
      });
    }
  };

  render() {
    const { song } = this.props;
    const { trackName, previewUrl, trackId } = song;
    const { isFavoritesLoading, checked } = this.state;
    return (
      <div className="MusicCard">
        <p>{trackName}</p>
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>
        <label
          htmlFor={ `checkbox-music-${trackId}` }
          className="favorite-container"
        >
          <input
            type="checkbox"
            name=""
            id={ `checkbox-music-${trackId}` }
            data-testid={ `checkbox-music-${trackId}` }
            onChange={ this.addFavMusic }
            checked={ checked }
          />
          {isFavoritesLoading ? 'Carregando...' : 'Favorita'}
        </label>
      </div>
    );
  }
}

MusicCard.propTypes = {
  song: PropTypes.shape({
    previewUrl: PropTypes.string.isRequired,
    trackName: PropTypes.string.isRequired,
    trackId: PropTypes.number.isRequired,
  }).isRequired,
};
