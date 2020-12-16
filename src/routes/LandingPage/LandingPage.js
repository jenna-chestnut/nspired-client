import './LandingPage.css';
import React from 'react';
import GoalPublicWin from '../../components/GoalListItem/GoalPublicWin';
import WinList from '../../components/WinList/WinList';
import GoalsApiService from '../../services/nspired-api-service';
import WinWallContext from '../../contexts/WinWallContext';

class LandingPage extends React.Component {
	static contextType = WinWallContext;

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

	render() {
		const { history } = this.props;
		
		return (
			<>
				<div className="landing-page">
					<div className="nspired-intro">
						<p>&#128197; Create goals.</p>
						<p>Meet them. &#128221;</p>
						<p>&#127881; Share your wins.</p>
						<button onClick={() => history.push('/create-goal')}>Try it out</button>
					</div>

					<div className="item">
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
