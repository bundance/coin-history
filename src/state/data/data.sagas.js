import { call, put, select, takeLatest } from 'redux-saga/effects';
import * as dataTypes from '../../constants/action-types/data.types';
import * as dataActions from './data.actions';
import { fetchHistoricalPrices } from '../../api/gdax/fetch-historical-prices.api';
import { getFormValues } from './data.selectors';

export function* watchDownloadData() {
    yield takeLatest(dataTypes.FETCH_DATA, attemptFetchDataSaga);
}

export function* attemptFetchDataSaga(action) {
    try {
        const formValues = yield select(getFormValues);
        const prices = yield call(fetchHistoricalPrices, formValues.api, formValues.coin);

        if(prices && prices.length) {
            const formattedData = formatData(prices.slice(0, 10));

            yield put(dataActions.setHistoricPricesSample(formattedData));
        }
    } catch(err) {
        console.log('*** bum, an error happened', { err });
    }
}

function formatData(data) {
    return data && data.join('\n');
}

