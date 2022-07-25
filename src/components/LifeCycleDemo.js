/**
 * 1. Initial phase - getDefaultProps(), getInitialState()
 * 2. Mounting Phase - componentWillMount(), componentDidMount(), render()
 * 3. Updating Phase - componentWillReceiveProps(), shouldComponentUpdate(), componentWillUpdate(), render(), componentDidUpdate()
 * 4. Unmounting Phase - componentWillUnmount()
 */

import React, { Component } from 'react'

export default class LifeCycleDemo extends Component {
    constructor(props) {
        super(props);
        this.state = { hello: "Zohaib" };
        this.changeState = this.changeState.bind(this);

    }
    render() {
        return (
            <div>
                <h1>React JS Component Lifecycle</h1>
                <h3>Hello {this.state.hello}</h3>
                <button onClick={this.changeState}>Click Here!</button>
            </div>
        );
    }

    componentWillMount() {
        console.log("component Will mount");
    }

    componentDidMount() {
        console.log("component did mount");
    }

    changeState() {
        this.setState({ hello: "I am a professor" });
    }

    componentWillReceiveProps(newProps) {
        console.log("component will receive new props");
    }

    shouldComponentUpdate(newProps, newState) {
        return true;
    }
    componentWillUpdate(nextProps, nextState) {
        console.log('Component Will UPDATE!');
    }
    componentDidUpdate(prevProps, prevState) {
        console.log('Component Did UPDATE!')
    }
    componentWillUnmount() {
        console.log('Component Will UNMOUNT!')
    }
}
