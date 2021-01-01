import './LandingPage.css';
import React from 'react';
import GoalPublicWin from '../../components/GoalListItem/GoalPublicWin';
import WinList from '../../components/WinList/WinList';
import GoalsApiService from '../../services/goals-api-service';
import NSpiredContext from '../../contexts/NSpiredContext';
import TokenService from '../../services/token-service';

class LandingPage extends React.Component {
	static contextType = NSpiredContext;

	componentDidMount() {
		this.context.clearError();

		GoalsApiService.getMiniWinWall()
			.then(this.context.setWinWall)
			.catch(this.context.setError);
	}

	renderWinList = () => {
		const { winWall = [] } = this.context;

		return winWall.map(win =>
			<GoalPublicWin 
			key={win.id}
			win={win}
			/>
			);
	}

	renderButtonText = () => {
		return TokenService.hasAuthToken() 
		? 'Create a goal'
		: 'Try it out';
	}

	render() {
		const { history } = this.props;
		
		return (
			<>
				<div className="landing-page">
					<div className="nspired-intro">
						<p>&#128197; Create goals.</p>
						<p>Meet them. &#128221;</p>
						<p>&#127881; Share your wins.</p>
						<button onClick={() => history.push('/create-goal')}>
							{this.renderButtonText()}
							</button>
					</div>

					<div className="item winwall">
						<WinList>
							<p>Top Wins</p>
							{this.renderWinList()}
						</WinList>
					</div>
				</div>
			</>
		);
	}
}

export default LandingPage;
