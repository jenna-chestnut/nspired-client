import React from 'react';
import NSpiredContext from '../../contexts/NSpiredContext';
import GoalsService from '../../services/goals-api-service';

class WinWin extends React.Component {
  static contextType = NSpiredContext;

  static defaultProps = {
    onGoalCompleted: () => {}
  }

  handleComplete = (ev, id) => {
    ev.preventDefault();

    if (window.confirm('Are you sure you want to complete this goal? This action cannot be undone!')) {
    GoalsService.patchUserGoal(id, { completed : true })
    .then(this.context.updateGoal(id, true, 'completed'))
    .then(this.props.onGoalCompleted(id))
    .catch(this.context.setError);
    }
  }

  render() {
      return (
        <button onClick={(e) => this.handleComplete(e, this.props.id)}
        id="win-win">&#128505;</button>
      );
    }
}

export default WinWin;