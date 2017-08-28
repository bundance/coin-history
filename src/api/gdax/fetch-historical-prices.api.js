import * as R from 'ramda';
import { endpoints, endpointNames } from '../../constants/endpoints/endpoints';
import { coins } from '../../constants/coins/coins';

export const getFormattedCoin = (coin) => R.path([coin], coins);
const getEndpoint = (endpoint, api) => R.compose(R.path([endpoint, api], endpoints), getFormattedCoin);

export const fetchHistoricalPrices = (api, coin) =>
    fetch(getEndpoint([endpointNames.HISTORICAL_PRICES_ENDPOINT], api)(coin))
        .then(response => response.json());
