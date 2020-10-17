import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-column: 2 / -1;
  grid-row: 3 / 4;
  grid-template: 1fr 1fr / repeat(3, 1fr);
  grid-template-areas: "name name ." "population change .";
  padding: 1rem;
  background-color: rgba(0,0,0,.65);
`;

export const Name = styled.h1`
  display: flex;
  align-items: center;
  grid-area: name;
  margin: 0;
  font-size: 3.75rem;
  border-bottom: 1px solid white;
  color: white;
`;

export const PopulationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  grid-area: population;
`
export const YearChangeContainer = styled(PopulationContainer)`
  grid-area: change;
  padding: 1rem 0 0 1rem;
  border-left: 1px solid white;
`
export const Label = styled.h3`
  display: flex;
  align-items: center;
  font-size: .875rem;
  margin: 0;
  color: white;
  svg {
    margin-right: 1rem;
  }
`
export const Fact = styled.h2`
  font-size: 2rem;
  margin: 0;
  color: white;
`

