import React, { Component } from 'react';
import './Dashboard.css';
import WinList from '../../components/WinList/WinList';
import GoalListItem from '../../components/GoalListItem/GoalListItem';
import GoalPrivateToDo from '../../components/GoalListItem/GoalPrivateToDo';
import GoalsService from '../../services/goals-api-service';
import GoalContext from '../../contexts/GoalContext';
import { Link } from 'react-router-dom';

export default class Dashboard extends Component {
	static contextType = GoalContext;

	componentDidMount() {
		this.context.clearError();

		GoalsService.getUserGoals()
			.then(this.context.setUserGoals)
			.catch(this.context.setError);
	}

	renderToDos() {
		let { userGoals } = this.context;

		userGoals = userGoals.filter(toDo => toDo.completed === false)
		.map((item, idx) => {
			return (
				<GoalPrivateToDo key={idx} id={item.goal_id}>
					<GoalListItem 
					toDo={true}
					name={item.goal_name} 
					expires={item.expiration}
					/>
				</GoalPrivateToDo>
			);
		});

		return userGoals;
	}

	renderWins() {
		let { userGoals } = this.context;

		const dashboardWins = userGoals.filter(toDo => toDo.completed === true)
		.map((item, idx) => {
			return (
				<div className="dash-win" key={idx + 11}>
					<Link to={`/view-goal/${item.goal_id}`}>
						<h3>{item.goal_name}</h3>
					</Link>
				</div>
			);
		}); 

		return dashboardWins;
	}

	render() {


		// would love to say name here, like 'Hello, {name}'
		
		return (
			<div className="dashboard">
				<div className="item-double">
					<h2>My Goals</h2>
					<WinList>{this.renderToDos()}</WinList>
				</div>
				<div className="item">
					<h2>Wins</h2>
					<WinList>{this.renderWins()}</WinList>
				</div>
			</div>
		);
	}
}
