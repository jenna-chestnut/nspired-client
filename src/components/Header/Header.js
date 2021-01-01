import './Header.css';
import React from 'react';
import TokenService from '../../services/token-service';
import { Link } from 'react-router-dom';
import NSpiredContext from '../../contexts/NSpiredContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Header extends React.Component {
  static contextType = NSpiredContext;
  
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.setState({})
  }

  renderLogoutLink() {
    return (
      <>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </>
    )
  }

  renderLoginLink = () => {
    return (
      <>
        <Link
          to='/login'>
          Log in
        </Link>
        <Link
          to='/sign-up' onClick={() => this.context.clearGoal()}>
          Sign-Up
        </Link>
      </>
    )
  }

  render() {
    const links = TokenService.hasAuthToken()
      ? this.renderLogoutLink()
      : this.renderLoginLink();
      return (
        <header className="h-group">
        <h1 className="item">
          <Link to='/'>nSpired</Link>{' '}
        <FontAwesomeIcon icon={['far', 'lightbulb']} className='d-orange bulb'/></h1>
        <nav>
        <Link to="/win-wall">Win Wall</Link>
        { links }
        <Link to="/dashboard">
          <FontAwesomeIcon icon='home' className='d-green home'/>
        </Link>
        </nav>
        </header>
      );
    }
}

export default Header;