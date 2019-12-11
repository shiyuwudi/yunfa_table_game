import React from "react";

import './Deck.css';

function Deck() {
  return (
    <div className="deck-con">
      <div className="hand top">上手牌</div>
      <div className="card-holder">卡牌放置区</div>
      <div className="hand bottom">下手牌</div>
    </div>
  );
}

export default Deck;
