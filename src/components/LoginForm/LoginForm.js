import './LoginForm.css';
import React from 'react';
import AuthService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {
	static defaultProps = {
		onLoginSuccess: () => {}
	  }
	
	  state = { error: null }

	handleSubmit = ev => {
		ev.preventDefault()
		const { user_name, password } = ev.target;
	
		AuthService.postLogin({
		  user_name: user_name.value, 
		  password: password.value
		})
		.then((res) => {
			user_name.value = '';
			password.value = '';
			TokenService.saveAuthToken(res.authToken);
			this.props.onLoginSuccess();
		})
		.catch(err => {
		  this.setState({
			error: err.error
		  })
		})
	  }

	render() {
		const { error } = this.state;

		return (
			<form className="log-in" onSubmit={this.handleSubmit}>
				<fieldset>
				<div role='alert' className='form-error'>
          			{error && <p>{error}</p>}
        		</div>

					<legend>Log In</legend>

					<div className="form-group">
						<label htmlFor="user_name">Username</label>
						<input type="text" name="user_name" placeholder='GoGetter498' required/>
					</div>

					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input type="password" name="password" required/>
					</div>

					<button type="submit">Submit</button>
				</fieldset>
				<p>
					Don't have an account yet?
					<Link to="/sign-up">Click here to sign up.</Link>
				</p>
			</form>
		);
	}
}

export default LoginForm;
