// In HTML, form elements typically maintain their own state
// and update it according to the user input. In the controlled
// component, the input form element is handled by the component
// rather than the DOM. Here, the mutable state is kept in the
// state property and will be updated only with setState() method.

import React, { Component } from 'react'

export default class ControlledForm extends Component {
    constructor() {
        super();
        this.state = {
            value:'',
            prompt:''
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            value: event.target.value,
            prompt:event.target.value
        });
    }

    handleSubmit(event) {
        alert("You have successfully submitted: "+this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <h1>{this.state.prompt}</h1>
                <label>Name:</label>
                <input type="text" value={this.state.value} onChange={this.handleChange}/>
                <input type="submit" value = "Submit"/>
            </form>
        )
    }
}
