import './ErrorBanner.css';
import React from 'react';
import NSpiredContext from '../../contexts/NSpiredContext';

class ErrorBanner extends React.Component {
  static contextType = NSpiredContext;

  render() {
    const { error = null } = this.context;
    console.log(error);

    const errorBanner = error 
      ? <div className='error-banner'>
        <p className="error-banner-txt">{error}
        <button onClick={() => this.context.clearError()}>X</button>
        </p>
      </div> 
      :
        '';

      return errorBanner;
    }
}

export default ErrorBanner;