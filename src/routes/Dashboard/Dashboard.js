import React, { Component } from 'react';
import './Dashboard.css';
import WinList from '../../components/WinList/WinList';
import GoalListItem from '../../components/GoalListItem/GoalListItem';
import GoalPrivateToDo from '../../components/GoalListItem/GoalPrivateToDo';
import GoalsService from '../../services/goals-api-service';
import NSpiredContext from '../../contexts/NSpiredContext';
import { Link } from 'react-router-dom';
import DeleteAccount from '../../components/DeleteAccountButton/DeleteUser';

export default class Dashboard extends Component {
	static contextType = NSpiredContext;

	componentDidMount() {
		this.context.clearError();

		GoalsService.getUserGoals()
			.then(this.context.setUserGoals)
			.catch(this.context.setError);
	}

	componentWillUnmount() {
		this.context.setUserGoals([]);
	}


	onDelete = () => {
		this.props.history.push('/');
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
					expiration={item.expiration}
					id={item.goal_id}
					/>
				</GoalPrivateToDo>
			);
		});

		if (userGoals.length === 0) {
			userGoals = <div className='no-g'><p>Uh oh! You don't have any goals in progress.</p>
			<Link to='/win-wall'>Need some inspiration?</Link>
			<Link to='/create-goal'>Create a goal from scratch!</Link></div>
		}

		return userGoals;
	}

	renderWins() {
		let { userGoals } = this.context;

		let dashboardWins = userGoals.filter(toDo => toDo.completed === true)
		.map((item, idx) => {
			return (
				<div className="dash-win" key={idx + 11}>
					<Link to={`/view-goal/${item.goal_id}`}>
						<h3>{item.goal_name}</h3>
					</Link>
				</div>
			);
		});

		dashboardWins = <div className='dash-win-container'>{dashboardWins}</div>

		if (dashboardWins.length === 0) {
			dashboardWins = <div className='no-g'><p>No goals completed... yet!</p>
			<Link to='/win-wall'>Need some inspiration?</Link></div>
		}

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

				<div className='da-button-div'><button className='new-goal' onClick={() => this.props.history.push('/create-goal')}>
				New Goal </button></div>

				<div className='da-button-div'>
					<DeleteAccount onDelete={this.onDelete}/>
				</div>

				<h2>Wins</h2>
					<WinList>{this.renderWins()}</WinList>
				</div>

			</div>
		);
	}
}
