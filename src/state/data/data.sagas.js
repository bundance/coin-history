import { call, put, select, takeLatest } from 'redux-saga/effects';
import * as dataTypes from '../../constants/action-types/data.types';
import * as dataActions from './data.actions';
import { fetchHistoricalPrices } from '../../api/gdax/fetch-historical-prices.api';
import { selectFromDate, selectToDate } from './data.selectors';

export function* watchDownloadData() {
    yield takeLatest(dataTypes.FETCH_DATA, attemptFetchDataSaga);
}

export function* attemptFetchDataSaga(action) {
    try {
        const start = yield select(selectFromDate);
        const end = yield select(selectToDate);

        console.log({ start, end });

        const prices = yield call(fetchHistoricalPrices, { start, end });
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

