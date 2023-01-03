import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { getUser } from '../services/userAPI';
import HeaderContent from './HeaderContent';
import Loading from './Loading';

export default class Header extends Component {
  state = {
    user: [],
    headerLoading: true,
  };

  componentDidMount() {
    this.fetchAPI();
  }

  fetchAPI = async () => {
    const { changeLoadContent } = this.props;
    const user = await getUser();
    this.setState({ user, headerLoading: false }, () => {
      changeLoadContent();
    });
  };

  render() {
    const { headerLoading, user } = this.state;
    return (
      <header data-testid="header-component" className="Header">
        { headerLoading ? <Loading /> : <HeaderContent user={ user } />}
      </header>
    );
  }
}

Header.propTypes = {
  changeLoadContent: PropTypes.func.isRequired,
};
