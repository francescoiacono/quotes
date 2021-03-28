import React, { useState, useEffect } from 'react';
import axios from 'axios';

import classes from './SubmitQuote.module.css';

const SubmitQuote = () => {
  const [data, setData] = useState({
    loading: false,
    error: '',
    submitted: false
  });

  const { loading, error, submitted } = data;

  const [input, setInput] = useState('');

  const submitData = async () => {
    setData({ ...data, loading: true });

    try {
      await axios.post(
        'https://motivationalquotes-d153a-default-rtdb.europe-west1.firebasedatabase.app/quotes/.json',
        {
          quote: input,
          approved: false
        }
      );
      setData({ ...data, submitted: true, loading: false });
    } catch (err) {
      setData({ ...data, error: err, loading: false });
    }
  };

  const isQuoteInvalid = q => {
    if (!q) return true;

    const format = /[@#$%^&*()_+\-=\[\]{}'"\\|<>\/]+/;
    if (q.length > 64 || q.length < 3) return true;

    return format.test(q);
  };

  const onChange = e => {
    setInput(e.target.value);
    setData({ ...data, submitted: false });
  };

  return (
    <div className={classes.SubmitQuote}>
      <div className={classes.MainContainer}>
        <div>
          <p>Submit your motivational quote!</p>
        </div>
        <div className={classes.InputContainer}>
          <input
            value={input}
            onChange={e => onChange(e)}
            placeholder='GO GET IT!'
          />

          <button
            onClick={() => {
              setData({ ...data, submitted: true });
              if (!isQuoteInvalid(input) && !input) {
                submitData();
              }
              setTimeout(() => {
                setData({
                  ...data,
                  loading: false,
                  submitted: false,
                  error: ''
                });
              }, 5000);
            }}
          >
            Submit
          </button>
        </div>
      </div>
      <div
        className={`${submitted ? classes.Visible : classes.NotVisible} ${
          classes.Message
        }`}
      >
        {submitted && (
          <>
            {!isQuoteInvalid(input) ? (
              <p>
                Thank you for your submission! We'll just need to approve it.
              </p>
            ) : (
              <p style={{ color: '#c00000' }}>
                Quotes need to be at least 3 characters long, not longer than 64
                characters, and must not contain numbers or special characters.
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SubmitQuote;
