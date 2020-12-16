import React from 'react';
import './CreateGoalForm.css';

class CreateGoalForm extends React.Component {

  

	render() {
    // if cloning : true then render title instead of input using parameter
		return (
			<form className="create-goal">
				<fieldset>
					<legend>Create A Goal</legend>
					<label htmlFor="goal-name">What would you like to achieve?</label>
					<input type="text" id="goal-name" />
					<label htmlFor="time-frame">
						When would you like to achieve this goal?
					</label>
					<div className="timeframe-buttons">
						<input type="radio" name="time-frame" value="1 day" id="1day" />
						<label htmlFor="1day">1 day</label>
						<input type="radio" name="time-frame" value="1 week" id="1wk" />
						<label htmlFor="1wk">1 week</label>
						<input type="radio" name="time-frame" value="1 month" id="1mo" />
						<label htmlFor="1mo">1 month</label>
						<input type="radio" name="time-frame" value="3 months" id="3mo" />
						<label htmlFor="3mo">3 months</label>
					</div>
					<label htmlFor="goal-why">Why would you like to (goal)?</label>
					<textarea id="goal-why"></textarea>
					<button type="submit">Create Goal</button>
				</fieldset>
			</form>
		);
	}
}

export default CreateGoalForm;
