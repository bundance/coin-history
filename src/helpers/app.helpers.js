import * as R from 'ramda';
import { coins } from '../constants/coins/coins';

const mapUIApiNameToMarketApiName = (uiApiName) => {
    const apiLookup = {
        CoinBase: 'gdax',
        Quandl: 'quandl'
    };

    return apiLookup[uiApiName] || 'gdax';
};

const getFormattedCoin = (coin) => R.path([coin], coins);

export default {
    getFormattedCoin,
    mapUIApiNameToMarketApiName
}

