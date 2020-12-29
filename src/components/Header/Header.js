import './Header.css';
import React from 'react';
import homeLogo from '../../images/home+house+icon.png';
import TokenService from '../../services/token-service';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken();
    this.setState({})
  }

  renderLogoutLink() {
    return (
      <>
        <Link 
        to="/dashboard">
          Dashboard
        </Link>
        <Link
          onClick={this.handleLogoutClick}
          to='/'>
          Logout
        </Link>
      </>
    )
  }

  renderLoginLink() {
    return (
      <>
        <Link
          to='/login'>
          Log in
        </Link>
        <Link
          to='/sign-up'>
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
        <h1 className="item">nSpired</h1>
        <nav>
        <Link to="/win-wall">Win Wall</Link>
        { links }
        <Link to="/"><img src={homeLogo} alt='Home page'/></Link>
        </nav>
        </header>
      );
    }
}

export default Header;