import React, { Component } from "react";

import "./Content.css";
import Status from "./Status";
import Deck from "./Deck";

class Content extends Component {
  render() {
    return (
      <div className="content-container">
        <div className="board">
          <div className="status">
            <Status />
          </div>
          <div className="deck">
            <Deck />
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
