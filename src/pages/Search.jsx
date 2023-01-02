import React, { Component } from 'react';
import Header from '../components/Header';
import Loading from '../components/Loading';

export default class Search extends Component {
  state = {
    isLoading: false,
  };

  render() {
    const { isLoading } = this.state;
    return (
      <div data-testid="page-search">
        { isLoading ? <Loading /> : <Header />}
      </div>
    );
  }
}
