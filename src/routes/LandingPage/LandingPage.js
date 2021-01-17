import './LandingPage.css';
import React from 'react';
import GoalPublicWin from '../../components/GoalListItem/GoalPublicWin';
import WinList from '../../components/WinList/WinList';
import GoalsApiService from '../../services/goals-api-service';
import NSpiredContext from '../../contexts/NSpiredContext';
import TokenService from '../../services/token-service';
import loadingImg from '../../images/loading.gif';

class LandingPage extends React.Component {
	static contextType = NSpiredContext;

	state = { loading: true }

	componentDidMount() {
		this.context.clearError();

		GoalsApiService.getMiniWinWall()
			.then(this.context.setWinWall)
			.then(() => this.setState({ loading : false}))
			.catch(this.context.setError);
	}

	renderWinList = () => {
		const { winWall = [] } = this.context;

		return winWall.length
		? winWall.map(win =>
			<GoalPublicWin 
			key={win.id}
			win={win}
			/>
			)
		: <div className='loading'><h3>L o a d i n g . . .</h3>
		<img src={loadingImg} alt='loading' /></div>
	}

	renderButtonText = () => {
		return TokenService.hasAuthToken() 
		? 'Create a goal'
		: 'Try it out';
	}

	render() {
		const { history } = this.props;
		const winWall = this.state.loading 
		? <div className='loading'><h3>L o a d i n g . . .</h3>
		<img src={loadingImg} alt='loading' /></div>
		: this.renderWinList()
		
		return (
			<h3>
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
							{winWall}
						</WinList>
					</div>
				</div>
			</h3>
		);
	}
}

export default LandingPage;
