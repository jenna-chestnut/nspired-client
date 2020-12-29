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
    const { expires } = this.props;
    const timeLeft = getTimeLeft(expires);
    return timeLeft;
  }

  render() {
    const { id, name, creator, 
      toDo = false, winWall = false, toShare = false 
    } = this.props;
    
    const link = winWall 
    ?
    `/win-wall/${id}`
    :
    `/view-goal/${id}`

      return (
        <li className="win-item">
        <h3><Link to={link}>{name}</Link></h3>
        <span>{toDo
        ?
        this.renderTimeLeft()
        :
        toShare
        ?
        <i>If you want to go quickly go alone. If you want to go far go together.</i>
        :
        creator
        }</span>
        </li>
      )
    }
}

export default GoalListItem;