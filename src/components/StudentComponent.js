import { Component } from "react";
import { STUDENTS } from "../data/students";
import List from "./ListComponent";

class Student extends Component {
    constructor() {
        super();
        this.state = {
            data : STUDENTS
        }
    }

    render() {
        return (
            <div>
                <h2>Student Name Detail</h2>
                <ul>
                    { this.state.data.map((item) => <List data={item} />) }
                </ul>
            </div>
        )
    }
}

export default Student;