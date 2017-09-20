import { combineReducers } from "redux";
import data from './data/data.reducers';
import app from './app/app.reducers';

const appReducer = combineReducers({
    app,
    data
});

export default (state, action) => {
    return appReducer(state, action)
}