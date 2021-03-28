import React from 'react';

import classes from './RefreshButton.module.css';

const RefreshButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className={classes.Button}>
      Refresh
    </button>
  );
};

export default RefreshButton;
