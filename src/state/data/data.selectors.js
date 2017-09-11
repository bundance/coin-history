import { createSelector } from 'reselect';
import * as R from 'ramda';
import * as dataStoreKeys from '../../constants/store-keys/data-store-keys';
import Papa from 'papaparse';
import moment from 'moment';
import helpers from '../../utils/helpers';
import appHelpers from '../../helpers/app.helpers';
import trace from '../../dev/trace';

export const selectHistoricPricesSample = R.path([dataStoreKeys.DATA, dataStoreKeys.HISTORIC_PRICES_SAMPLE]);
export const selectFromDate = R.path([dataStoreKeys.DATA, dataStoreKeys.FROM_DATE]);
export const selectToDate = R.path([dataStoreKeys.DATA, dataStoreKeys.TO_DATE]);
export const selectFormValues = R.path([dataStoreKeys.DATA, dataStoreKeys.FORM_VALUES]);

const diffInSecs = (from, to) => moment(to).diff(moment(from), 'seconds');

const granularityDivisor = R.divide(R.__, 200);

export const calculateGranularity = R.compose(
    Math.round,
    granularityDivisor,
    diffInSecs
);


export const getGranularity = createSelector(
    [selectFromDate, selectToDate],
    calculateGranularity
);


export const getGranularityFromFormValues = R.converge(
    calculateGranularity, [R.path([dataStoreKeys.FROM_DATE]), R.path([dataStoreKeys.TO_DATE])]
);



export const getFormValues = createSelector(
    [selectFormValues],
    R.converge(R.mergeAll, [R.identity, getMarketApiName, getGranularityFromFormValues])
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


const getReadableDateTime = dt => ({
    readableDate: moment(dt).format('DD-MMM-YY'),
    readableTime: moment(dt).format('h:mm:ss a')
});
export const getDateFromPrice = R.converge(R.multiply(1000), [R.path(['date'])]);
const getReadableDateTimeFromPrice = R.compose(getReadableDateTime, getDateFromPrice);

export const getReadableHistoricPrices = createSelector(
    [getHistoricPricesSample],
    R.reduce(
        helpers.useWithFlipped(
            R.append, [R.converge(R.merge, [R.identity, getReadableDateTimeFromPrice]), R.identity]
        ),
    [])
);


export const getFirstXPrices = R.curry((x, state) => createSelector(
    [getReadableHistoricPrices],
    R.take(x)
)(state));


export const getLastXPrices = R.curry((x, state) => createSelector(
    [getReadableHistoricPrices],
    R.takeLast(x)
)(state));


////// HELPERS //////
const getApiNameFromFormValue = R.path(['api']);

export function getMarketApiName(formValues) {
    const uiApiName = getApiNameFromFormValue(formValues);

    const api = appHelpers.mapUIApiNameToMarketApiName(uiApiName);

    return Object.assign({}, formValues, { api });
}


