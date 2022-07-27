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

