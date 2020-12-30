import './InspoQuote.css';
import React from 'react';
import NSpiredContext from '../../contexts/NSpiredContext';
import InspoService from '../../services/inspo-api-service';

class InspoQuote extends React.Component {
  static contextType = NSpiredContext;

  componentDidMount() {
    InspoService.getInspo()
    .then(this.context.setInspo)
    .catch(this.context.setError)
  }

  render() {
    const { inspo = [] } = this.context;
    const quote = inspo[Math.floor(Math.random() * inspo.length)] || '';

      return (
        <p className="inspiration">{quote.inspo_quote}</p>
      );
    }
}

export default InspoQuote;