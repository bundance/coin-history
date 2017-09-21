import { handleActions } from 'redux-actions';
import initialState from './initial.state';
import * as appActions from '../../constants/action-types/app.types';
import * as appKeys from '../../constants/store-keys/app-store-keys';

export default handleActions({
    [appActions.SET_IS_LOADING]: isLoading
}, initialState);


function isLoading(state, action) {
    return {
        ...state,
        [appKeys.IS_LOADING]: action.payload
    }
}
