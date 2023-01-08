import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class AlbumCard extends Component {
  render() {
    const { song } = this.props;
    const {
      artworkUrl100,
      collectionName,
      artistName,
      collectionId,
      trackCount,
    } = song;
    const maxChar = 70;
    const artistNameCondition = artistName.length > maxChar;
    const artistNameSliced = `${artistName.slice(0, maxChar)}...`;
    const artist = artistNameCondition ? artistNameSliced : artistName;
    return (
      <div className="AlbumCard">
        <div className="album-image">
          <img src={ artworkUrl100 } alt={ collectionName } />
        </div>
        <div className="album-content">
          <Link
            to={ `/album/${collectionId}` }
            data-testid={ `link-to-album-${collectionId}` }
            className="album-content-text link"
          >
            <span>{collectionName}</span>
          </Link>
          <p className="album-content-text">{artist}</p>
          <p className="album-content-text">{`Músicas: ${trackCount}`}</p>
        </div>
      </div>
    );
  }
}

AlbumCard.propTypes = {
  song: PropTypes.shape({
    artistName: PropTypes.string.isRequired,
    artworkUrl100: PropTypes.string.isRequired,
    collectionId: PropTypes.number.isRequired,
    collectionName: PropTypes.string.isRequired,
    trackCount: PropTypes.number.isRequired,
  }).isRequired,
};
