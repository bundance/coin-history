import { createActions } from 'redux-actions';
import * as dataTypes from '../../constants/action-types/data.types';
import moment from 'moment';

const actions = createActions(
    {
        [dataTypes.SET_FROM_DATE]: _setFromDate,
        [dataTypes.SET_TO_DATE]: _setToDate
    },
    dataTypes.DATA_HANDLE_FORM_CHANGE,
    dataTypes.FETCH_DATA,
    dataTypes.FETCH_COINS,
    dataTypes.GET_COINS,
    dataTypes.SET_COINS,
    dataTypes.SET_HISTORIC_PRICES_SAMPLE
);

const {
    dataHandleFormChange,
    fetchData,
    fetchCoins,
    getCoins,
    setCoins,
    setFromDate,
    setToDate,
    setHistoricPricesSample
} = actions;

export {
    dataHandleFormChange as handleFormChange,
    fetchData,
    fetchCoins,
    getCoins,
    setCoins,
    setFromDate,
    setToDate,
    setHistoricPricesSample
}

//////

function _setFromDate(fromDate) {
    return moment(fromDate, moment.ISO_8601).format();
}

function _setToDate(toDate) {
    return moment(toDate, moment.ISO_8601).format();
}