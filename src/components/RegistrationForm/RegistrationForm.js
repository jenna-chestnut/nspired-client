import './RegistrationForm.css';
import React from 'react';
import AuthService from '../../services/auth-api-service';
import TokenService from '../../services/token-service';
import NSpiredContext from '../../contexts/NSpiredContext';
import { Link } from 'react-router-dom';

class RegistrationForm extends React.Component {
	static contextType = NSpiredContext;

	static defaultProps = {
		onRegistrationSuccess: () => {}
	  }
	
	  state = { error: null, pwTouched: false, pwValidated: null }
	
	handleSubmit = ev => {
		ev.preventDefault()
		const { full_name, user_name, password, confirm_password } = ev.target;

		if (password.value !== confirm_password.value) {
			this.setState({ error: 'Password fields must match'})
			return;
		}

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
		})
		.then(this.props.onRegistrationSuccess)
		.catch(e => { 
			this.setState({ error : e.error })
		})
	  }

	  validatePw(val) {
		const REGEX_UPPER_LOWER_NUMBER_SPECIAL = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&])[\S]+/;
			if (val.length < 8) {
			  return 'Password must be longer than 8 characters';
			}
			if (val.length > 72) {
			  return 'Password must be less than 72 characters';
			}
			if (val.startsWith(' ') || val.endsWith(' ')) {
			  return 'Password must not start or end with empty spaces';
			}
			if (!REGEX_UPPER_LOWER_NUMBER_SPECIAL.test(val)) {
			  return 'Password must contain 1 upper case, lower case, number and special character';
			}
			return null;
	  }

	render() {
		const { error } = this.state;
		const { goal } = this.context;

		return (
			<>
				<form className="sign-up" onSubmit={this.handleSubmit}>
					<fieldset>

					<legend> 
							{ goal 
							? 	'Ready to make this win yours?'
							: 'Ready for some wins of your own?' }
					</legend>

					<div role='alert' className='form-error'>
          				{error && <p>{error}</p>}
        			</div>

						<div className="form-group">
							<label htmlFor="full_name">Name</label>
							<input type="text" name="full_name"
							id="full_name"
							 placeholder='Salem Chestnut' required/>
						</div>

						<div className="form-group">
							<label htmlFor="user_name">Username</label>
							<input type="text" name="user_name"
							id="user_name" placeholder='Saybae0913' required/>
						</div>

						<div className="form-group">
							<label htmlFor="password">Password </label>
							<input type="password" name="password"
							id="password" 
							onChange={(e) => {
								this.setState({pwTouched: true,
								pwValidated: this.validatePw(e.target.value)});
								}} required/>
						</div>

						<div className="form-group">
							<label htmlFor="confirm_password">Confirm Password</label>
							<input type="password" name="confirm_password"
							id="confirm_password" required/>
						</div>
						<div className='helper-text'>{this.state.pwTouched && this.state.pwValidated && 'Password must contain 1 upper case, lower case, number and special character'}</div>

						<button type="submit">Create Account</button>
					</fieldset>

					<p>
						Already have an account?
						<Link to="/login">Click here to log in.</Link>
					</p>
				</form>
			</>
		);
	}
}

export default RegistrationForm;
