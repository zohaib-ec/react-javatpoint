//Old method
/*function WelcomeComponent(props) {
    return <h1>Welcome {props.name} </h1>
}*/

//ES6 method
const WelcomeComponent = (props) => {
    return <h1>Welcome {props.name} </h1>
}

export default WelcomeComponent;