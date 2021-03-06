import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm';
import NSpiredContext from '../../contexts/NSpiredContext';

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  static contextType = NSpiredContext;

  handleLoginSuccess = () => {
    this.context.clearError();

    const { location, history } = this.props
    const destination = (location.state || {}).from || '/dashboard'
    history.push(destination)
  }

  render() {
    return (
      <section className='login'>
        <LoginForm onLoginSuccess={this.handleLoginSuccess}/>
      </section>
    )
  }
}
