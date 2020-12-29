import './RegistrationForm.css';
import React from 'react';
import AuthService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';

class RegistrationForm extends React.Component {

	static defaultProps = {
		onRegistrationSuccess: () => {}
	  }
	
	  state = { error: null }
	
	handleSubmit = ev => {
		ev.preventDefault()
		const { full_name, user_name, password, confirm_password } = ev.target;
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
			confirm_password.value = '';
			TokenService.saveAuthToken(res.authToken);
			this.props.onRegistrationSuccess();
		})
	  }

	render() {
		const { error } = this.state;

		return (
			<>
				<form className="sign-up" onSubmit={this.handleSubmit}>
					<fieldset>

					<div role='alert' className='form-error'>
          				{error && <p>{error}</p>}
        			</div>

						<legend>Ready for some wins of your own?</legend>

						<div className="form-group">
							<label htmlFor="full_name">Name</label>
							<input type="text" name="full_name" />
						</div>

						<div className="form-group">
							<label htmlFor="user_name">Username</label>
							<input type="text" name="user_name" />
						</div>

						<div className="form-group">
							<label htmlFor="password">Password </label>
							<input type="password" name="password" />
						</div>

						<div className="form-group">
							<label htmlFor="confirm_password">Confirm Password</label>
							<input type="password" name="confirm_password" />
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

export default RegistrationForm;