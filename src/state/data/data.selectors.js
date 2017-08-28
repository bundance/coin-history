import { createSelector } from 'reselect';
import * as R from 'ramda';
import * as dataStoreKeys from '../../constants/store-keys/data-store-keys';
import Papa from 'papaparse';

export const selectHistoricPricesSample = R.path([dataStoreKeys.DATA, dataStoreKeys.HISTORIC_PRICES_SAMPLE]);
export const selectFromDate = R.path([dataStoreKeys.DATA, dataStoreKeys.FROM_DATE]);
export const selectToDate = R.path([dataStoreKeys.DATA, dataStoreKeys.TO_DATE]);
export const selectFormValues = R.path([dataStoreKeys.DATA, dataStoreKeys.FORM_VALUES]);

export const getFormValues = createSelector(
    [selectFormValues],
    mapUIApiNameToMarketApiName
);

export const getHistoricPricesSample = createSelector(
    [selectHistoricPricesSample],
    prices => {
        const csvArray = Papa.parse(prices);
        const csvArrayOfObjs = R.map(data => R.zipObj(['date', 'open', 'close', 'high', 'low', 'volume'], data), csvArray.data);
        console.log({ prices, csvArray, csvArrayOfObjs });
        return csvArrayOfObjs;
    }
);


////// HELPERS //////
const getApiNameFromFormValue = R.path(['api']);

function mapUIApiNameToMarketApiName(formValues) {
    let api = getApiNameFromFormValue(formValues);

    api = api === 'CoinBase' ? 'gdax' : 'quandl';

    return Object.assign({}, formValues, { api });
}


