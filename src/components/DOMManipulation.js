import React, { Component } from 'react';  
import ReactDOM from 'react-dom';  

class DOMUpdate extends Component {
    constructor() {
        super();
        this.findDomNodeHandler1 = this.findDomNodeHandler1.bind(this);
        this.findDomNodeHandler2 = this.findDomNodeHandler2.bind(this);
    };

    findDomNodeHandler1() {
        var myDiv = document.getElementById("DivOne");
        ReactDOM.findDOMNode(myDiv).style.color = 'red';
    }

    findDomNodeHandler2() {
        var myDiv = document.getElementById("DivTwo");
        ReactDOM.findDOMNode(myDiv).style.color = 'blue';
    }

    render() {
        return (
            <div>
                <h1>ReactJS find DOM Node Example</h1>
                <button onClick={this.findDomNodeHandler1}>Find DOM Node 1</button>
                <button onClick={this.findDomNodeHandler2}>Find DOM Node 2</button>
                <h3 id = "DivOne">JTP-NODE1</h3>
                <h3 id = "DivTwo">JTP-NODE2</h3>
            </div>
        );
    }
}

export default DOMUpdate;