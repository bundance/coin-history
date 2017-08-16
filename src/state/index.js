import { combineReducers } from "redux";
import data from './data/data.reducers';

const appReducer = combineReducers({
    data
});

export default (state, action) => {
    return appReducer(state, action)
}