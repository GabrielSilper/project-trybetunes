import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Footer from '../components/Footer';
import Loading from '../components/Loading';
import wave from '../images/wave.png';
import { createUser } from '../services/userAPI';

export default class Login extends Component {
  state = {
    buttonDisabled: true,
    name: '',
    isLoading: false,
  };

  handleClick = () => {
    const { name } = this.state;
    const { history } = this.props;
    this.setState({ isLoading: true }, async () => {
      await createUser({ name });
      history.push('/search');
    });
  };

  handleChange = ({ target: { value } }) => {
    this.setState({ name: value }, this.buttonValidation);
  };

  buttonValidation = () => {
    const { name } = this.state;
    const nameOk = name.length > 2;
    this.setState({ buttonDisabled: !nameOk });
  };

  render() {
    const { buttonDisabled, isLoading } = this.state;
    return (
      <div data-testid="page-login">
        {isLoading ? (
          <Loading />
        ) : (
          <div className="Login">
            <div className="login-logo">
              <img src={ wave } className="headphone-png" alt="kjshdfhskjdf" />
              <h1 className="logo-title">TrybeTunes</h1>
              <img src={ wave } className="headphone-png" alt="kjshdfhskjdf" />
            </div>
            <form action="" className="login-card" autoComplete="off">
              <label htmlFor="login-name-input">
                <input
                  type="text"
                  placeholder="Digite seu nome aqui..."
                  data-testid="login-name-input"
                  id="login-name-input"
                  className="login-input"
                  onChange={ this.handleChange }
                />
              </label>
              <button
                type="button"
                className="login-button"
                data-testid="login-submit-button"
                disabled={ buttonDisabled }
                onClick={ this.handleClick }
              >
                Entrar
              </button>
            </form>
          </div>
        )}
        <Footer />
      </div>
    );
  }
}

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};
