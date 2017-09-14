import * as dataStoreKeys from '../../constants/store-keys/data-store-keys';
import moment from 'moment';

export default {
    [dataStoreKeys.FORM_VALUES]: {
        api: 'CoinBase',
        coin: 'Bitcoin',
        dateFormat: 'DD-MM-YY',
        timeFormat: 'h:mm:ss a',
        fromDate: moment().startOf('day').toISOString(),
        toDate: moment().endOf('day').toISOString()
    },
    [dataStoreKeys.HISTORIC_PRICES_SAMPLE]: ''
}