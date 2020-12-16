import React, { Component } from 'react';
import './PublicWinPage.css';

export default class PublicWinPage extends Component {
	render() {
		return (
			<section className="view-pub-win">
				<h2 className="goal-title">GOAL TITLE HERE</h2>
				<h3>This goal has nSpired 10 people!</h3>
				<div className="win-item-pubwin">
					<button id="clone-goal">Clone</button>
					<span>Total complete: 8</span>
					<div className="upvotes">
						<span>100 &#10506;</span>
					</div>
				</div>

				<div className="advice-column">
					<h3>
						<i>Advice Column</i>
					</h3>
					<p>
						Don't be scared to just jump in. Every mistake is an opportunity to
						learn, and you'll never know everything! You just need to know where
						to look for the answers. Feel free to add me on twitter and we can
						support each other. @Jennabot5000
					</p>
					<p className="signature">- Jenna</p>
					<p>
						It's not gonna be easy, but if you just keep at it and don't give up
						- it's really worth it in the end. AND TAKE BREAKS! Making sure that
						you rest is almost as important as the learning part.
					</p>
					<p className="signature">- Otis</p>
				</div>
			</section>
		);
	}
}
