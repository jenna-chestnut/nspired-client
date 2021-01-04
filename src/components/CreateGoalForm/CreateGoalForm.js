import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import NSpiredContext from '../../contexts/NSpiredContext';
import { getFutureExpire } from '../../services/goal-expiration-service';
import GoalsService from '../../services/goals-api-service';
import TokenService from '../../services/token-service';
import './CreateGoalForm.css';

class CreateGoalForm extends React.Component {
	static contextType = NSpiredContext;

	constructor(props) {
		super(props);
			this.state = {
			goal_name: '',
			expiration: null,
			personal_note: '',
			touched: { goal_name: null, expiration: null }
		}
	}

	handleGoalSubmit = ev => {
		ev.preventDefault();

		if(!TokenService.hasAuthToken()) {
			this.context.setGoal(this.state);
			this.props.onDemoGoal();
		}

		else {
		const { clone = false } = this.props;
		const { goal_name, expiration, personal_note } = this.state;

		if (clone) {
		const cloneData = {
			expiration,
			personal_note
		}

		GoalsService.postUserGoal(clone.id, cloneData)
		.then(this.context.addUserGoal)
		.then(this.props.onCreateSuccess())
		.catch(this.context.setError)
		} 
		else {
		const newGoalData = {
			goal_name,
			expiration,
			personal_note
		}

		GoalsService.postNewGoal(newGoalData)
		.then(this.context.addUserGoal)
		.then(this.props.onCreateSuccess())
		.catch(this.context.setError)
			}
		}
	}

	handleStateChange(e, key) {
		if (key === 'expiration') {
			e.value = getFutureExpire(e.value);
		}

		this.setState({
			[key] : e.value,
			touched: {
				...this.state.touched,
				[key] : true
			}
		})
	}

	validate(key) {
		const {expiration, goal_name, touched} = this.state;
		const { clone = false } = this.props;
		let validation;

		if (!expiration) {
			if ( key === 'expiration' )
			validation = 'Expiration is required';
		}
		if (goal_name === '' && touched.goal_name) {
			if ( key === 'goalName' )
			validation = 'Goal name is required';
		}
		if (goal_name === '' || !expiration) {
			if ( key === 'toSubmit' && !clone)
			validation = true;
		}

		return validation;
	}

	renderTitle() {
		const { clone = false } = this.props;
		const title = clone 
		? <>
		<legend>Clone</legend>
		<h2 className='clone-goal-title'>{clone.goal_name}</h2> </>
		: 
		<>
		<legend>New Goal</legend>
		<label htmlFor="goal_name">What would you like to achieve?</label>
		<input type="text" id="goal_name" 
		onChange={e => this.handleStateChange(e.target, 'goal_name')}
		value={this.state.goal_name}/>
		<div className='helper-text'>{this.validate('goalName')}</div>
		</>
		return title;
	}

	renderGoalName() {
		const goal_name = this.props.clone 
		?
		this.props.clone.goal_name : this.state.goal_name
		return goal_name;
	}

	renderRadioButtons() {
		const times = [{time:'1 day', val: 1}, {time:'1 week', val: 7}, 
		{time:'1 month', val: 30}, {time:'3 months', val: 90}];

		let radioButtons = times.map((time, idx) => {
			return <div key={idx}><input type="radio" name="expiration" value={time.val} id={idx} onChange={e => this.handleStateChange(e.target, 'expiration')} required/>
			<label htmlFor={idx}>{time.time}</label></div>
		})

		return radioButtons
	}
  

	render() {
		
		return (
			<>
			<div className="tab-holder">
		<span className='form-tab'>&#9660;</span>
			<form className="create-goal" onSubmit={this.handleGoalSubmit}>
				<fieldset>
					{this.renderTitle()}

					<label>
						When would you like to achieve this goal?
					</label>

					<div className="timeframe-buttons">
						{this.renderRadioButtons()}
					</div>
					<div className='helper-text'>{this.validate('expiration')}</div>

					<label htmlFor="personal_note">Why would you like to {this.renderGoalName()}?</label>

					<textarea id="personal_note" name="personal_note"
					onChange={e => this.handleStateChange(e.target, 'personal_note')} 
					value={this.state.personal_note}></textarea>

					<button disabled={this.validate('toSubmit')} type="submit">Set Goal
					{' '}<FontAwesomeIcon icon='tasks'/></button>

				</fieldset>
			</form>
			</div>
			</>
		);
	}
}

export default CreateGoalForm;
