import React, {Component} from 'react';

class FUpdate extends Component {
    constructor() {
        super();
        this.forceUpdateState = this.forceUpdateState.bind(this);
    }

    forceUpdateState() {
        this.forceUpdate();
    }

    render() {
        return(
            <div>
                <h1>Dice Rolling Simulation</h1>
                <h3>Roll Dice: {Math.ceil(Math.random() * 6)} </h3>
                <button onClick={this.forceUpdateState}>Roll</button>
            </div>
        );
    }
}
export default FUpdate;