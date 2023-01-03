import PropTypes from "prop-types";
import React, { Component } from "react";
import Footer from "./Footer";
import Loading from "./Loading";

export default class SearchContent extends Component {
  render() {
    const { handleChange, handleClick, buttonDisabled, isLoading } = this.props;
    return (
      <div className="default-page">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="SearchContent">
            <div className="search-container">
              <input
                type="text"
                data-testid="search-artist-input"
                placeholder="Nome do Artista"
                className="search-input login-input"
                onChange={handleChange}
              />
              <button
                type="button"
                data-testid="search-artist-button"
                disabled={buttonDisabled}
                className="login-button"
                onClick={handleClick}
              >
                Pesquisar
              </button>
            </div>
            <Footer />
          </div>
        )}
      </div>
    );
  }
}

SearchContent.propTypes = {
  buttonDisabled: PropTypes.bool.isRequired,
  handleChange: PropTypes.func.isRequired,
};
