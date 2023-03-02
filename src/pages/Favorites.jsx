import React, { Component } from 'react';
import FavoriteContent from '../components/FavoriteContent';
import Header from '../components/Header';

export default class Favorites extends Component {
  state = {
    isLoadingContent: true,
  };

  changeLoadContent = () => {
    this.setState({ isLoadingContent: false });
  };

  render() {
    const { isLoadingContent } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header changeLoadContent={ this.changeLoadContent } />
        {!isLoadingContent && <FavoriteContent />}
      </div>
    );
  }
}
