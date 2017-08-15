import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap-theme.css";
import reducer from "./state/index";
import App from "./components/app/app.container";
import initialState from "./state/initial-state";
import sagas from "./state/sagas-registration";

// blobby - you're here. Your sagas aren't being called. Probelm with redux-saga?
const sagaMiddleware = createSagaMiddleware();

let store = createStore(
    reducer,
    initialState,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(sagas);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);

registerServiceWorker();