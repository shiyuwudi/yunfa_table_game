import React, {Component} from 'react';

import './Status.css';
import LP from "./LP";
import Detail from "./Detail";

class Status extends Component {
  render() {
    return (
      <div className="status-container">
        <div className="life-point top">
          <LP />
        </div>
        <div className="status-body">
          <Detail />
        </div>
        <div className="life-point bottom">
          <LP />
        </div>
      </div>
    );
  }
}

export default Status;
