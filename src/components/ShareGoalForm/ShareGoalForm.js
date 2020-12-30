import React from 'react';
import './ShareGoalForm.css';
import NSpiredContext from '../../contexts/NSpiredContext';
import AdviceService from '../../services/advice-api-service';

class ShareGoalForm extends React.Component {
	static contextType = NSpiredContext;

	handleAdviceSubmit = ev => {
		ev.preventDefault();
		const { advice_text = null } = ev.target;
		const { goalId } = this.props.match.params;
		const advice = { advice_text: advice_text.value };

		AdviceService.postAdvice(goalId, advice)
		.then(this.context.addAdvice)
		.then(this.props.onShareSuccess(parseInt(goalId)))
		.catch(this.context.setError)
	}

	render() {
		return (
			<form onSubmit={this.handleAdviceSubmit}>
				<fieldset>
					<label htmlFor="advice_text">
						Give some advice for others who want to accomplish this goal:
					</label>
					<textarea id="advice_text" name="advice_text"></textarea>
					<button type="submit">Post to public wall</button>
				</fieldset>
			</form>
		);
	}
}

export default ShareGoalForm;
