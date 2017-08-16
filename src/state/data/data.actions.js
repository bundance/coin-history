import { createActions } from 'redux-actions';
import * as dataTypes from '../../constants/action-types/data.types';

const actions = createActions(
    {},
    dataTypes.DOWNLOAD_DATA,
    dataTypes.FETCH_DATA,
    dataTypes.SET_HISTORIC_PRICES_SAMPLE
);

const {
    downloadData,
    fetchData,
    setHistoricPricesSample
} = actions;

export {
    downloadData,
    fetchData,
    setHistoricPricesSample
}
