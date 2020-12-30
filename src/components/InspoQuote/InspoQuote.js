import './InspoQuote.css';
import React from 'react';
import NSpiredContext from '../../contexts/NSpiredContext';

class InspoQuote extends React.Component {
  static contextType = NSpiredContext;

  componentDidMount() {
    
  }

  render() {
      return (
        <p className="inspiration">Make your life a masterpiece.</p>
      );
    }
}

export default InspoQuote;