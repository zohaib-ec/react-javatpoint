import { Component } from "react";

class List extends Component {
    render() {
        return (
            <div>
                <ul>
                    <li>{this.props.data.name}</li>
                </ul>
            </div>
        );
    }
}

export default List;