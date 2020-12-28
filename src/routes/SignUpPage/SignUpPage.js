import React, { Component } from 'react'
import SignUpForm from '../../components/SignUpForm/SignUpForm';

export default class SignUpPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleSignUpSuccess = () => {
    const { location, history } = this.props
    const destination = (location.state || {}).from || '/dashboard'
    history.push(destination)
  }

  render() {
    return (
      <section className='login'>
        <SignUpForm onSignUpSuccess={this.handleSignUpSuccess}/>
      </section>
    )
  }
}
