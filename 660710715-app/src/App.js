import logo from './Starbucks_Corporation_Logo_2011-1011x1024.png';
import './App.css';
import Hello from './Hello';
import Goodbye from './Goodbye';
import JSXExamples from './components/jsxexample';

function App() {
  return (
    <div className="App">
      <Hello/>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          660710715 <code>Thanyalak</code> Dechnakhornchai
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Goodbye/>
      <JSXExamples/>
    </div>
  );
}

export default App;
