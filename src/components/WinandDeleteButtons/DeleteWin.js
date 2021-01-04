import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import NSpiredContext from '../../contexts/NSpiredContext';
import GoalsService from '../../services/goals-api-service';

class DeleteWin extends React.Component {
  static contextType = NSpiredContext;

  static defaultProps = {
    onGoalDeleted: () => {}
  }

  handleDelete = (ev, id) => {
    ev.preventDefault();

    if (window.confirm('Are you sure you want to delete this goal? This action cannot be undone.')) {
    GoalsService.deleteUserGoal(id)
    .then(this.context.deleteGoal(id))
    .then(this.props.onGoalDeleted)
    .catch(this.context.setError);
    }
  }

  render() {
      return (
        <button onClick={(e) => this.handleDelete(e, this.props.id)} 
        className="delete-win">
          <FontAwesomeIcon className='d-red' icon='times'/>
        </button>
      );
    }
}

export default DeleteWin;