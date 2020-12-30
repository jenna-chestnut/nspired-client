import React from 'react';
import NSpiredContext from '../../contexts/NSpiredContext';
import AuthService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';

class DeleteAccount extends React.Component {
  static contextType = NSpiredContext;

  static defaultProps = {
    onAccountDeleted: () => {}
  }

  handleDelete = (ev) => {
    ev.preventDefault();

    if (window.confirm('Are you sure you want to delete your account? This action cannot be undone and will delete ALL of your goals, notes, advice and progress..')) {
    AuthService.deleteAccount()
    .then(TokenService.clearAuthToken)
    .then(this.props.onDelete)
    .catch(this.context.setError);
    }
  }

  render() {
      return (
        <button onClick={(e) => this.handleDelete(e)} 
        id="delete-account">
          Delete Account
        </button>
      );
    }
}

export default DeleteAccount;