import React, { Component } from 'react'
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import NSpiredContext from '../../contexts/NSpiredContext';
import GoalsService from '../../services/goals-api-service';

export default class RegistrationPage extends Component {
  static contextType = NSpiredContext;

  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleRegistrationSuccess = () => {
    this.context.clearError();

    const { goal } = this.context;
    const redirect = this.props.history.push('/dashboard');

    if (goal) {
      GoalsService.postNewGoal(goal)
      .then(GoalsService.getUserGoals)
      .then(this.context.setUserGoals)
      .then(this.context.clearGoal)
      .then(redirect)
      .catch(this.context.setError)
    }
    else redirect();
  }

  render() {
    return (
      <section className='login'>
        <RegistrationForm onRegistrationSuccess={this.handleRegistrationSuccess}/>
      </section>
    )
  }
}
