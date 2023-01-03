import React, { Component } from "react";
import Footer from "./Footer";

export default class SearchContent extends Component {
  render() {
    return (
      <div className="SearchContent default-page">
        <input
          type="text"
          data-testid="search-artist-input"
          placeholder="Nome do Artista"
          className="search-input"
        />
        <button type="button" data-testid="search-artist-button">
          Pesquisar
        </button>
        <Footer />
      </div>
    );
  }
}
