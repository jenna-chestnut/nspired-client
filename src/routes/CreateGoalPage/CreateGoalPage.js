import React, { Component } from 'react';
import CreateGoalForm from '../../components/CreateGoalForm/CreateGoalForm';
import NSpiredContext from '../../contexts/NSpiredContext';
import GoalsService from '../../services/goals-api-service';

export default class CreateGoalPage extends Component {
  static contextType = NSpiredContext;

  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  componentDidMount() {
		this.context.clearError();

		GoalsService.getWinWall()
		.then(this.context.setWinWall)
    .catch(this.context.setError);
  }

  handleCreateSuccess = () => {
    this.props.history.push(`/dashboard`)
  }

  render() {
    const { goalId } = this.props.match.params;
    
    const { winWall = [] } = this.context;
		
		const clone = winWall.find(goal => goal.id === parseInt(goalId));

    return (
          <CreateGoalForm clone={clone} onCreateSuccess={this.handleCreateSuccess} 
          match={this.props.match}/>
    )
  }
}
