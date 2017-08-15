import { createActions } from 'redux-actions';
import * as dataTypes from '../../constants/action-types/data.types';

const actions = createActions(
    {},
    dataTypes.DOWNLOAD_DATA,
    dataTypes.FETCH_DATA
);

const {
    downloadData,
    fetchData
} = actions;

export {
    downloadData,
    fetchData
}
