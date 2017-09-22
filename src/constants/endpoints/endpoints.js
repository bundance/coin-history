export const endpointNames = {
    HISTORICAL_PRICES_ENDPOINT: 'historicalPricesEndpoint',
    COINS: 'coins'
};

export const endpoints = {
    [endpointNames.HISTORICAL_PRICES_ENDPOINT]: {
        gdax: coin => `https://api.gdax.com/products/${coin}/candles`
    },
    [endpointNames.COINS]: {
        gdax: () => `https://api.gdax.com/products`
    }
};
