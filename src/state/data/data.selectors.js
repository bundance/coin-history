import { createSelector } from 'reselect';
import * as R from 'ramda';
import * as dataStoreKeys from '../../constants/store-keys/data-store-keys';

export const selectHistoricPricesSample = R.path([dataStoreKeys.DATA, dataStoreKeys.HISTORIC_PRICES_SAMPLE]);
export const selectFromDate = R.path([dataStoreKeys.DATA, dataStoreKeys.FROM_DATE]);
export const selectToDate = R.path([dataStoreKeys.DATA, dataStoreKeys.TO_DATE]);
export const selectFormValues = R.path([dataStoreKeys.DATA, dataStoreKeys.FORM_VALUES]);
