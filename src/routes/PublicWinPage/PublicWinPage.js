import React, { Component } from 'react';
import NSpiredContext from '../../contexts/NSpiredContext';
import AdviceService from '../../services/advice-api-service';
import GoalsService from '../../services/goals-api-service';
import './PublicWinPage.css';

export default class PublicWinPage extends Component {
	static contextType = NSpiredContext;

	static defaultProps = {
		win: {}
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
		})

		return advice;
	}

	render() {
		const { winId } = this.props.match.params;

		const { winWall = [] } = this.context;
		
		const win = winWall.find(win => win.id === parseInt(winId)) 
			|| this.props.win;

		return (
			<section className="view-pub-win">
				<h2 className="goal-title">{win.goal_name}</h2>
				<h3>This goal has nSpired 10 people!</h3>
				<div className="win-item-pubwin">
					<button id="clone-goal">Clone</button>
					<span>Total complete: 8</span>
					<div className="upvotes">
						<span>{win.upvote_count} &#10506;</span>
					</div>
				</div>

				<div className="advice-column">
					<h3>
						<i>Advice Column</i>
					</h3>
					{this.renderAdvice()}
				</div>
			</section>
		);
	}
}
