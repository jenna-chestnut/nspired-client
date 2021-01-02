import './AdviceColumn.css';
import React from 'react';
import NSpiredContext from '../../contexts/NSpiredContext';
import AdviceService from '../../services/advice-api-service';
import ShareGoalForm from '../ShareGoalForm/ShareGoalForm';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class AdviceColumn extends React.Component {
  static contextType = NSpiredContext;

  state = { postAdvice : false }

  onAdviceDelete = (aId) => {
    if (window
      .confirm('Are you sure you want to delete? This cannot be undone.')) {
    const { id } = this.props;
    AdviceService.deleteUserAdvice(id)
    .then(this.context.deleteAdvice(aId))
    .catch(this.context.setError)
    }
  }

  renderPostAdvice() {
    if(this.state.postAdvice && this.props.completed)
    return <ShareGoalForm id={this.props.id}/>
  }

  componentWillUnmount() {
    this.context.clearAdvice();
  }
  
  render() {
      let { advice = [] } = this.context;
      let { postAdvice } = this.state;
  
      if (advice.length !== 0) {
      const adviceList = advice.map(item => {
        let extraClass = 'to-delete';
        return (
          <div className={`advice-item ${item.user_advice ? extraClass : ''}`} key={item.id}>
            <p>
              {item.advice_text}
            </p>
            {item.user_advice ? <button className='delete-advice' 
            onClick={() => this.onAdviceDelete(item.id)}>
              <FontAwesomeIcon icon='comment-slash'/></button> : ''}
            <p className="signature">- {item.user_name}</p>
          </div>
        )
      })
      advice = <div className="advice-column">
      <h3><i>Advice Column</i></h3>
            {this.props.completed ? <button className='add-advice' onClick={() => this.setState({ postAdvice : !postAdvice })}> 
            <FontAwesomeIcon icon='edit'/>
            </button> 
            : ''}
            {adviceList}
            {this.renderPostAdvice()}
              </div>
    }
  
      return advice
    }
}

export default AdviceColumn;