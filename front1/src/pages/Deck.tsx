import React from 'react';

import styles from './Deck.less';
import { connect } from 'react-redux';

export interface IProps {

}

function Deck(props: IProps) {
  console.log('Deck props: ', props);
  return (
    <div className={styles.deck_con}>
      <div className={styles.hand}>上手牌</div>
      <div className={styles.card_holder}>卡牌放置区</div>
      <div className={styles.hand}>下手牌</div>
    </div>
  );
}

export default connect(store => store)(Deck);
