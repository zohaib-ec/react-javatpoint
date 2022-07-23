/**Component that passes state from one class to another class as prop */
import { Component } from "react";

export class StateComponent extends Component {
    constructor() {
        super();
        this.state = {
            name: "Zohaib"
        }
    }
    render() {
        return (
            <div>
                <PropComponent name = {this.state.name}/>
            </div>
        );
    }
}

export class PropComponent extends Component {
    render() {
        return (
            <div>
                <h1>State & Props Example</h1>
                <h3>Welcome to {this.props.name}'s world</h3>
            </div>
        )
    }
}

