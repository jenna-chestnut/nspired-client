import React from 'react';
import GoalContext from '../../contexts/GoalContext';
import GoalsService from '../../services/goals-api-service';

class DeleteWin extends React.Component {
  static contextType = GoalContext;

  static defaultProps = {
    onDeleteSuccess: () => {}
  }

  handleDelete = (ev, id) => {
    ev.preventDefault();

    if (window.confirm('Are you sure you want to delete this goal? This action cannot be undone.')) {
    GoalsService.deleteUserGoal(id)
    .then(this.context.deleteGoal(id))
    .catch(this.context.setError);
    }
    
  }

  render() {
      return (
        <button onClick={(e) => this.handleDelete(e, this.props.id)} 
        id="delete-win">
          &#128711;
        </button>
      );
    }
}

export default DeleteWin;