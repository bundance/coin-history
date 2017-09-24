import React from 'react';
import {Grid } from 'react-bootstrap';

const About = () =>  (
    <Grid className="App">
        <h2>About</h2>
        <p>
            CoinHistory is a simple client interface to the GDAX <a href="https://docs.gdax.com/#get-historic-rates">
            getHistoricRates</a> and <a href="https://docs.gdax.com/#get-products">getProducts</a> endpoints.

            The app has been written to help developers understand the GDAX <i>getHistoricRates()</i> endpoint, which
            can be a bit confusing, as it will only return a maximum of 200 candles for any one request. If there are
            more than 200 candles between your start and end times, the request will be rejected. When that happens,
            it's not clear how to change your request to get the API to return the data you want. This app makes it
            clear by calculating the API parameters for you.
        </p>
        <p>
            The app has been created by Mike Evans using the three Rs: React, Redux and Ramda.
        </p>
        <h2>Using the App</h2>
        <p>When the app loads, it retrieves the list of coins available from the GDAX API. Select the one you
            want and the currency it should be displayed in (the default is BTC-USD: Bitcoin, displayed in US
            dollars).
        </p>
        <p>
            Then choose your <i>from</i> and <i>to</i> dates. This specifies the range of time across which you wish
            to receive the data.
        </p>
        <p>When you do this, the app automatically calculates the <i>granularity</i> for you. This is the time interval
            (in seconds) that's required to ensure the API returns at most 200 data points, as if the time interval
            specified would cause more than 200 data points to be returned, you will receive an error.
        </p>
        <p>By default, granularity is set to 1. If, for example, you wished to receive the data points between
            a period of time that's 400 seconds apart, then granularity would need to be set to 2. As you can imagine,
            however, choosing arbitrary <i>from</i> and <i>to</i> times means that calculating granularity quickly
            becomes tricky.
        </p>
        <p>This app therefore makes it easy by calculating it for you.</p>
        <p>The returned data is displayed as the first ten datapoints, and the last ten. If you wish to see the date
            and time of each datapoint in a different format, just enter
            a <i><a href="https://momentjs.com/">MomentJS-specific</a></i> format in the Date Format box, and the date
            format for each endpoint will be instantly changed.
        </p>
        <p>
            All code is open source, and can be found <a href="https://github.com/bundance/coin-history">here</a>
        </p>
    </Grid>
);

export default About;