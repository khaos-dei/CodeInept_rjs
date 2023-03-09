import logo from './logo.svg';
import { useState } from 'react'
import './App.css';
import { Toggle } from './Toggle.js'
import './Toggle.css';

function App() {
  const logState = state => {
    console.log("Toggled:", state)
  }

  return (
    <div className="App">
      <header className="App-header">
        
          <input type='button'></input>
          <Toggle
            toggled={false}
            onClick={logState}/>
      </header>
    </div>
  );
}

export default App;
