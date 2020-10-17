import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './ShuffleButton.styles';
import { MdShuffle } from 'react-icons/md'

const ShuffleButton = ({action}) => (
  <Button onClick={(e) => action}>
    <MdShuffle size='2.75rem' />
  </Button>
);

ShuffleButton.propTypes = {
  action: PropTypes.func
};

export default ShuffleButton;
