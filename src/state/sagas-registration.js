import { fork } from "redux-saga/effects";
import { watchDownloadData, watchFetchCoins } from './data/data.sagas';

export default function* root() {
    yield [
        fork(watchDownloadData),
        fork(watchFetchCoins)
    ]
};