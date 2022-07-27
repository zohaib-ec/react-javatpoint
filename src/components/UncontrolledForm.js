// The uncontrolled input is similar to the traditional HTML form inputs. 
// The DOM itself handles the form data. Here, the HTML elements maintain their
// own state that will be updated when the input value changes. To write an 
// uncontrolled component, you need to use a ref to get form values from the DOM.
// In other words, there is no need to write an event handler for every state update.
// You can use a ref to access the input field value of the form from the DOM.

import React, { Component } from 'react'

class UncontrolledForm extends Component {
    constructor(props) {
        super(props);
        this.updateSubmit = this.updateSubmit.bind(this);
        this.input = React.createRef();
    }

    updateSubmit(event) {
        alert("you have entered the username and company name successfully");
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.updateSubmit}>
                <h1> Uncontrolled form example </h1>
                <label>Name</label> 
                <input type = "text" ref={this.input}/>

                <label>Company Name</label>
                <input type = "text" ref={this.input}/>
                <input type="submit" value="Submit"/>
            </form>
        );
    }
}
export default UncontrolledForm;

