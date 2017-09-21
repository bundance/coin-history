import { createActions } from 'redux-actions';
import * as appTypes from '../../constants/action-types/app.types';

const actions = createActions({},
    appTypes.SET_IS_LOADING
);

const {
    setIsLoading
} = actions;

export {
    setIsLoading
}
