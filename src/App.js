import React, {useState, useEffect} from 'react';
import logo from './assets/logo.svg';
import './App.css';
import data from './utils/data.json';
import Unsplash, { toJson } from 'unsplash-js';

function App() {
  const [country, setCountry] = useState('china');
  const [pics, setPics] = useState([]);

  const unsplash = new Unsplash({
    accessKey: process.env.REACT_APP_ACCESS_KEY,
  });

  useEffect(() => {
    const searchPhoto = async (query) => {
      unsplash.search.photos(query, 1, 1)
        .then(toJson)
        .then((json) => setPics(json.results));
    }
    searchPhoto(country);
  }, [country, unsplash.search]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="" alt="logo" />
        {
          data.map(country => <p key={country.id} >{country.name} - {country.population}</p>)
        }
        {
          pics.map((pic) => (
            <div key={pic.id}>
              <img src={pic.urls.regular} alt={pic.alt_description}></img>
            </div>
          ))
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
