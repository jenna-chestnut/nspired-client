import React from 'react';
import './ShareGoalForm.css';
import NSpiredContext from '../../contexts/NSpiredContext';
import AdviceService from '../../services/advice-api-service';

class ShareGoalForm extends React.Component {
	static contextType = NSpiredContext;

	handleAdviceSubmit = ev => {
		ev.preventDefault();
		const { advice_text = null } = ev.target;
		const { id } = this.props;
		const advice = { advice_text: advice_text.value };

		AdviceService.postAdvice(id, advice)
		.then(() => AdviceService.getGoalAdvice(id))
		.then(this.context.setAdvice)
		.then(() => {
			if (this.props.completed) {
				this.props.onShareSuccess(parseInt(id))
			}
		})
		.then(() => advice_text.value = '')
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
					<button type="submit">{
						this.props.completed
						?
						'Post to public wall'
						: 'Add Advice'}
					</button>
				</fieldset>
			</form>
		);
	}
}

export default ShareGoalForm;
