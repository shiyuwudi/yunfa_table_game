import React, { Component } from "react";

import styles from "./Content.less";
import Status from "./Status";
import Deck from "./Deck";

class Content extends Component {
  render() {
    return (
      <div className={styles.content_container}>
        <div className={styles.board}>
          <div className={styles.status}>
            <Status />
          </div>
          <div className={styles.deck}>
            <Deck />
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
