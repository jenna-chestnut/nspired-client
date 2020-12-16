import React, { Component } from 'react';
import WinWin from '../../components/WinandDeleteButtons/WinWin';
import DeleteWin from '../../components/WinandDeleteButtons/DeleteWin';
import './PersonalGoalPage.css';

export default class PersonalGoalPage extends Component {

  render() {

    return (
        <section className="view-goal">

            <h2 className='goal-title'>GOAL TITLE HERE</h2>

            <div className='group'>
            <WinWin />
            <DeleteWin />
            </div>

          <div className="win-item">
            <h3>5 days left</h3>
            <span>Date created: 11/20/2020</span>
          </div>

        <div className="reminder">
        <h4>Remember why you took this on...</h4>
        <p>So I can show off and be cooler at parties.</p>
      </div>
      </section>
    )
  }
}
