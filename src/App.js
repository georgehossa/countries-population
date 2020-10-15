import React from 'react';
import logo from './logo.svg';
import './App.css';
import data from './utils/data.json';

function App() {
  console.log(data);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {
          data.map(country => <p key={country.id}>{country.name} - {country.population}</p>)
        }
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
