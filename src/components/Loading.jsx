import React, { Component } from 'react';

export default class Loading extends Component {
  render() {
    return (
      <div className="Loading">
        <div className="loading-logo" />
        <p>Carregando...</p>
      </div>
    );
  }
}
