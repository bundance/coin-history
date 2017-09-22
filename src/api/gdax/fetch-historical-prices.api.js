import * as R from 'ramda';
import { endpoints, endpointNames } from '../../constants/endpoints/endpoints';

const getEndpoint = (endpoint, api) => {
    const marketApi = R.path([endpoint, api], endpoints);

    return coin => marketApi(coin);
};

/**
 *
 * @param opts object - { api, coin, granularity, start, end }
 * @returns {Promise.<TResult>}
 */
export const fetchHistoricalPrices = (opts) => {
    const endpoint = R.apply(getEndpoint(endpointNames.HISTORICAL_PRICES_ENDPOINT, opts.api), [opts.coin]);

    const qs = R.compose(
        R.reduce((acc, value) => `${ acc }&${ value[0] }=${ value[1] }` , '?'),
        R.toPairs
    )(opts);

    return fetch(endpoint + qs)
        .then(response => response.json());
};

export const fetchCoins = (opts) => {
    const endpoint = getEndpoint(endpointNames.COINS, opts.api)();

    return fetch(endpoint)
        .then(response => response.json());
};