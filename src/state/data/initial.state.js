import * as dataStoreKeys from '../../constants/store-keys/data-store-keys';
import moment from 'moment';

export default {
    [dataStoreKeys.FORM_VALUES]: {
        api: 'Poloniex',
        coin: 'Bitcoin',
        granularity: 1,
        dateFormat: 'ddmmyy',
        fromDate: moment().startOf('day').format(),
        toDate: moment().endOf('day').format()
    },
    [dataStoreKeys.HISTORIC_PRICES_SAMPLE]: ''
}