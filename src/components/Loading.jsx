import React, { Component } from 'react';

export default class Loading extends Component {
  render() {
    return (
      <div className="Loading">
        <div className="loading-logo" />
        <p className="loading-text">Carregando...</p>
      </div>
    );
  }
}
