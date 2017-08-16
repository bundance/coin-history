import { call, put, select, takeLatest } from 'redux-saga/effects';
import * as dataTypes from '../../constants/action-types/data.types';
import * as dataActions from './data.actions';
import { fetchHistoricalPrices } from '../../api/gdax/fetch-historical-prices.api';

export function* watchDownloadData() {
    yield takeLatest(dataTypes.FETCH_DATA, attemptFetchDataSaga);
}

export function* attemptFetchDataSaga(action) {
    try {
        const prices = yield call(fetchHistoricalPrices);
        console.log('******* attemptDownloadDataSaga response:', { prices } );

        if(prices && prices.length) {
            const formattedData = formatData(prices.slice(0, 10));
            console.log({ formattedData });
            yield put(dataActions.setHistoricPricesSample(formattedData));
        }
    } catch(err) {
        console.log('*** bum, an error happened', { err });
    }
}

// blobby - you're here. Format this data.
function formatData(data) {
    return data.join('\n');
}

