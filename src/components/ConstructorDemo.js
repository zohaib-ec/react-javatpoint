import React, { Component } from 'react';

export class ConstructorDemo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: 'www.javatpoint.com'
        }

        this.handleEvent = this.handleEvent.bind(this);
    }

    handleEvent() {
        this.setState(
            { data: 'zohaib' }
        );
        console.log(this.props);
    }

    render() {
        return (
            <div className='App'>
                <h2>React constructor example</h2>
                <input type="text" value={this.state.data} />
                <button onClick={this.handleEvent}> Please Click </button>
            </div>
        );
    }
}

