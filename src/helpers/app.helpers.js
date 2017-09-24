const mapUIApiNameToMarketApiName = (uiApiName) => {
    const apiLookup = {
        CoinBase: 'gdax',
        Quandl: 'quandl'
    };

    return apiLookup[uiApiName] || 'gdax';
};


export default {
    mapUIApiNameToMarketApiName
}

