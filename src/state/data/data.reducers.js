import { handleActions } from 'redux-actions';
import initialState from './initial.state';
import * as dataTypes from '../../constants/action-types/data.types';
import * as dataStoreKeys from '../../constants/store-keys/data-store-keys';

export default handleActions({
    [dataTypes.DATA_HANDLE_FORM_CHANGE]: handleFormChange,
    [dataTypes.SET_HISTORIC_PRICES_SAMPLE]: setHistoricPricesSample,
    [dataTypes.SET_COINS]: setCoins,
    [dataTypes.SET_FROM_DATE]: setFromDate,
    [dataTypes.SET_TO_DATE]: setToDate
}, initialState);

function handleFormChange(state, action) {
    return {
        ...state,
        [dataStoreKeys.API_OPTIONS]: Object.assign({}, state[dataStoreKeys.API_OPTIONS], action.payload)
    };
}

function setHistoricPricesSample(state, action) {
    return {
        ...state,
        [dataStoreKeys.HISTORIC_PRICES_SAMPLE]: action.payload
    }
}

function setFromDate(state, action) {
    return {
        ...state,
        [dataStoreKeys.API_OPTIONS]: Object.assign(
            {}, state[dataStoreKeys.API_OPTIONS], { [dataStoreKeys.FROM_DATE]: action.payload }
        )
    }
}

function setToDate(state, action) {
    return {
        ...state,
        [dataStoreKeys.API_OPTIONS]: Object.assign(
            {}, state[dataStoreKeys.API_OPTIONS], { [dataStoreKeys.TO_DATE]: action.payload }
        )
    }
}

function setCoins(state, action) {
    return {
        ...state,
        [dataStoreKeys.COINS]: action.payload
    }
}