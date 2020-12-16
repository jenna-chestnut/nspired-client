import React, { Component } from 'react';
import './NotFoundPage.css';

export default class NotFoundPage extends Component {

  render() {

    return (
        <section className='not-found'>
        <h2> Sorry, we can't find that page. </h2>
        <a href='/'>Click here to go to the homepage.</a>
        </section>
    )
  }
}
