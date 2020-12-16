import './GoalListItems.css';
import React from 'react';

class GoalListItem extends React.Component {
  static defaultProps = {
    name: 'Develop an App',
    creator: 'Jennabot',
    id: ''
  }
  render() {
    const { id, name, creator } = this.props;
    const link = `/view-goal/${id}`
      return (
        <li className="win-item">
            <h3><a href={link}>{name}</a></h3>
            <span>{creator}</span>
        </li>
      );
    }
}

export default GoalListItem;