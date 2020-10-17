import React from 'react';
import PropTypes from 'prop-types';
import { LogoContainer, LogoImage } from './Logo.styles';

const Logo = ({image, imageAlt}) => (
  <LogoContainer>
    <LogoImage src={image} alt={imageAlt} />
  </LogoContainer>
);

Logo.propTypes = {
  image: PropTypes.string,
  imageAlt: PropTypes.string,
};

export default Logo;
