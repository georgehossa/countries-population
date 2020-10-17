import React from 'react';
import PropTypes from 'prop-types';
import {
  Container,
  Name,
  PopulationContainer,
  YearChangeContainer,
  Label,
  Fact
} from './CountryInfo.styles';
import { MdPeople, MdShowChart } from "react-icons/md";

const CountryInfo = ({country}) => {
  return(
    <Container>
      <Name>
        {country.name}
      </Name>
      <PopulationContainer>
        <Label><MdPeople size="1.5rem"/>Population</Label>
        <Fact>{country.population}</Fact>
      </PopulationContainer>
      <YearChangeContainer>
        <Label> <MdShowChart size="1.5rem"/>Yearly Change</Label>
        <Fact>{country.yearChange}</Fact>
      </YearChangeContainer>

    </Container>
  );
}

CountryInfo.propTypes = {
  country: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    population: PropTypes.string,
    yearChange: PropTypes.string,
  }),
};

export default CountryInfo;
