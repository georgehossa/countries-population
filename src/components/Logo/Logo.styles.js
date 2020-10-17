import styled from 'styled-components';

export const LogoContainer = styled.div`
  display: block;
  grid-column: 1 / -1;
  padding: 1rem;
  background: linear-gradient(180deg,rgba(0,0,0,.3) 0%,rgba(0,0,0,0) 100%);
  mix-blend-mode: normal;
`;

export const LogoImage = styled.img`
  display: block;
  filter: drop-shadow(0 2.14px 2.14px rgba(0,0,0,.25));
`;
