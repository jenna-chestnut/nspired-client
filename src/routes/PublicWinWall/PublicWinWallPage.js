import React, { Component } from 'react';
import './PublicWinWallPage.css';
import WinList from '../../components/WinList/WinList';
import GoalPublicWin from '../../components/GoalListItem/GoalPublicWin';
import GoalsService from '../../services/goals-api-service';
import WinWallContext from '../../contexts/WinWallContext';

export default class PublicWinWallPage extends Component {
  static contextType = WinWallContext;

	componentDidMount() {
		this.context.clearError();

		GoalsService.getWinWall()
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

    return (
      <section className='win-wall'>
        <h2>Win Wall</h2>
        <WinList>
          {this.renderWinList()}
        </WinList>
      </section>
    )
  }
}
