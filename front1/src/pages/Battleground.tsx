import React, { Component } from 'react';

import styles from './Battleground.less';
import Title from './Title';
import Content from './Content';

class Battleground extends Component {
  render() {
    return (
      <div className={styles.battle_ground}>
        <Title />
        <Content />
      </div>
    );
  }
}

export default Battleground;
