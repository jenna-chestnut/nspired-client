import React from 'react';
import './DemoUser.css';
import NSpiredContext from '../../contexts/NSpiredContext';
import AuthService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';

class DemoUser extends React.Component {
  static contextType = NSpiredContext;

  handleDemoUser = (ev) => {
    ev.preventDefault();

    AuthService.postLogin({
		  user_name: 'SalemtheDog', 
		  password: 'illcatchthattail'
		})
		.then((res) => {
      TokenService.saveAuthToken(res.authToken);
    })
    .then(() => {
      this.props.history.push('/dashboard')
    })
		.catch(err => {
      console.log(err)
		  this.setState({
			error: err.error
		  })
    })
  }

  render() {
      return (
        <button onClick={(e) => this.handleDemoUser(e)} 
        className="demo-user">
          Demo
        </button>
      );
    }
}

export default DemoUser;