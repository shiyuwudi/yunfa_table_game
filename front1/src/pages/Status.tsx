import React, {Component} from 'react';

import styles from './Status.less';
import LP from "./LP";
import Detail from "./Detail";

class Status extends Component {
  render() {
    return (
      <div className={styles.status_container}>
        <div className={styles.life_point}>
          <LP />
        </div>
        <div className={styles.status_body}>
          <Detail />
        </div>
        <div className={styles.life_point}>
          <LP />
        </div>
      </div>
    );
  }
}

export default Status;
