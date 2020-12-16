import './GoalListItems.css';
import './GoalListItems.css';
import React from 'react';
import GoalListItem from './GoalListItem';

class GoalPublicWin extends React.Component {
  static defaultProps = {
    win: {
    id: null,
    upvote_count : 7, 
    goal_name: 'Rule the world', 
    creator: 'DrHorrible'
    }
  }
  render() {
    const { upvote_count, goal_name, creator, id } = this.props.win;
    console.log(this.props.win)

      return (
        <div className="item-and-options">

        <div className='upvotes'>
          <span>{upvote_count}</span>
          <span>⇧</span>
          </div>

        <GoalListItem 
        name={goal_name}
        creator={creator}
        id={id}
        />

        </div>
      );
    }
}

export default GoalPublicWin;