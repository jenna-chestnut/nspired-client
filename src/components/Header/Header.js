import './Header.css';
import React from 'react';
import homeLogo from '../../images/home+house+icon.png';

class Header extends React.Component {
  render() {
      return (
        <header className="h-group">
        <h1 className="item">nSpired</h1>
        <nav>
          <a href="/log-in">Log In</a>
          <a href="/sign-up">Sign Up</a>
          <a href="/win-wall">Win Wall</a>
          <a href="/dashboard">Dashboard</a>
          <a href="/"><img src={homeLogo} alt='Home page'/></a>
        </nav>
      </header>
      );
    }
}

export default Header;