import React from 'react';
import {Grid } from 'react-bootstrap';

const About = () =>  (
    <Grid className="App">
        <h2>About</h2>
        <p>
            CoinHistory is a simple client interface to the GDAX <a href="https://docs.gdax.com/#get-historic-rates">
            getHistoricRates</a> and <a href="https://docs.gdax.com/#get-products">getProducts</a> endpoints.
        </p>
        <p>
            Created by Mike Evans using the three Rs: React, Redux and Ramda.
        </p>
        <p>
            All code is open source, and can be found <a href="https://github.com/bundance/coin-history">here</a>
        </p>
    </Grid>
);

export default About;