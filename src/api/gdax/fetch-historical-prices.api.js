import * as R from 'ramda';

const endpoints = {
    historicalPricesEndpoint: {
        gdax: gdaxHistoricalPricesEndpoint
    }
};

const coins = {
    Bitcoin: 'BTC-USD'
};

export const getFormattedCoin = (coin) => R.path([coin], coins);
const getEndpoint = (endpoint, api) => R.compose(R.path([endpoint, api], endpoints), getFormattedCoin);

export const fetchHistoricalPrices = (api, coin) =>
    fetch(getEndpoint('historicalPricesEndpoint', api)(coin))
        .then(response => response.json());


function gdaxHistoricalPricesEndpoint(coin) {
    return `https://api.gdax.com/products/${coin}/candles`;
}
