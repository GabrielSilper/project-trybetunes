import React, { Component } from 'react';
import { getFavoriteSongs } from '../services/favoriteSongsAPI';
import Loading from './Loading';
import MusicCard from './MusicCard';

export default class FavoriteContent extends Component {
  state = {
    favoriteSongs: [],
    isLoading: true,
  };

  componentDidMount() {
    this.favoritesData();
  }

  favoritesData = () => {
    this.setState({ isLoading: true }, async () => {
      const favoriteSongs = await getFavoriteSongs();
      this.setState({ favoriteSongs }, () => {
        this.setState({ isLoading: false });
      });
    });
  };

  favoriteList = () => {
    const { favoriteSongs } = this.state;
    return favoriteSongs.map((song) => (
      <MusicCard key={ song.trackId } song={ song } />
    ));
  };

  render() {
    const { isLoading, favoriteSongs } = this.state;
    const verifyContent = favoriteSongs.length < 1;
    const empty = <h2 className="empty-favorite">Nenhuma música favorita.</h2>;
    return (
      <div className="default-page">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="FavoriteContent">
            <h1 style={ { color: 'white' } }>Músicas Favoritas:</h1>
            {verifyContent ? (
              empty
            ) : (
              <div className="album-music-list">{this.favoriteList()}</div>
            )}
          </div>
        )}
      </div>
    );
  }
}
