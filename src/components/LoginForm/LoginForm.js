import './LoginForm.css';
import React from 'react';

class LoginForm extends React.Component {
	render() {
		return (
			<form className="log-in">
				<fieldset>
					<legend>Log In</legend>

					<div className="form-group">
						<label htmlFor="username">Username</label>
						<input type="text" name="username" />
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
