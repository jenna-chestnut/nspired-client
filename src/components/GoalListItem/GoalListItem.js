import './GoalListItems.css';
import React from 'react';
import { Link } from 'react-router-dom';

class GoalListItem extends React.Component {
  static defaultProps = {
    name: 'Develop an App',
    creator: 'Jennabot',
    id: ''
  }

  getTimeLeft(expiration) {
    let now = new Date();
    let due = new Date(expiration);
    let timeDifference = due.getTime() - now.getTime();
    let daysDiff = Math.floor(timeDifference / (1000 * 3600 * 24 ));

    let dateColor;
    let timeLeft = `${daysDiff} days left` ;
    switch(true) {
      case (daysDiff >= 5) :
        dateColor = 'green';
        break;
      case (daysDiff >= 2) :
        dateColor = 'gold';
        break;
      case (daysDiff = 1) :
        dateColor = 'red';
        break;
      case (daysDiff <= 0) :
        dateColor = 'grey';
        timeLeft = `Goal expired`;
        break;
      default:
        dateColor = 'black';
        break;
    }

    return <span style={{color: dateColor}}>
              {timeLeft}
           </span>
  }

  renderTimeLeft() {
    const { expires } = this.props;
    const timeLeft = this.getTimeLeft(expires);
    return timeLeft;
  }

  render() {
    const { id, name, creator, toDo = false } = this.props;
    const link = `/view-goal/${id}`

      return (
        <li className="win-item">
        <h3><Link to={link}>{name}</Link></h3>
        <span>{toDo
        ?
        this.renderTimeLeft()
        :
        creator
        }</span>
        </li>
      )
    }
}

export default GoalListItem;