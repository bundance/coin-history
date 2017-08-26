import { createSelector } from 'reselect';
import * as R from 'ramda';
import * as dataStoreKeys from '../../constants/store-keys/data-store-keys';

export const selectHistoricPricesSample = R.path([dataStoreKeys.DATA, dataStoreKeys.HISTORIC_PRICES_SAMPLE]);
export const selectFromDate = R.path([dataStoreKeys.DATA, dataStoreKeys.FROM_DATE]);
export const selectToDate = R.path([dataStoreKeys.DATA, dataStoreKeys.TO_DATE]);
export const selectFormValues = R.path([dataStoreKeys.DATA, dataStoreKeys.FORM_VALUES]);

export const getFormValues = createSelector(
    [selectFormValues],
    mapUIApiNameToMarketApiName
);

function getApiNameFromFormValue(formValues) {
    return R.path(['api'], formValues);
}

function mapUIApiNameToMarketApiName(formValues) {
    console.log('mapUIApiNameToMarketApiName', { formValues});
    let api = getApiNameFromFormValue(formValues);

    api = api === 'CoinBase' ? 'gdax' : 'quandl';

    const retVal =  Object.assign({}, formValues, { api });

    console.log('mapUIApiNameToMarketApiName', { api, retVal });

    return retVal;
}