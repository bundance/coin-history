import { call, put, select, takeLatest } from 'redux-saga/effects';
import * as dataTypes from '../../constants/action-types/data.types';
import * as dataActions from './data.actions';
import { fetchHistoricalPrices } from '../../api/gdax/fetch-historical-prices.api';
import { getFormValues, getGranularity, mapUIApiNameToMarketApiName } from './data.selectors';
import appHelpers from '../../helpers/app.helpers';


export function* watchDownloadData() {
    yield takeLatest(dataTypes.FETCH_DATA, attemptFetchDataSaga);
}

export function* attemptFetchDataSaga(action) {
    try {
        const formValues = yield select(getFormValues);
        console.log({ formValues });

        const granularity = yield select(getGranularity);

        console.log({ granularity });

        const prices = yield call(
            fetchHistoricalPrices,
            appHelpers.mapUIApiNameToMarketApiName(formValues.api),
            appHelpers.getFormattedCoin(formValues.coin)
        );

        if(prices && prices.length) {
            const formattedData = formatData(prices);

            yield put(dataActions.setHistoricPricesSample(formattedData));
        }
    } catch(err) {
        console.log('*** bum, an error happened', { err });
    }
}

function formatData(data) {
    return data && data.join('\n');
}

