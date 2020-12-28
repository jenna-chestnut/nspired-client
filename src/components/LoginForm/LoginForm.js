import './LoginForm.css';
import React from 'react';
import AuthService from '../../services/auth-api-service';
import TokenService from ''

class LoginForm extends React.Component {
	static defaultProps = {
		onLoginSuccess: () => {}
	  }
	
	  state = { error: null }

	handleSubmitBasicAuth = ev => {
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
			error: err
		  })
		})
	  }

	render() {
		return (
			<form className="log-in">
				<fieldset>
					<legend>Log In</legend>

					<div className="form-group">
						<label htmlFor="user_name">Username</label>
						<input type="text" name="user_name" />
					</div>

					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input type="text" name="password" />
					</div>

					<button type="submit">Submit</button>
				</fieldset>
				<p>
					Don't have an account yet?
					<a href="/sign-up">Click here to sign up.</a>
				</p>
			</form>
		);
	}
}

export default LoginForm;
