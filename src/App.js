import React from 'react';
import './App.css';
import Clock from './components/Clock/Clock'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={process.env.REACT_APP_WEBSITE_LOGO} className="App-logo" alt="logo" />
        <p>
          {process.env.REACT_APP_WEBSITE_NAME}
        </p>
        <a
          className="App-link"
          href="https://github.com/kkdt/coronavirus-dashboard"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <p/>
        <Clock />
      </header>
    </div>
  );
}

export default App;
