import React, { Component } from 'react'
import LoginForm from '../../components/LoginForm/LoginForm';

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  // handleRegistrationSuccess = user => {
  //   const { history } = this.props
  //   history.push('/dashboard')
  // }

  render() {
    return (
      <section className='login'>
        <LoginForm />
      </section>
    )
  }
}
