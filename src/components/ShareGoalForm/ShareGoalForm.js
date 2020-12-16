import React from 'react';

class ShareGoalForm extends React.Component {
	// handle input here

	render() {
		return (
			<form>
				<fieldset>
					<label htmlhtmlFor="advice">
						Give some advice for others who want to accomplish this goal:
					</label>
					<textarea id="advice"></textarea>
					<button type="submit">Post to public wall</button>
				</fieldset>
			</form>
		);
	}
}

export default ShareGoalForm;
