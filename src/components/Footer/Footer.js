import React, { useState, useEffect } from 'react';

import classes from './Footer.module.css';

import gitIconPath from '../../assets/github-black.svg';
import twitIconPath from '../../assets/Logo black.svg';

const Footer = () => {
  const [changeCol, setChangeCol] = useState(false);

  const listenScrollEvent = e => setChangeCol(window.scrollY >= 15);

  useEffect(() => {
    window.addEventListener('scroll', listenScrollEvent);
    return () => window.removeEventListener('scroll', listenScrollEvent);
  }, []);

  return (
    <footer className={classes.Footer}>
      <div className={classes.FooterContainer}>
        <p>
          2021 ©{' '}
          <a
            href='https://francescoiacono.co.uk'
            rel='noreferrer'
            target='_blank'
            className={classes.PortfolioLink}
          >
            Francesco Iacono
          </a>
        </p>
        <div className={classes.SocialMediaContainer}>
          <a
            href='https://github.com/francescoiacono'
            rel='noreferrer'
            target='_blank'
          >
            <img
              alt='GitHub Icon'
              className={changeCol ? classes.Invert : ''}
              src={gitIconPath}
            />
          </a>
          <a
            href='https://twitter.com/FrancescoIac0n0'
            rel='noreferrer'
            target='_blank'
          >
            <img
              alt='Twitter Icon'
              className={changeCol ? classes.Invert : ''}
              src={twitIconPath}
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
