import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import NSpiredContext from '../../contexts/NSpiredContext';

export default class RegistrationPage extends Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  static contextType = NSpiredContext;

  handleRegistrationSuccess = () => {
    this.context.clearError();

    const { location, history } = this.props
    const destination = (location.state || {}).from || '/dashboard'
    history.push(destination)
  }

  render() {
    return (
      <section className='login'>
        <RegistrationForm onRegistrationSuccess={this.handleRegistrationSuccess}/>
      </section>
    )
  }
}
