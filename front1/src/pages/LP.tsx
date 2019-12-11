import React from 'react';
import { Icon } from 'antd';

import styles from './LP.less';

function LP() {
  return (
    <div className={styles.LP_container}>
      <div className={styles.text_display}>
        <div className={styles.label}>工资</div>
        <div className={styles.count}>10000</div>
      </div>
      <div className={styles.bar_chart}>
        <div className={styles.icon_con}>
          <Icon className={styles.icon} type="heart" theme="filled" />
        </div>
        <div className={styles.bar}>
          血条
        </div>
      </div>
    </div>
  );
}

export default LP;
