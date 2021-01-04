import './GoalListItems.css';
import React from 'react';
import { Link } from 'react-router-dom';
import getTimeLeft from '../../services/goal-expiration-service';

class GoalListItem extends React.Component {
  static defaultProps = {
    name: 'Develop an App',
    creator: 'Jennabot',
    id: ''
  }

  renderTimeLeft() {
    const { expiration } = this.props;
    const timeLeft = getTimeLeft(expiration);
    return timeLeft;
  }

  renderGoalTitle(link) {
    const { name, toShare = false } = this.props;
    let title = <Link to={link}>{name}</Link>

    if(toShare) {
      title = <div className="share-title">{name}</div>;
    }
    return title;
  }

  render() {
    const { id, creator, 
      toDo = false, winWall = false, toShare = false, is_creator = false 
    } = this.props;
    
    const link = winWall 
    ?
    `/win-wall/${id}`
    :
    `/view-goal/${id}`

      return (
        <div className="win-item">
        <h3>{this.renderGoalTitle(link)}</h3>
        <span>{
        toDo ? this.renderTimeLeft()
        :
        !toShare ? creator || <i>User deleted</i>
        :
        is_creator ? <i>If you want to go quickly go alone. If you want to go far go together.</i>
        :
        <>Created by: {creator || <i>User deleted</i>}</>
        }</span>
        </div>
      )
    }
}

export default GoalListItem;