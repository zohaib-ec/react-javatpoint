import logo from './logo.svg';
import './App.css';
import WelcomeComponent from './components/WelcomeComponent';
import Greet from './components/GreetComponent';
import Student from './components/StudentComponent';
import Stateful from './components/StatefulComponent';
import { StateComponent } from './components/StatePropCompo';
import PropValidation from './components/PropValidComponent';

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
        <PropValidation/>
      </header>
    </div>
  );
}

export default App;
