import './GoalListItems.css';
import React from 'react';
import GoalListItem from './GoalListItem';

class GoalPrivateWin extends React.Component {
  render() {
      return (
        <div className="item-and-options">
        <GoalListItem />
        </div>
      );
    }
}

export default GoalPrivateWin;