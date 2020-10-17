import React, { useState, useEffect } from 'react';
import Unsplash, { toJson } from 'unsplash-js';
import { GlobalStyle } from '../../styles/globalStyles';
import { Container, Button } from './App.styles';
import countries from '../../utils/data.json';
import Logo from '../../components/Logo';
import CountryInfo from '../../components/CountryInfo';
import Brand from '../../assets/logo.svg';
import { MdShuffle } from 'react-icons/md';

const App = () => {
  const [country, setCountry] = useState(countries[0]);
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
    searchPhoto(country.name);
  }, [country, unsplash.search]);

  const randomCountry = () => {
    setCountry(countries[Math.floor(Math.random() *  countries.length)]);
  };

  return(
    <>
      <GlobalStyle/>
      <Container bgImage={pics.map(image => image.urls.regular)}>
        <Logo image={Brand} imageAlt='Countries in the world by population | 2020' />
        <CountryInfo country={country} />
        <Button onClick={randomCountry}>
          <MdShuffle size='2.75rem' />
        </Button>
      </Container>
    </>
  );
}

export default App;
