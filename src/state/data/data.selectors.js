import { createSelector } from 'reselect';
import * as R from 'ramda';
import * as dataStoreKeys from '../../constants/store-keys/data-store-keys';
import Papa from 'papaparse';
import trace from '../../dev/trace';

export const selectHistoricPricesSample = R.path([dataStoreKeys.DATA, dataStoreKeys.HISTORIC_PRICES_SAMPLE]);
export const selectFromDate = R.path([dataStoreKeys.DATA, dataStoreKeys.FROM_DATE]);
export const selectToDate = R.path([dataStoreKeys.DATA, dataStoreKeys.TO_DATE]);
export const selectFormValues = R.path([dataStoreKeys.DATA, dataStoreKeys.FORM_VALUES]);

export const getFormValues = createSelector(
    [selectFormValues],
    mapUIApiNameToMarketApiName
);

/**
 * getHistoricPricesSample object - pass in the state object, and it returns an
 * array of formatted objects, converted from raw CSV.
 *
 * selectHistoricPricesSample() will return raw csv from the store like this:
 *  `1503920460,1,2,3,4,5
 *   1503920400,11,12,13,14,15`;
 *
 *  The compose function then converts this to an array of formatted objects, like this:
 *   [{
        date: 1503920460,
        open: 1,
        close: 2,
        high: 3,
        low: 4,
        volume: 5
    }, {
        date: 1503920400,
        open: 11,
        close: 12,
        high: 13,
        low: 14,
        volume: 15
    }];
 *
 */
export const getHistoricPricesSample = createSelector(
    [selectHistoricPricesSample],
    R.compose(
        R.map(R.zipObj(['date', 'open', 'close', 'high', 'low', 'volume'])),
        R.path(['data']),
        R.partialRight(Papa.parse, [{ dynamicTyping: true }])
    )
);

export const getFirstXPrices = R.curry((x,state) => createSelector(
    [getHistoricPricesSample],
    R.take(x)
)(state));

export const getLastXPrices = R.curry((x, state) => createSelector(
    [getHistoricPricesSample],
    R.takeLast(x)
)(state));


////// HELPERS //////
const getApiNameFromFormValue = R.path(['api']);

function mapUIApiNameToMarketApiName(formValues) {
    let api = getApiNameFromFormValue(formValues);

    api = api === 'CoinBase' ? 'gdax' : 'quandl';

    return Object.assign({}, formValues, { api });
}


