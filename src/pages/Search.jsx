import React, { Component } from 'react';
import Header from '../components/Header';
import SearchContent from '../components/SearchContent';
import searchAlbumsAPI from '../services/searchAlbumsAPI';

export default class Search extends Component {
  state = {
    isLoadingContent: true,
    isLoading: false,
    artist: '',
    search: '',
    triggerSearch: false,
    buttonDisabled: true,
    result: [],
  };

  changeLoadContent = () => {
    this.setState({ isLoadingContent: false });
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ artist: value }, this.buttonValidation);
  };

  buttonValidation = () => {
    const { artist } = this.state;
    const artistOK = artist.length > 1;
    this.setState({ buttonDisabled: !artistOK });
  };

  handleClick = () => {
    const { artist } = this.state;
    this.setState({ isLoading: true, search: artist }, async () => {
      const result = await searchAlbumsAPI(artist);
      this.setState({ result }, () => {
        this.setState(
          { isLoading: false, triggerSearch: true, artist: '' },
          this.buttonValidation,
        );
      });
    });
  };

  render() {
    const {
      isLoadingContent,
      buttonDisabled,
      isLoading,
      result,
      triggerSearch,
      artist,
      search,
    } = this.state;
    return (
      <div data-testid="page-search">
        <Header changeLoadContent={ this.changeLoadContent } />
        {!isLoadingContent && (
          <SearchContent
            handleChange={ this.handleChange }
            handleClick={ this.handleClick }
            buttonDisabled={ buttonDisabled }
            isLoading={ isLoading }
            albums={ result }
            triggerSearch={ triggerSearch }
            artist={ artist }
            search={ search }
          />
        )}
      </div>
    );
  }
}
