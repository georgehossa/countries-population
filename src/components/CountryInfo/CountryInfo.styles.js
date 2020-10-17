import styled from 'styled-components';

export const Container = styled.div`
  display: grid;
  grid-column: 2 / -1;
  grid-row: 3 / 4;
  grid-template: repeat(2, auto) / repeat(3, 1fr);
  grid-template-areas: "name name ." "population change .";
  padding: 1rem;
  background-color: rgba(0,0,0,.65);
  @media (max-width: 480px) {
    grid-column: 1 / -1;
    grid-row: 3 / -1;
    padding-bottom: 6rem;
    grid-template: repeat(3, auto) / 1fr;
    grid-template-areas: "name" "population" "change";
  }
`;

export const Name = styled.h1`
  display: flex;
  align-items: center;
  grid-area: name;
  margin: 0;
  padding-bottom: 1rem;
  font-size: 3.75rem;
  line-height: 3.75rem;
  border-bottom: 1px solid white;
  color: white;
  @media (max-width: 480px) {
    font-size: 2.75rem;
    line-height: 2.75rem;
  }
`;

export const PopulationContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 1rem 0 0;
  grid-area: population;
  @media (max-width: 480px) {
    padding: .2rem 0;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`
export const YearChangeContainer = styled(PopulationContainer)`
  grid-area: change;
  padding: 1rem 0 0 1rem;
  border-left: 1px solid white;
  @media (max-width: 480px) {
    padding: 0;
    border-left: none;
    border-top: 1px solid white;
  }
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
  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`

