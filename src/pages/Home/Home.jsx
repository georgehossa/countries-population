import React from 'react';
import PropTypes from 'prop-types';
import { GlobalStyle } from '../../styles/globalStyles';
import { Container } from './Home.styles';

const Home = (props) => (
  <>
    <GlobalStyle/>
    <Container>
      {props.children}
    </Container>
  </>
);

Home.propTypes = {
  children: PropTypes.node,
};

export default Home;
