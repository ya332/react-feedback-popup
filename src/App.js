import React from 'react';
import logo from './logo.svg';
import FeedBack from './components/Feedback';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
      <FeedBack 
                position="left"
                handleClose={()=> console.log("handleclose")}
                handleSubmit={()=> console.log("handleclose")}
                handleButtonClick={()=> console.log("handleclose")}
      />
    </div>
  );
}

export default App;
