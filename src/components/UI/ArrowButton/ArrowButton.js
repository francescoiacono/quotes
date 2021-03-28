import React from 'react';

import classes from './ArrowButton.module.css';
import DownArrow from '../../../assets/arrowdown.png';

const ArrowButton = () => {
  return (
    <button
      className={classes.Button}
      onClick={() => {
        window.scrollTo(0, 780);
      }}
    >
      <img
        className={classes.ArrowButton}
        alt='Scroll down button'
        src={DownArrow}
      />
    </button>
  );
};

export default ArrowButton;
