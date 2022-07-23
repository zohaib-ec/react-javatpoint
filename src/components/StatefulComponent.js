/**This component has a state and it changes with click of a button*/

import { Component } from "react";

class Stateful extends Component {
    constructor() {
        super();
        this.state = {
            display: false
        };
        console.log('Component this', this);
        this.toggleDisplay = this.toggleDisplay.bind(this);
    }

    toggleDisplay() {
        this.setState({ display: !this.state.display });
    }
    render() {
        return (
            <div className="App-header">
                <h1>Welcome to React World</h1>
                {this.state.display ? (
                    <div>
                        <div className="red">Zohaib</div>
                        <div><button onClick={this.toggleDisplay}>Show Second name</button></div>
                    </div>

                ) : (
                    <div>
                        <div className="green">Hasan</div>
                        <div><button onClick={this.toggleDisplay}>Show First name</button></div>
                    </div>
                )}

            </div>
        );

    }
}

export default Stateful;