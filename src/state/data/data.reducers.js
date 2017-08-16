import { handleActions } from 'redux-actions';
import initialState from './initial.state';
import * as dataTypes from '../../constants/action-types/data.types';
import * as dataStoreKeys from '../../constants/store-keys/data-store-keys';

export default handleActions({
    [dataTypes.SET_HISTORIC_PRICES_SAMPLE]: setHistoricPricesSample
}, initialState);

function setHistoricPricesSample(state, action) {
    return {
        ...state,
        [dataStoreKeys.HISTORIC_PRICES_SAMPLE]: action.payload
    }
}
