import './GoalListItems.css';
import './GoalListItems.css';
import React from 'react';
import GoalListItem from './GoalListItem';
import UpVote from '../UpvoteButton/Upvote';
import NSpiredContext from '../../contexts/NSpiredContext';

class GoalPublicWin extends React.Component {
  static contextType = NSpiredContext;

  static defaultProps = {
    win: {
    id: null,
    upvote_count : 7, 
    goal_name: 'Rule the world', 
    creator: 'DrHorrible'
    }
  }

  componentDidMount() {
  }

  render() {
    const { goal_name, creator, id } = this.props.win;

      return (
        <div className="item-and-options">

        <div className='upvotes'>
          <UpVote id={id} 
          winWall={true}/>
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