import React, {Component} from 'react';

import './Content.css';

class Content extends Component {
    render() {
        return (
            <div>
                游戏内容
                <div className="board">
                    <div className="status">
                        血量状态
                    </div>
                    <div className="deck">
                        决斗场地
                    </div>
                </div>
                <div className="detail">
                    已选信息
                </div>
            </div>
        );
    }
}

export default Content;