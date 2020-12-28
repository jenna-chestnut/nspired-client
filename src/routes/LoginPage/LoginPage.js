import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm';

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleLoginSuccess = () => {
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
