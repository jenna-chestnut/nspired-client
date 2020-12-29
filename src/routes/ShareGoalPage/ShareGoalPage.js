import React, { Component } from 'react';
import GoalListItem from '../../components/GoalListItem/GoalListItem';
import ShareGoalForm from '../../components/ShareGoalForm/ShareGoalForm';
import NSpiredContext from '../../contexts/NSpiredContext';
import GoalsService from '../../services/goals-api-service';
import './ShareGoalPage.css';

export default class ShareGoalPage extends Component {
  static contextType = NSpiredContext;

  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  componentDidMount() {
		this.context.clearError();

		GoalsService.getUserGoals()
		.then(this.context.setUserGoals)
    .catch(this.context.setError);
  }

  handleShareSuccess = () => {
    this.props.history.push(`/win-wall`)
  }

  render() {
    const { goalId } = this.props.match.params;
    
    const { userGoals = [] } = this.context;
		
		const goal = userGoals.find(goal => goal.goal_id === parseInt(goalId)) 
      || {}
 

    return (
        <div className='share-win-background'>
            <h1 className='you-did-it'>YOU DID IT!</h1> 

        <section className="share-win">
        <h2>Wanna share your win?</h2>

          <GoalListItem name={goal.goal_name} toShare={true}/>
          <ShareGoalForm onShareSuccess={this.handleShareSuccess} 
          match={this.props.match}/>

        </section>
        </div>
    )
  }
}
