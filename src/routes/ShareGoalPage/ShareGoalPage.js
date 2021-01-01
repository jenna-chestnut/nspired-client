import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import GoalListItem from '../../components/GoalListItem/GoalListItem';
import ShareGoalForm from '../../components/ShareGoalForm/ShareGoalForm';
import NSpiredContext from '../../contexts/NSpiredContext';
import GoalsService from '../../services/goals-api-service';
import UpvotesService from '../../services/upvotes-api-service';
import './ShareGoalPage.css';

export default class ShareGoalPage extends Component {
  static contextType = NSpiredContext;

  static defaultProps = {
    history: {
      push: () => {},
    },
    match: { params: { goalId: 0 } }
  }

  componentDidMount() {
		this.context.clearError();

		GoalsService.getUserGoals()
		.then(this.context.setUserGoals)
    .catch(this.context.setError);
  }

  handleShareSuccess = (id) => {
    UpvotesService.postUpvote(id)
    .then(() => this.props.history.push(`/win-wall`));
  }

  createConfetti() {
    let confetti = Array(15);
    confetti = confetti.fill(<div className='confetti'></div>)
    return confetti;
  }

  render() {
    const { goalId } = this.props.match.params;
    
    const { userGoals = [] } = this.context;
		
		const goal = userGoals.find(goal => goal.goal_id === parseInt(goalId)) 
      || {}

    return (
      <>
      <div className='container'>{this.createConfetti()}
        <div className='share-win-background'>
            <h1 className='you-did-it'>YOU DID IT!{' '}<FontAwesomeIcon className='v-green' icon={['far','check-circle']}></FontAwesomeIcon></h1> 

        <section className="share-win">
        <h2>Wanna share your win?</h2>

          <GoalListItem name={goal.goal_name} is_creator={goal.is_creator} toShare={true}/>
          <ShareGoalForm onShareSuccess={this.handleShareSuccess} 
          match={this.props.match}/>
        </section>
        </div>
        </div>
        </>
    )
  }
}
