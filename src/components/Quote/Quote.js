import React, { useState, useEffect } from 'react';
import axios from 'axios';

import ArrowButton from '../UI/ArrowButton/ArrowButton';
import classes from './Quote.module.css';
import RefreshButton from './RefreshButton/RefreshButton';
import Spinner from '../UI/Spinner/Spinner';

const Quote = () => {
  const [data, setData] = useState({
    loading: true,
    error: '',
    fetchedQuotes: null
  });

  const { loading, error, fetchedQuotes } = data;

  const [currentQuote, setCurrentQuote] = useState('');

  let [index, setIndex] = useState(0);

  const loadQuotes = async () => {
    setData({ ...data, loading: true });

    try {
      const res = await axios.get(
        'https://motivationalquotes-d153a-default-rtdb.europe-west1.firebasedatabase.app/quotes.json'
      );
      const arr = Object.keys(res.data)
        .map(e => res.data[e])
        .filter(e => e.approved);
      // Object.keys(res.data).forEach(e => arr.push(res.data[e]));

      setData({
        ...data,
        loading: false,
        error: '',
        fetchedQuotes: arr
      });
    } catch (err) {
      console.error('error: ', err);
      setData({ ...data, error: err, loading: false });
    }
  };

  useEffect(() => {
    loadQuotes();
  }, []);

  const selectQuote = qs => {
    if (!qs) return setCurrentQuote('No quotes.');

    setCurrentQuote(qs[index++].quote);
    setIndex((index + 1) % qs.length);
  };

  return (
    <div className={classes.QuoteContainer}>
      {loading ? (
        <Spinner />
      ) : (
        <div className={classes.Quote}>
          {!currentQuote ? (
            <p className={classes.Instruction}>
              Press the button for a new motivational quote.
            </p>
          ) : (
            <p>{currentQuote}</p>
          )}

          <div className={classes.ButtonContainer}>
            <RefreshButton
              onClick={() => {
                selectQuote(fetchedQuotes);
              }}
            />
          </div>
        </div>
      )}
      <div className={classes.ArrowContainer}>
        <ArrowButton />
      </div>
    </div>
  );
};
export default Quote;
