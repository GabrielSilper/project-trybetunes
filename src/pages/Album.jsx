import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AlbumContent from '../components/AlbumContent';
import Header from '../components/Header';
import getMusics from '../services/musicsAPI';

export default class Album extends Component {
  state = {
    album: [],
    isLoadingContent: true,
    isLoading: false,
  };

  componentDidMount() {
    this.albumDataAPI();
  }

  changeLoadContent = () => {
    this.setState({ isLoadingContent: false });
  };

  albumDataAPI = () => {
    const { match } = this.props;
    const { params } = match;
    const { id } = params;
    this.setState({ isLoading: true }, async () => {
      const album = await getMusics(id);
      this.setState({ album, isLoading: false });
    });
  };

  render() {
    const { isLoadingContent, isLoading, album } = this.state;
    return (
      <div data-testid="page-album">
        <Header changeLoadContent={ this.changeLoadContent } />
        {!isLoadingContent && <AlbumContent isLoading={ isLoading } album={ album } />}
      </div>
    );
  }
}

Album.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
};
