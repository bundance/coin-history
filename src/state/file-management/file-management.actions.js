import { createActions } from 'redux-actions';
import * as fileManagementTypes from '../../constants/action-types/file-management-action.types';

const actions = createActions(
    [fileManagementTypes.DOWNLOAD_DATA]
);

const { downloadData } = actions;

export {
    downloadData
}
