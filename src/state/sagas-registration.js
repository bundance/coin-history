import { fork } from "redux-saga/effects";
import { watchDownloadData } from './data/data.sagas';

export default function* root() {
    yield [
        fork(watchDownloadData),
    ]
};