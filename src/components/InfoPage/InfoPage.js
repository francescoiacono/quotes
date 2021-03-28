import React from 'react';

import SubmitQuote from '../SubmitQuote/SubmitQuote';
import classes from './InfoPage.module.css';


const InfoPage = () => {
    return (
        <section className={classes.InfoPage}>
            <div className={classes.Container}>
                <div className={classes.Title}>
                    <p>Why?</p>
                </div>
                <div className={classes.Deets}>
                    <p>Because everyone needs motivation sometimes.</p>
                </div>
                <SubmitQuote/>
            </div>
        </section>
    )
}

export default InfoPage;