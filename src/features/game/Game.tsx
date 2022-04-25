import React from 'react';

import css from './Game.module.scss';


export const GamePage = () => (
	<div className={css.page}>
		<div className={css.board}>
			<div className={css.topRow}>
				<div className={css.deck}>Deck</div>
				<div className={css.discard}>Discard</div>
			</div>
			<div className={css.middleRow}>
				<ul className={css.playedCards}>
					<li className={css.card}>Played card</li>
					<li className={css.card}>Played card</li>
					<li className={css.card}>Played card</li>
				</ul>
			</div>
			<div className={css.bottomRow}>
				<ul className={css.playerStash}>
					<li>
						<ul className={css.stashStack}>
							<li className={css.card} style={{ transform: 'translateY(0px)' }}>Player card 1</li>
							<li className={css.card} style={{ transform: 'translateY(15px)' }}>Player card 2</li>
							<li className={css.card} style={{ transform: 'translateY(30px)' }}>Player card 3</li>
						</ul>
					</li>
				</ul>
			</div>
		</div>
		<div className={css.sidebar}>

		</div>
	</div>
);
