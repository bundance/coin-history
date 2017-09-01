export const endpointNames = {
    HISTORICAL_PRICES_ENDPOINT: 'historicalPricesEndpoint'
};

export const endpoints = {
    [endpointNames.HISTORICAL_PRICES_ENDPOINT]: {
        gdax: coin => `https://api.gdax.com/products/${coin}/candles`
    }
};
