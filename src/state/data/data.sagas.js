import { call, put, select, takeLatest } from 'redux-saga/effects';
import moment from 'moment';
import * as dataTypes from '../../constants/action-types/data.types';
import * as dataActions from './data.actions';
import * as appActions from '../app/app.actions';
import { fetchHistoricalPrices } from '../../api/gdax/fetch-historical-prices.api';
import { getFormValues } from './data.selectors';
import appHelpers from '../../helpers/app.helpers';


export function* watchDownloadData() {
    yield takeLatest(dataTypes.FETCH_DATA, attemptFetchDataSaga);
}

export function* attemptFetchDataSaga(action) {
    try {
        const formValues = yield select(getFormValues);
        yield put(appActions.setIsLoading(true));

        const prices = yield call(
            fetchHistoricalPrices, {
                api: appHelpers.mapUIApiNameToMarketApiName(formValues.api),
                coin: appHelpers.getFormattedCoin(formValues.coin),
                granularity: formValues.granularity,
                start: moment(formValues.fromDate).toISOString(),
                end: moment(formValues.toDate).toISOString()
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

