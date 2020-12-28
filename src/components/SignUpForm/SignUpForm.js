import './SignUpForm.css';
import React from 'react';
import AuthService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';

class SignUpForm extends React.Component {

	static defaultProps = {
		onRegistrationSuccess: () => {}
	  }
	
	  state = { error: null }
	
	handleSubmit = ev => {
		ev.preventDefault()
		const { full_name, user_name, password } = ev.target;
		const userData = { 
			full_name: full_name.value, 
			user_name: user_name.value, 
			password: password.value 
		};

		AuthService.postRegistration(userData)
		.then(res => {
			full_name.value = '';
			user_name.value = '';
			password.value = '';
			TokenService.saveAuthToken(res.authToken);
			this.props.onRegistrationSuccess();
		})
	  }

	render() {
		return (
			<>
				<form className="sign-up">
					<fieldset>
						<legend>Ready for some wins of your own?</legend>

						<div className="form-group">
							<label htmlFor="fullname">Name</label>
							<input type="text" name="full-name" />
						</div>

						<div className="form-group">
							<label htmlFor="username">Username</label>
							<input type="text" name="username" />
						</div>

						<div className="form-group">
							<label htmlFor="password">Password </label>
							<input type="text" name="password" />
						</div>

						<div className="form-group">
							<label htmlFor="confirm-password">Confirm Password</label>
							<input type="text" name="confirm-password" />
						</div>

						<button type="submit">Create Account</button>
					</fieldset>

					<p>
						Already have an account?
						<a href="/sign-up">Click here to log in.</a>
					</p>
				</form>
			</>
		);
	}
}

export default SignUpForm;
