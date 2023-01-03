import React, { Component } from "react";
import Header from "../components/Header";
import SearchContent from "../components/SearchContent";

export default class Search extends Component {
  state = {
    isLoadingContent: true,
  };

  changeLoadContent = () => {
    this.setState({ isLoadingContent: false });
  };

  render() {
    const { isLoadingContent } = this.state;
    return (
      <div data-testid="page-search">
        <Header changeLoadContent={this.changeLoadContent}/>
        {!isLoadingContent && <SearchContent />}
      </div>
    );
  }
}
