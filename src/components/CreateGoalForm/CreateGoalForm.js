import React from 'react';
import NSpiredContext from '../../contexts/NSpiredContext';
import { getFutureExpire } from '../../services/goal-expiration-service';
import GoalsService from '../../services/goals-api-service';
import './CreateGoalForm.css';

class CreateGoalForm extends React.Component {
	static contextType = NSpiredContext;

	constructor(props) {
		super(props);
			this.state = {
			goal_name: '',
			expiration: null,
			personal_note: null
		}
	}

	handleGoalSubmit = ev => {
		ev.preventDefault();
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

	handleStateChange(e, key) {
		if (key === 'expiration') {
			e.value = getFutureExpire(e.value);
		}
		
		this.setState({
			[key] : e.value
		})
	}

	renderTitle() {
		const { clone = false } = this.props;
		const title = clone 
		? <>
		<legend>Clone A Goal</legend>
		<h2 className='clone-goal-title'>{clone.goal_name}</h2> </>
		: 
		<>
		<legend>Create A Goal</legend>
		<label htmlFor="goal_name">What would you like to achieve?</label>
		<input type="text" id="goal_name" 
		onChange={e => this.handleStateChange(e.target, 'goal_name')}/>
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
			return <div key={idx}><input type="radio" name="expiration" value={time.val} id={idx} onChange={e => this.handleStateChange(e.target, 'expiration')}/>
			<label htmlFor={idx}>{time.time}</label></div>
		})

		return radioButtons
	}
  

	render() {

		return (
			<form className="create-goal" onSubmit={this.handleGoalSubmit}>
				<fieldset>
					{this.renderTitle()}
					<label htmlFor="expiration">
						When would you like to achieve this goal?
					</label>
					<div className="timeframe-buttons">
						{this.renderRadioButtons()}
					</div>
					<label htmlFor="personal_note">Why would you like to {this.renderGoalName()}?</label>
					<textarea id="personal_note" name="personal_note"
					onChange={e => this.handleStateChange(e.target, 'personal_note')}></textarea>
					<button type="submit">Create Goal</button>
				</fieldset>
			</form>
		);
	}
}

export default CreateGoalForm;
