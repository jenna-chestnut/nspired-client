import React from 'react';
import NSpiredContext from '../../contexts/NSpiredContext';
import './Upvote.css';
import UpvotesService from '../../services/upvotes-api-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class UpVote extends React.Component {
  static contextType = NSpiredContext;

  componentDidMount() {
    UpvotesService.getUpvotes(this.props.id)
    .then(this.context.setUpvotes)
    .catch(this.context.setError)
  }

  handleUpvote = (ev, id) => {
    ev.preventDefault();

    const { upVotes } = this.context;
    
    if (!upVotes.userUpvoted) {
    UpvotesService.postUpvote(id)
    .then(this.context.addUpvote(id))
    .catch(this.context.setError)
    }
    else {
    UpvotesService.deleteUpvote(id)
    .then(() => this.context.deleteUpvote(id))
    .then(() => UpvotesService.getUpvotes(id))
    .then(this.context.setUpvotes)
    .catch(this.context.setError);
    }
  }

  renderButton() {
    const { upVotes = [] } = this.context; 
    const { id } = this.props;

    let icon = 'far'; 

    if (upVotes.userUpvoted) {
      icon = 'fas';
    }

    return <button onClick={(e) => this.handleUpvote(e, id)}>
            <FontAwesomeIcon icon={[icon, 'star']} />
          </button>;
  }

  render() {
    const { upVotes = [] } = this.context;

      return (
        <div className="upvotes">
        <span>{upVotes.upvotes ? upVotes.upvotes.length : 0}{' '}
        {this.renderButton()}
        </span>
        </div>
      );
    }
}

export default UpVote;