import React, { useEffect, useState } from 'react';

import classes from './Logo.module.css';

const Logo = () => {
  const [changeCol, setChangeCol] = useState(false);

  const listenScrollEvent = e => setChangeCol(window.scrollY >= 715);

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <header className={classes.Logo}>
      <a className={!changeCol ? classes.Black : classes.White} href='/'>
        Motivational Quotes
      </a>
    </header>
  );
};

export default Logo;
