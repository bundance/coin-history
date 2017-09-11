import * as R from 'ramda';
import moment from 'moment';
import { endpoints, endpointNames } from '../../constants/endpoints/endpoints';
import trace from '../../dev/trace';

const getEndpoint = (endpoint, api) => {
    const marketApi = R.path([endpoint, api], endpoints);

    return coin => marketApi(coin);
};

export const fetchHistoricalPrices = (api, coin) => {
    const endpoint = R.apply(getEndpoint(endpointNames.HISTORICAL_PRICES_ENDPOINT, api), [coin]);

    // blobby - calcualte this
    const query = {
        granularity: 200
    };

    // const startTime = '2017-07-08T18:00:00.000Z';
    // const endTime = '2017-07-08T21:00:00.000Z';

    const startTime = '2017-07-08T19:00:00.000Z';//moment("2017-07-08T18:00:00.000Z", moment.ISO_8601).format();
    const endTime = moment(startTime).add(3, 'hours').toISOString();

    //'2017-07-08T22:00:00.000Z';//

    // const startTime = '2016-12-21T00:00:00.000Z;'//moment(endTime).subtract(3, 'hours').format();
    // const endTime = '2016-12-21T03:20:00.000Z'; //moment("2017-07-09T00:00:00", moment.ISO_8601).format();


    // Working:
    // const startTime = '2016-12-21T00:00:00.000Z';
    // const endTime =  '2016-12-21T03:20:00.000Z';
    const granularity = 432;
    const args = { 'start':startTime, 'end':endTime, 'granularity':granularity};

    const qs = R.compose(
        R.reduce((acc, value) => `${ acc }&${ value[0] }=${ value[1] }` , '?'),
        R.toPairs
    )(args);

    //start=2015-09-09T04:00:00.000Z&end=2015-09-09T21:00:00.000Z&granularity=432'

    return fetch(endpoint + qs)
        .then(response => response.json());
};

// const workingQS = 'start=2015-09-09T04:00:00.000Z&end=2015-09-09T21:00:00.000Z&granularity=432'