export const fetchHistoricalPrices = (/*coin, opts*/) => {
    const coin = 'BTC-USD';
    const opts = {
        start: 1499558400,
        end: 1468022400,
        Accept: 'application/json',
        'Content-Type': 'application/json'
    };

    return fetch(`https://api.gdax.com/products/${coin}/candles`, { method: 'GET', opts })
        .then(response => response.json())
        .then(responseJson => responseJson);
};
