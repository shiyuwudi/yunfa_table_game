import React, {Component} from 'react';

import './Battleground.css';
import Title from "./Title";
import Content from "./Content";

class Battleground extends Component {
    render() {
        return (
            <div className="battle-ground">
                <Title />
                <Content />
            </div>
        );
    }
}

export default Battleground;