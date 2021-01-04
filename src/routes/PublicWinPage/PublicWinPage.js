import React, { Component } from 'react';
import NSpiredContext from '../../contexts/NSpiredContext';
import AdviceService from '../../services/advice-api-service';
import GoalsService from '../../services/goals-api-service';
import TokenService from '../../services/token-service';
import { Link } from 'react-router-dom';
import './PublicWinPage.css';
import UpVote from '../../components/UpvoteButton/Upvote';
import AdviceColumn from '../../components/AdviceColumn/AdviceColumn';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class PublicWinPage extends Component {
	static contextType = NSpiredContext;

	static defaultProps = {
		win: {},
		match: { params: { goalId: 0 } }
	}

	componentDidMount() {
		this.context.clearError();
		const id = this.props.match.params.winId;

		GoalsService.getWinWall()
			.then(this.context.setWinWall)
			.catch(this.context.setError);

		AdviceService.getGoalAdvice(id)
			.then(this.context.setAdvice)
			.catch(this.context.setError)

		if (TokenService.hasAuthToken()) {
		GoalsService.getUserGoals()
			.then(this.context.setUserGoals)
			.catch(this.context.setError)
		}
	}

	renderButton() {
		const { winId } = this.props.match.params;
		const { userGoals } = this.context;

		let button = <button id="clone-goal" 
		onClick={() => this.props.history.push(`/clone-goal/${winId}`)}>Clone</button>;
		
		const goal = userGoals.find(goal => goal.goal_id === parseInt(winId));
		
		if (goal) {
			goal.completed
			?
			button = (<div><h4>
				<i>Goal completed.</i>{' '}
			<FontAwesomeIcon className='v-green' icon={['far','check-circle']}/>
			</h4>
				<Link to={`/view-goal/${winId}`}>Click here to view.</Link>
				</div>)
			:
			button = (<div><h4><i>Goal in progress.</i>{' '}
			<FontAwesomeIcon className='d-orange' icon='hourglass-half'/>
			</h4>
				<Link to={`/view-goal/${winId}`}>Click here to view.</Link></div>)
		}

		return button;
	}

	renderWinContent() {
		const { winId } = this.props.match.params;
		const { winWall, userGoals = [] } = this.context;
		const win = winWall.find(win => win.id === parseInt(winId))
		let content;

		if (win) {
			const { goal_name, clones, completed } = win;
			const goal = userGoals.find(goal => goal.goal_id === parseInt(winId));
			let userCompleted = false;
			if (goal && goal.completed) userCompleted = true;

			content = 
			<section className="view-pub-win">
			<h2 className="goal-title">{goal_name}</h2>
			<h3>This goal has nSpired {clones === '1' ? '1 person!' : `${clones} people!`}</h3>
			<span>Total completed goals: {completed}</span>
			<div className="win-item-pubwin">
				<div className="item-double pwc-status">
				{this.renderButton()}
				</div>
				<div className="item group pwc-grey">
				<div className='upvotes'>
				<UpVote id={winId} />
				</div>
				</div></div>
				<AdviceColumn id={winId} completed={userCompleted}/>
		</section>		
		} else {
			content = <div className='view-pub-win error'>
				<p> Sorry, this goal doesn't exist! </p>
				<Link to='/'>Go Home</Link>
			</div>
		}
		return content;
	}

	render() {
		const winContent = this.renderWinContent();

		return (
			winContent
		);
	}
}
