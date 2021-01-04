import './Header.css';
import React from 'react';
import TokenService from '../../services/token-service';
import { Link } from 'react-router-dom';
import NSpiredContext from '../../contexts/NSpiredContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import InspoQuote from '../InspoQuote/InspoQuote';
import DemoUser from '../DemoUserButton/DemoUser';

class Header extends React.Component {
  static contextType = NSpiredContext;
  
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
  }

  renderLogoutLink() {
    return (
      <>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
        <Link to="/dashboard">
          <FontAwesomeIcon icon='tasks' className='d-green home'
          title='Dashboard'/>
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
        <DemoUser history={this.props.history}/>
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
          <Link to='/'>nSpired{' '}
        <FontAwesomeIcon icon={['far', 'lightbulb']} className='d-orange bulb'/></Link></h1>
        <nav>
        <Link to="/win-wall">Win Wall</Link>
        { links }
        </nav>
        <InspoQuote />
        </header>
      );
    }
}

export default Header;