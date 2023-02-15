import PropTypes from 'prop-types';
import React, { Component } from 'react';

export default class MusicCard extends Component {
  render() {
    const { song } = this.props;
    const { trackName, previewUrl } = song;
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
        <input type="checkbox" name="" id="" />
      </div>
    );
  }
}

MusicCard.propTypes = {
  song: PropTypes.shape({
    previewUrl: PropTypes.string.isRequired,
    trackName: PropTypes.string.isRequired,
  }).isRequired,
};
