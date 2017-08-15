import { call, put, select, takeLatest } from 'redux-saga/effects';
import * as dataActions from '../../constants/action-types/data.types';
import { fetchHistoricalPrices } from '../../api/gdax/fetch-historical-prices.api';

export function* watchDownloadData() {
    console.log('>>> watchDownloadData called, watching ', dataActions.FETCH_DATA);
    yield takeLatest(dataActions.FETCH_DATA, attemptFetchDataSaga);
}

export function* attemptFetchDataSaga(action) {
    console.log('***** attemptDownloadDataSaga called ');
    try {
        const prices = yield call(fetchHistoricalPrices);
        console.log('******* attemptDownloadDataSaga response:', { prices } );
    } catch(err) {
        console.log('*** bum, an error happened', { err });
    }
}

