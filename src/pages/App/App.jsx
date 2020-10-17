import React, { useState, useEffect } from 'react';
import { GlobalStyle } from '../../styles/globalStyles';
import { Container, Button } from './App.styles';
import countries from '../../utils/data.json';
import Logo from '../../components/Logo';
import CountryInfo from '../../components/CountryInfo';
import Brand from '../../assets/logo.svg';
import { MdShuffle } from 'react-icons/md';

const App = () => {
  const [country, setCountry] = useState(countries[0]);

  const randomCountry = () => {
    setCountry(countries[Math.floor(Math.random() *  countries.length)]);
  };

  return(
    <>
      <GlobalStyle/>
      <Container>
        <Logo image={Brand} imageAlt='Countries in the world by population | 2020' />
        <CountryInfo country={country} />
        {/* TODO: Add Context to handle country and create a custom hook to handle change */}
        <Button onClick={randomCountry}>
          <MdShuffle size='2.75rem' />
        </Button>
      </Container>
    </>
  );
}

export default App;
