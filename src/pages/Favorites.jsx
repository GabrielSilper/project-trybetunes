import React, { Component } from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';

export default class Favorites extends Component {
  render() {
    return (
      <div data-testid="page-favorites">
        <Header />
        <Footer />
      </div>
    );
  }
}
