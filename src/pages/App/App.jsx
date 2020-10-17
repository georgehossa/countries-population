import React, { useState } from 'react';
import { GlobalStyle } from '../../styles/globalStyles';
import { Container } from './App.styles';
import countries from '../../utils/data.json';
import Logo from '../../components/Logo';
import CountryInfo from '../../components/CountryInfo';
import Brand from '../../assets/logo.svg';

const App = () => {
  const [country, setCountry] = useState(countries[0]);

  return(
    <>
      <GlobalStyle/>
      <Container>
        <Logo image={Brand} imageAlt='Countries in the world by population | 2020' />
        <CountryInfo country={country} />
      </Container>
    </>
  );
}

export default App;
