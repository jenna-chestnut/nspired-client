import './GoalListItems.css';
import React from 'react';
import WinWin from '../../components/WinandDeleteButtons/WinWin';
import DeleteWin from '../../components/WinandDeleteButtons/DeleteWin';

class GoalPrivateToDo extends React.Component {
  render() {
      return (
        <div className="item-and-options">
        <DeleteWin />
        {this.props.children}
        <WinWin />
        </div>
      );
    }
}

export default GoalPrivateToDo;