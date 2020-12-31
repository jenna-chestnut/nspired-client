import './AdviceColumn.css';
import React from 'react';
import NSpiredContext from '../../contexts/NSpiredContext';
import AdviceService from '../../services/advice-api-service';

class AdviceColumn extends React.Component {
  static contextType = NSpiredContext;

  onAdviceDelete = (aId) => {
    if (window
      .confirm('Are you sure you want to delete? This cannot be undone.')) {
    const { id } = this.props;
    AdviceService.deleteUserAdvice(id)
    .then(this.context.deleteAdvice(aId))
    .catch(this.context.setError)
    }
  }

  componentWillUnmount() {
    this.context.clearAdvice();
  }
  
  render() {
      let { advice = [] } = this.context;
  
      if (advice.length !== 0) {
      advice = advice.map(item => {
        return (
          <div key={item.id}>
            <p>
              {item.advice_text}
            </p>
            {item.user_advice ? <button className='delete-advice' 
            onClick={() => this.onAdviceDelete(item.id)}>Delete</button> : ''}
            <p className="signature">- {item.user_name}</p>
          </div>
        )
      })
    }
  
      return (
              <div className="advice-column">
                <h3>
                  <i>Advice Column</i>
                </h3>
                {advice}
              </div>
        )
    }
}

export default AdviceColumn;