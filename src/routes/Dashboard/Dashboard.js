import React, { Component } from 'react';
import './Dashboard.css';
import WinList from '../../components/WinList/WinList';
import GoalListItem from '../../components/GoalListItem/GoalListItem';
import GoalPrivateToDo from '../../components/GoalListItem/GoalPrivateToDo';

export default class PublicWinWallPage extends Component {
	render() {
		let dashboardToDos = Array(12).fill('ok');
		dashboardToDos = dashboardToDos.map((item) => {
			return (
				<GoalPrivateToDo>
					<GoalListItem />
				</GoalPrivateToDo>
			);
		});

		let dashboardWins = Array(6).fill('ok');
		dashboardWins = dashboardWins.map((item) => {
			return (
				<div className="dash-win">
					<a>
						<h3>Move cross country</h3>
					</a>
				</div>
			);
		});

		return (
			<div className="dashboard">
				<div className="item-double">
					<h2>My Goals</h2>
					<WinList>{dashboardToDos}</WinList>
				</div>

				<div className="item">
					<h2>Wins</h2>
					<WinList>{dashboardWins}</WinList>
				</div>
			</div>
		);
	}
}
