import * as dataStoreKeys from '../../constants/store-keys/data-store-keys';
import moment from 'moment';

export default {
    [dataStoreKeys.FORM_VALUES]: {
        [dataStoreKeys.API]: 'CoinBase',
        [dataStoreKeys.SELECTED_COIN]: 'BTC-USD',
        [dataStoreKeys.COINS]: [],
        [dataStoreKeys.DATE_FORMAT]: 'DD-MM-YY',
        [dataStoreKeys.TIME_FORMAT]: 'h:mm:ss a',
        [dataStoreKeys.FROM_DATE]: moment().startOf('day').toISOString(),
        [dataStoreKeys.TO_DATE]: moment().endOf('day').toISOString()
    },
    [dataStoreKeys.HISTORIC_PRICES_SAMPLE]: '',
    [dataStoreKeys.COINS]: [],
}