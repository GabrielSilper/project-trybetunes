import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Loading from './Loading';
import MusicCard from './MusicCard';

export default class AlbumContent extends Component {
  render() {
    const { isLoading, album } = this.props;
    const { artworkUrl100, artistName, collectionName } = album[0];
    return (
      <div className="default-page">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="AlbumContent">
            <div className="album-info">
              <img
                src={ artworkUrl100 }
                alt={ artistName }
                data-testid="album-name"
              />
              <div className="album-info-text">
                <p data-testid="artist-name">{collectionName}</p>
                <p>{artistName}</p>
              </div>
            </div>
            <div className="album-music-list">
              {album.map((song, index) => {
                if (index !== 0) {
                  return <MusicCard key={ song.trackId } song={ song } />;
                }
                return false;
              })}
            </div>
          </div>
        )}
      </div>
    );
  }
}

AlbumContent.propTypes = {
  album: PropTypes.arrayOf(PropTypes.shape({
    artworkUrl100: PropTypes.string.isRequired,
    artistName: PropTypes.string.isRequired,
    collectionName: PropTypes.string.isRequired,
  })).isRequired,
  isLoading: PropTypes.bool.isRequired,
};
