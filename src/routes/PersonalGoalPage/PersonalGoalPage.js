import React, { Component } from 'react';
import WinWin from '../../components/WinandDeleteButtons/WinWin';
import DeleteWin from '../../components/WinandDeleteButtons/DeleteWin';
import './PersonalGoalPage.css';
import NSpiredContext from '../../contexts/NSpiredContext';
import GoalsService from '../../services/goals-api-service';
import AdviceService from '../../services/advice-api-service';
import getTimeLeft from '../../services/goal-expiration-service';

export default class PersonalGoalPage extends Component {
  static contextType = NSpiredContext;

	static defaultProps = {
		goal: {
			completed: false,
			date_created: "2020-11-29T19:17:58.436Z",
			goal_name: "Become a dev",
      id: 1,
      personal_note: 'CAUSE I WANNA!',
      expiration: "2021-01-04T19:17:58.436Z"
		}
  }
  
  componentDidMount() {
		this.context.clearError();
		const id = this.props.match.params.goalId;

		GoalsService.getUserGoals()
		.then(this.context.setUserGoals)
		.catch(this.context.setError);

		AdviceService.getGoalAdvice(id)
			.then(this.context.setAdvice)
			.catch(this.context.setError)
  }

  handleGoalCompletedSuccess = (id) => {
    this.props.history.push(`/share-win/${id}`)
  }

  handleDeleteSuccess = (id) => {
    this.props.history.push(`/dashboard`);
    this.context.deleteGoal(id);
  }
  
  renderAdvice() {

		let { advice } = this.context;

    if (advice.length !== 0) {
    advice = advice.map(item => {
			return (
				<div key={item.id}>
					<p>
						{item.advice_text}
					</p>
					<p className="signature">- {item.user_name}</p>
				</div>
			)
		})

		return <div className="advice-column">
              <h3>
                <i>Advice Column</i>
              </h3>
              {advice}
            </div>
    }
	}

  render() {
    const { goalId } = this.props.match.params;

		const { userGoals = [] } = this.context;
		
		const goal = userGoals.find(goal => goal.goal_id === parseInt(goalId)) 
      || this.props.goal;

    return (
        <section className="view-goal">

            <h2 className='goal-title'>{goal.goal_name}</h2>

            { goal.completed ? ''
              :
              <div className='group'>
                <WinWin id={goal.goal_id} 
                onGoalCompleted={this.handleGoalCompletedSuccess}/>
                <DeleteWin id={goal.goal_id}
                onGoalDeleted={this.handleDeleteSuccess}/>
              </div> 
            }

          <div className="win-item">
            <h3>{goal.completed ? <p>You did it! &#127881;</p> 
            : getTimeLeft(goal.expiration)}</h3>
            <span>Created: {new Date(goal.date_created).toLocaleString()}</span>
          </div>

        <div className="reminder">
        <h4>Remember why you took this on...</h4>
        <p>{goal.personal_note}</p>
      </div>

      {this.renderAdvice()}

      </section>
    )
  }
}
