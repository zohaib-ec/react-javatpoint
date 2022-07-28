import logo from './logo.svg';
import './App.css';
import WelcomeComponent from './components/WelcomeComponent';
import Greet from './components/GreetComponent';
import Student from './components/StudentComponent';
import Stateful from './components/StatefulComponent';
import { StateComponent } from './components/StatePropCompo';
import PropValidation from './components/PropValidComponent';
import { ConstructorDemo } from './components/ConstructorDemo';
import FUpdate from './components/ForceUpdateComponent';
import DOMUpdate from './components/DOMManipulation';
import LifeCycleDemo from './components/LifeCycleDemo';
import UncontrolledForm from './components/UncontrolledForm';
import ControlledForm from './components/ControlledForm';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello Zohaib
        </p>
        <a
          className="App-link"
          href="https://www.youtube.com/zohaib166"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit my channel
        </a>
        {/* <WelcomeComponent name="Zohaib"/> */}
        {/* <Greet /> */}
        {/* <Student/> */}
        {/* <Stateful/> */}
        {/* <StateComponent /> */}
        {/* <PropValidation/> */}
        {/* <ConstructorDemo/> */}
        {/* <FUpdate/> */}
        {/* <DOMUpdate/> */}
        {/* <LifeCycleDemo/> */}
        {/* <UncontrolledForm/> */}
        <ControlledForm/>
      </header>
    </div>
  );
}

export default App;
