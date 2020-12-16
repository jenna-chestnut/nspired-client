import './GoalListItems.css';
import React from 'react';
import WinWin from '../../components/WinandDeleteButtons/WinWin';
import DeleteWin from '../../components/WinandDeleteButtons/DeleteWin';
import GoalListItem from './GoalListItem';

class GoalPrivateToDo extends React.Component {
  render() {
      return (
        <div className="item-and-options">
        <DeleteWin />
        <GoalListItem toDo={true}/>
        <WinWin />
        </div>
      );
    }
}

export default GoalPrivateToDo;