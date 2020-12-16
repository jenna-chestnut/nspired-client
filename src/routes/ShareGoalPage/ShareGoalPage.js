import React, { Component } from 'react';
import GoalListItem from '../../components/GoalListItem/GoalListItem';
import ShareGoalForm from '../../components/ShareGoalForm/ShareGoalForm';
import './ShareGoalPage.css';

export default class ShareGoalPage extends Component {

  render() {

    return (
        <div className='share-win-background'>
            <h1 className='you-did-it'>YOU DID IT!</h1> 

        <section className="share-win">
        <h2>Wanna share your win?</h2>

          <GoalListItem />
          <ShareGoalForm />

        </section>
        </div>
    )
  }
}
