import './GoalListItems.css';
import './GoalListItems.css';
import React from 'react';
import GoalListItem from './GoalListItem';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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

      return (
        <div className="item-and-options">

        <div className='upvotes'>
          <span>{upvote_count}</span>
          <span><FontAwesomeIcon className='lp-star d-grey' icon={['far', 'star']}/></span>
          </div>

        <GoalListItem 
        name={goal_name}
        creator={creator}
        id={id}
        winWall={true}
        />

        </div>
      );
    }
}

export default GoalPublicWin;