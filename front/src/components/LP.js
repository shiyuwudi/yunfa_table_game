import React from 'react';
import { Icon } from 'antd';

import './LP.css';

function LP() {
  return (
    <div className="LP-container">
      <div className="text-display">
        <div className="label">工资</div>
        <div className="count">10000</div>
      </div>
      <div className="bar-chart">
        <div className="icon-con">
          <Icon className="icon" type="heart" theme="filled" />
        </div>
        <div className="bar">
          血条
        </div>
      </div>
    </div>
  );
}

export default LP;
