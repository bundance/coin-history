import { createSelector } from 'reselect';
import * as R from 'ramda';
import * as dataStoreKeys from '../../constants/store-keys/data-store-keys';
import Papa from 'papaparse';
import moment from 'moment';
import helpers from '../../utils/helpers';
import appHelpers from '../../helpers/app.helpers';

export const selectHistoricPricesSample = R.path([dataStoreKeys.DATA, dataStoreKeys.HISTORIC_PRICES_SAMPLE]);
export const selectFormValues = R.path([dataStoreKeys.DATA, dataStoreKeys.FORM_VALUES]);
export const selectCoins = R.path([dataStoreKeys.DATA, dataStoreKeys.COINS]);

export const getCoinIds = createSelector(
    [selectCoins],
    R.map(coin => coin.id)
);

export const getToDate = createSelector(
    [selectFormValues],
    R.prop(dataStoreKeys.TO_DATE)
);

export const getFromDate = createSelector(
    [selectFormValues],
    R.prop(dataStoreKeys.FROM_DATE)
);

export const getDateFormat = createSelector(
    [selectFormValues],
    R.prop(dataStoreKeys.DATE_FORMAT)
);

export const getTimeFormat = createSelector(
    [selectFormValues],
    R.prop(dataStoreKeys.TIME_FORMAT)
);

const granularityDivisor = R.divide(R.__, 200);
const diffInSecs = (from, to) => moment(to).diff(moment(from), 'seconds');

export const calculateGranularity = R.compose(
    Math.round,
    granularityDivisor,
    diffInSecs
);


export const getGranularity = createSelector(
    [getFromDate, getToDate],
    calculateGranularity
);


export const getGranularityFromFormValues = R.converge(
    calculateGranularity, [R.path([dataStoreKeys.FROM_DATE]), R.path([dataStoreKeys.TO_DATE])]
);


// export const getFormValues = createSelector(
//     [selectFormValues],
//     R.converge(R.merge, [
//         R.identity,
//         helpers.asObj('granularity', getGranularityFromFormValues)])
// );

export const getFormValues = createSelector(
    [selectFormValues, getCoinIds],
    R.useWith(
        R.merge, [
            R.converge(R.merge, [
                R.identity,
                helpers.asObj('granularity', getGranularityFromFormValues)
            ]),
            helpers.asObj('coins', R.identity)
        ]
    )
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
        R.map(R.zipObj([dataStoreKeys.TIMESTAMP, dataStoreKeys.OPEN, dataStoreKeys.CLOSE,
            dataStoreKeys.HIGH, dataStoreKeys.LOW, dataStoreKeys.VOLUME])),
        R.path([dataStoreKeys.DATA]),
        R.partialRight(Papa.parse, [{ dynamicTyping: true }])
    )
);


const getFormattedDateTime = R.curry((dateFormat, timeFormat, dt) => ({
    date: moment(dt).format(dateFormat),
    time: moment(dt).format(timeFormat)
}));

export const getDateFromPrice = R.converge(R.multiply(1000), [R.path([dataStoreKeys.TIMESTAMP])]);

const getFormattedDateTimeFromPrice = R.curry((dateFormat, timeFormat) =>
    R.compose(getFormattedDateTime(dateFormat, timeFormat), getDateFromPrice)
);

export const getFormattedHistoricPrices = R.curry((dateFormat, timeFormat, prices) =>
    R.reduce(
        helpers.useWithFlipped(
            R.append, [R.converge(
                R.merge, [R.identity, getFormattedDateTimeFromPrice(dateFormat, timeFormat)]
            ), R.identity]
        ),
        [])(prices)
);


export const getReadableHistoricPrices = createSelector(
    [getDateFormat, getTimeFormat, getHistoricPricesSample],
    getFormattedHistoricPrices
);


export const getFirstXPrices = x => createSelector(
    [getReadableHistoricPrices],
    R.take(x)
);


export const getLastXPrices = x => createSelector(
    [getReadableHistoricPrices],
    R.takeLast(x)
);


////// HELPERS //////
const getApiNameFromFormValue = R.path(['api']);

export function getMarketApiName(formValues) {
    return R.compose(
        appHelpers.mapUIApiNameToMarketApiName,
        getApiNameFromFormValue
    )(formValues);
}


