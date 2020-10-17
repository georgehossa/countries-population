import styled from 'styled-components';

export const Container = styled.main`
  display: grid;
  grid-template: auto 1fr auto 3.25rem / 1fr 1fr;
  width:100%;
  height: 100vh;
  background: peru;
  margin: 0;
  padding: 0;
  background-image: url(${props => props.bgImage});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  @media (max-width: 768px) {
    grid-template: auto 1fr auto 3.25rem / 1fr 3fr;
  }
  @media (max-width: 480px) {
    grid-template: auto .5fr auto / 1fr;
  }
`;

export const Button = styled.button`
  position: fixed;
  bottom: 5rem;
  right: 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4.75rem;
  width: 4.75rem;
  border-radius: 50%;
  border: none;
  cursor: pointer;
  outline: none;
  background-color: white;
  box-shadow: 0 12px 17px 2px rgba(0,0,0,0.14), 0 5px 22px 4px rgba(0,0,0,0.12), 0 7px 8px -4px rgba(0,0,0,0.20);
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  &:hover {
    box-shadow: 0 6px 10px 0 rgba(0,0,0,0.14), 0 1px 18px 0 rgba(0,0,0,0.12), 0 3px 5px -1px rgba(0,0,0,0.20);
  }
  @media (max-width: 480px) {
    bottom: 1.5rem;
    right: 0;
    left: 0;
    margin: 0 auto;
  }
`;
