import React from 'react';
import NSpiredContext from '../../contexts/NSpiredContext';
import './Upvote.css';
import UpvotesService from '../../services/upvotes-api-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { withRouter } from 'react-router-dom';
import TokenService from '../../services/token-service';

class UpVote extends React.Component {
  static contextType = NSpiredContext;

  constructor(props) {
    super(props);
    this.state = {
      upVotes: { upvotes: [], userUpvoted: false}
    }
    this._isMounted = false;
  }

  componentDidMount() {
    this._isMounted = true;
    this._isMounted && this.getUpvotes();
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  getUpvotes = async () => {
    try { 
    const upVotes = await UpvotesService.getUpvotes(this.props.id);
    return await
      this.setState({ upVotes });
    } 
    catch(error) {
      this.context.setError(error)
    }
  }

  handleUpvote = async (ev, id) => {
    ev.preventDefault();

    if (!TokenService.hasAuthToken()) {
      this.props.history.push('/login')
      return;
    } else {
    const { upVotes } = await this.state;
    let submit;

    if (!upVotes.userUpvoted) {
    submit = await UpvotesService.postUpvote(id)
    .then(this.addUpvote)
    .catch(this.context.setError)
    }
    else {
    submit = await UpvotesService.deleteUpvote(id)
    .then(() => this.deleteUpvote(id))
    .then(() => UpvotesService.getUpvotes(id))
    .then(upVotes => this.setState({ upVotes }))
    .catch(this.context.setError);
    }

    return await submit;
    }
  }

  addUpvote = upVote => {
    this.setState({ 
      upVotes: {
        upvotes : [
          ...this.state.upVotes.upvotes,
          upVote
        ],
        userUpvoted: true
      } })
  }

  deleteUpvote = () => {
    this.setState({
      upVotes: {
        upvotes: this.state.upVotes.upvotes,
        userUpvoted: false
      }
    })
  }

  renderButton() {
    const { upVotes = [] } = this.state; 
    const { id = 0 } = this.props;
    const totalUpv = upVotes.upvotes.length;

    let icon = 'far'; 

    if (upVotes.userUpvoted || !TokenService.hasAuthToken()) {
      icon = 'fas';
    }

    return <>
           <span>{totalUpv}</span>
            <button onClick={(e) => this.handleUpvote(e, id)}>
              <FontAwesomeIcon icon={[icon, 'star']} />
            </button>
          </>
  }

  render() {

      return (
        this.renderButton()
      )
    }
}

export default withRouter(UpVote);