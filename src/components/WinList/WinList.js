import './WinList.css';
import React from 'react';

class WinList extends React.Component {
  render() {
      return (
        <div className="win-list">
            {this.props.children}
        </div>
      );
    }
}

export default WinList;