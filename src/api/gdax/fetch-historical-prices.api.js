
export const fetchHistoricalPrices = (opts) => {
    const coin = 'BTC-USD';

    return fetch(`https://api.gdax.com/products/${coin}/candles`)
        .then(response => response.json())
        .then(responseJson => responseJson);
};
