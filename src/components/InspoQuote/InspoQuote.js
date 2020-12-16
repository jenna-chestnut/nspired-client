import './InspoQuote.css';
import React from 'react';

class InspoQuote extends React.Component {

    // call function to grab random quote on each render

  render() {
      return (
        <p className="inspiration">Make your life a masterpiece.</p>
      );
    }
}

export default InspoQuote;