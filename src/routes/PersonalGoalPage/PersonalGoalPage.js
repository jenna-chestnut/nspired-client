import React, { Component } from 'react';
import WinWin from '../../components/WinandDeleteButtons/WinWin';
import DeleteWin from '../../components/WinandDeleteButtons/DeleteWin';
import './PersonalGoalPage.css';
import NSpiredContext from '../../contexts/NSpiredContext';
import GoalsService from '../../services/goals-api-service';
import AdviceService from '../../services/advice-api-service';
import { Link } from 'react-router-dom';
import getTimeLeft from '../../services/goal-expiration-service';
import AdviceColumn from '../../components/AdviceColumn/AdviceColumn';

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
    
    GoalsService.getWinWall()
		.then(this.context.setWinWall)
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

  renderGoalStatus(goal_id, completed, is_creator, expiration) {
    const is_public = this.context.winWall.find(goal => goal.id === goal_id);

    let status = !completed
    ?
    getTimeLeft(expiration)
    :
    !is_creator || is_public
    ?
    <p>You did it! &#127881; <Link to={`/win-wall/${goal_id}`}>View Win here.</Link></p> 
    :
    <p>You did it! &#127881; <Link to={`/share-win/${goal_id}`}>Wanna share your win?</Link></p> 

    return status;
  }
  
  renderGoalContent() {
    const { goalId } = this.props.match.params;
		const { userGoals = [], winWall = [] } = this.context;
    const goal = userGoals.find(goal => goal.goal_id === parseInt(goalId));
    const win = winWall.find(win => win.id === parseInt(goalId));
    let content;

    if(goal) {
      const { goal_name, expiration, is_creator, completed,
        date_created, goal_id, personal_note} = goal;
        content = <section className="view-goal">

        <h2 className='goal-title'>{goal_name}</h2>

        { goal.completed ? ''
          :
          <div className='group'>
            <WinWin id={goal_id} 
            onGoalCompleted={this.handleGoalCompletedSuccess}/>
            <DeleteWin id={goal_id}
            onGoalDeleted={this.handleDeleteSuccess}/>
          </div> 
        }

        <div className="win-item">
          <h3>{this.renderGoalStatus(goal_id, completed, is_creator, expiration)}</h3>
          <span>Created: {new Date(date_created).toLocaleString()}</span>
        </div>

        <div className="reminder">
          <h4>Remember why you took this on...</h4>
          <p>{personal_note}</p>
        </div>
        <AdviceColumn id={goal_id}/>
      </section>
    } else if (win) {
      const { goal_name, id } = win;
      content = <div className='view-goal error'>
        <h1>{goal_name}</h1>
				<p> You don't have this goal - yet! </p>
        <Link to={`/win-wall/${id}`}>View on the win wall</Link>
				<Link to='/'>Go Home</Link>
			  </div>
    }
    else {
      content = <div className='view-goal error'>
				<p> Sorry, this goal doesn't exist! </p>
				<Link to='/'>Go Home</Link>
			  </div>
    }
    return content;
  }

  render() {
    const goalContent = this.renderGoalContent();

    return (
        goalContent
    )
  }
}
