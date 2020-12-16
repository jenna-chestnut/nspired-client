import './WinList.css';
import React from 'react';

class WinList extends React.Component {
  render() {
      return (
        <ul className="win-list">
            {this.props.children}
        </ul>
      );
    }
}

export default WinList;