import React, { Component } from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default class SignUpPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

//   handleRegistrationSuccess = user => {
//     const { history } = this.props
//     history.push('/login')
//   }

  render() {
    return (
      <section className='login'>
        <SignUpForm />
      </section>
    )
  }
}
