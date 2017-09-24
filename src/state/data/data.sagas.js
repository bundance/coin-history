import { call, put, select, takeLatest } from 'redux-saga/effects';
import moment from 'moment';
import * as dataTypes from '../../constants/action-types/data.types';
import * as dataActions from './data.actions';
import * as appActions from '../app/app.actions';
import { fetchCoins, fetchHistoricalPrices } from '../../api/gdax/gdax.api';
import { getApiOptions } from './data.selectors';
import appHelpers from '../../helpers/app.helpers';


/////////////////////////// DOWNLOAD HISTORICAL PRICES SAGA
export function* watchDownloadData() {
    yield takeLatest(dataTypes.FETCH_DATA, attemptFetchDataSaga);
}

export function* attemptFetchDataSaga() {
    try {
        const apiOptions = yield select(getApiOptions);
        yield put(appActions.setIsLoading(true));

        const prices = yield call(
            fetchHistoricalPrices, {
                api: appHelpers.mapUIApiNameToMarketApiName(apiOptions.api),
                coin: apiOptions.selectedCoin,
                granularity: apiOptions.granularity,
                start: moment(apiOptions.fromDate).toISOString(),
                end: moment(apiOptions.toDate).toISOString()
            }
        );

        if(prices && prices.length) {
            const formattedData = formatData(prices);
            yield put(dataActions.setHistoricPricesSample(formattedData));
        }

    } catch(err) {
        console.log('*** bum, an error happened', { err });
    } finally {
        yield put(appActions.setIsLoading(false));
    }
}

function formatData(data) {
    return data && data.join('\n');
}


/////////////////////////// GET COINS SAGA ///////////////////////////

export function* watchFetchCoins() {
    yield takeLatest(dataTypes.FETCH_COINS, attemptFetchCoinsSaga);
}

export function* attemptFetchCoinsSaga() {
    try {
        yield put(appActions.setIsLoading(true));
        const apiOptions = yield select(getApiOptions);

        const coins = yield call(fetchCoins, { api: appHelpers.mapUIApiNameToMarketApiName(apiOptions.api) });
        yield put(dataActions.setCoins(coins));
    } catch(err) {
        console.log('*** bum, an error happened', { err });
    } finally {
        yield put(appActions.setIsLoading(false));
    }

}