import './ErrorBanner.css';
import React from 'react';
import NSpiredContext from '../../contexts/NSpiredContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ErrorBanner extends React.Component {
  static contextType = NSpiredContext;

  render() {
    const { error = null } = this.context;
    
    const errorBanner = error 
      ? <div className='error-banner'>
        <div className="error-banner-txt">
          <span>{error}</span>
        <button className='clear-error' onClick={() => this.context.clearError()}><FontAwesomeIcon icon={['far', 'times-circle']}/></button>
        </div>
      </div> 
      :
        '';

      return errorBanner;
    }
}

export default ErrorBanner;