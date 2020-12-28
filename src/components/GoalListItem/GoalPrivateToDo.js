import './GoalListItems.css';
import React from 'react';
import WinWin from '../../components/WinandDeleteButtons/WinWin';
import DeleteWin from '../../components/WinandDeleteButtons/DeleteWin';
import { withRouter } from 'react-router-dom';

class GoalPrivateToDo extends React.Component {
  static defaultProps = {
    history: {
      push: () => {},
    },
  }

  handleGoalCompletedSuccess = (id) => {
    this.props.history.push(`/share-win/${id}`)
  }

  render() {
      return (
        <div className="item-and-options">
        <DeleteWin id={this.props.id}/>
        {this.props.children}
        <WinWin id={this.props.id} 
        onGoalCompleted={this.handleGoalCompletedSuccess}
        history={this.props.history}/>
        </div>
      );
    }
}

export default withRouter(GoalPrivateToDo);