import React, { Component } from 'react';
import NSpiredContext from '../../contexts/NSpiredContext';
import AdviceService from '../../services/advice-api-service';
import GoalsService from '../../services/goals-api-service';
import TokenService from '../../services/token-service';
import { Link } from 'react-router-dom';
import './PublicWinPage.css';
import UpVote from '../../components/UpvoteButton/Upvote';
import UpvotesService from '../../services/upvotes-api-service';
import AdviceColumn from '../../components/AdviceColumn/AdviceColumn';

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

		UpvotesService.getUpvotes(id)
    		.then(this.context.setUpvotes)
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
			button = (<div><h4><i>Goal completed.</i></h4>
				<Link to={`/view-goal/${winId}`}>Click here to view.</Link></div>)
			:
			button = (<div><h4><i>Goal in progress.</i></h4>
				<Link to={`/view-goal/${winId}`}>Click here to view.</Link></div>)
		}

		return button;
	}

	renderAdvice() {

		let { advice } = this.context;

		advice = advice.map(item => {
			return (
				<div key={item.id}>
					<p>
						{item.advice_text}
					</p>
					<p className="signature">- {item.user_name}</p>
				</div>
			)
		}) || []

		return advice;
	}

	renderWinContent() {
		const { winId } = this.props.match.params;
		const { winWall = [] } = this.context;
		const win = winWall.find(win => win.id === parseInt(winId))
		let content;

		if (win) {
			const { goal_name, clones, completed, upvote_count } = win;
			content = 
			<section className="view-pub-win">
			<h2 className="goal-title">{goal_name}</h2>
			<h3>This goal has nSpired {clones} people!</h3>
			<div className="win-item-pubwin">
				{this.renderButton()}
				<span>Total complete: {completed}</span>
				<UpVote upvote_count={upvote_count} upvotes={this.context.upVotes} id={winId} />
			</div>
				<AdviceColumn id={winId}/>
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
