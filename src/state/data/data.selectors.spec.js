import * as selectors from './data.selectors';
import * as dataStoreKeys from '../../constants/store-keys/data-store-keys';
import moment from 'moment';

describe('data selectors tests', () => {
    describe('getFirstXPrices()', () => {
        let mockPricesCSV;
        let mockState;

        beforeEach(() => {
            mockPricesCSV = `1503920460,1,2,3,4,5
                1503920401,11,12,13,14,15
                1503920402,21,22,23,24,25
                1503920403,31,32,33,34,35
                1503920404,41,42,43,44,45`;

            mockState = {
                [dataStoreKeys.DATA]: {
                    [dataStoreKeys.HISTORIC_PRICES_SAMPLE]: mockPricesCSV,
                    [dataStoreKeys.FORM_VALUES]: {
                        [dataStoreKeys.DATE_FORMAT]: 'DD-MM-YY',
                        [dataStoreKeys.TIME_FORMAT]: 'h:mm:ss a',
                        [dataStoreKeys.GRANULARITY]: 200
                    }
                }
            };
        });

        it('should return the first 2 prices', () => {
            const actual = selectors.getFirstXPrices(2)(mockState);

            const expected = [{
                close: 2,
                date: "28-08-17",
                high: 3,
                low: 4,
                open: 1,
                time: "12:41:00 pm",
                timestamp: 1503920460,
                volume: 5
            }, {
                close: 12,
                date: "28-08-17",
                high: 13,
                low: 14,
                open: 11,
                time: "12:40:01 pm",
                timestamp: 1503920401,
                volume: 15
            }];

            expect(actual).toEqual(expected);
        });

        it('should return the first 3 prices', () => {
            const actual = selectors.getFirstXPrices(3)(mockState);

            const expected = [{
                close: 2,
                date: '28-08-17',
                high: 3,
                low: 4,
                open: 1,
                time: '12:41:00 pm',
                timestamp: 1503920460,
                volume: 5
            }, {
                close: 12,
                date: '28-08-17',
                high: 13,
                low: 14,
                open: 11,
                time: '12:40:01 pm',
                timestamp: 1503920401,
                volume: 15
            }, {
                close: 22,
                date: '28-08-17',
                high: 23,
                low: 24,
                open: 21,
                time: '12:40:02 pm',
                timestamp: 1503920402,
                volume: 25
            }];

            expect(actual).toEqual(expected);
        });
    });

    describe('getLastXPrices()', () => {
        let mockPricesCSV;
        let mockState;

        beforeEach(() => {
            mockPricesCSV = `1503920460,1,2,3,4,5
                1503920401,11,12,13,14,15
                1503920402,21,22,23,24,25
                1503920403,31,32,33,34,35
                1503920404,41,42,43,44,45`;

            mockState = {
                [dataStoreKeys.DATA]: {
                    [dataStoreKeys.HISTORIC_PRICES_SAMPLE]: mockPricesCSV,
                    [dataStoreKeys.FORM_VALUES]: {
                        [dataStoreKeys.DATE_FORMAT]: 'DD-MM-YY',
                        [dataStoreKeys.TIME_FORMAT]: 'h:mm:ss a',
                        [dataStoreKeys.GRANULARITY]: 200
                    }
                }
            };
        });

        it('should return the last 2 prices', () => {
            const actual = selectors.getLastXPrices(2)(mockState);

            const expected = [{
                close: 32,
                date: '28-08-17',
                high: 33,
                low: 34,
                open: 31,
                time: '12:40:03 pm',
                timestamp: 1503920403,
                volume: 35
            }, {
                close: 42,
                date: '28-08-17',
                high: 43,
                low: 44,
                open: 41,
                time: '12:40:04 pm',
                timestamp: 1503920404,
                volume: 45
            }];

            expect(actual).toEqual(expected);
        });

        it('should return the last 3 prices', () => {
            const actual = selectors.getLastXPrices(3)(mockState);

            const expected = [{
                close: 22,
                date: '28-08-17',
                high: 23,
                low: 24,
                open: 21,
                time: '12:40:02 pm',
                timestamp: 1503920402,
                volume: 25
            }, {
                close: 32,
                date: '28-08-17',
                high: 33,
                low: 34,
                open: 31,
                time: '12:40:03 pm',
                timestamp: 1503920403,
                volume: 35
            }, {
                close: 42,
                date: '28-08-17',
                high: 43,
                low: 44,
                open: 41,
                time: '12:40:04 pm',
                timestamp: 1503920404,
                volume: 45
            }];

            expect(actual).toEqual(expected);
        });
    });

    describe('getHistoricPricesSample()', () => {
        let mockPricesCSV;
        let mockState;

        beforeEach(() => {
            mockPricesCSV = `1503920460,1,2,3,4,5
                1503920400,11,12,13,14,15`;

            mockState = {
                [dataStoreKeys.DATA]: {
                    [dataStoreKeys.HISTORIC_PRICES_SAMPLE]: mockPricesCSV,
                    [dataStoreKeys.FORM_VALUES]: {
                        [dataStoreKeys.DATE_FORMAT]: 'DD-MM-YY',
                        [dataStoreKeys.TIME_FORMAT]: 'h:mm:ss a',
                        [dataStoreKeys.GRANULARITY]: 200
                    }
                }
            };
        });


        it('should convert the historic prices csv string into an array of objects', () => {
            const actual = selectors.getHistoricPricesSample(mockState);

            expect(Array.isArray(actual)).toEqual(true);
            expect(typeof actual[0] === 'object').toEqual(true);
        });

        it('should add property names to the raw data', () => {
            const actual = selectors.getHistoricPricesSample(mockState);

            const expected = [{
                close: 2,
                high: 3,
                low: 4,
                open: 1,
                timestamp: 1503920460,
                volume: 5
            }, {
                close: 12,
                high: 13,
                low: 14,
                open: 11,
                timestamp: 1503920400,
                volume: 15
            }];

            expect(actual).toEqual(expected);
        })
    });

    describe('getReadableHistoricPrices()', () => {
        let mockPricesCSV;
        let mockState;

        beforeEach(() => {
            mockPricesCSV = `1503920460,1,2,3,4,5
                1503920400,11,12,13,14,15`;

            mockState = {
                [dataStoreKeys.DATA]: {
                    [dataStoreKeys.HISTORIC_PRICES_SAMPLE]: mockPricesCSV,
                    [dataStoreKeys.FORM_VALUES]: {
                        [dataStoreKeys.DATE_FORMAT]: 'DD-MM-YY',
                        [dataStoreKeys.TIME_FORMAT]: 'h:mm:ss a',
                        [dataStoreKeys.GRANULARITY]: 200
                    }
                }
            };
        });


        it('should add readableDates to each price object', () => {
            // ARRANGE
            const readableDate1 = moment(1503920460 * 1000).format('DD-MMM-YY');
            const readableTime1 = moment(1503920460 * 1000).format('h:mm:ss a');

            const readableDate2 = moment(1503920400 * 1000).format('DD-MMM-YY');
            const readableTime2 = moment(1503920400 * 1000).format('h:mm:ss a');

            const actual = selectors.getReadableHistoricPrices(mockState);

            const expected = [{
                close: 2,
                date: '28-08-17',
                high: 3,
                low: 4,
                open: 1,
                time: '12:41:00 pm',
                timestamp: 1503920460,
                volume: 5
            }, {
                close: 12,
                date: '28-08-17',
                high: 13,
                low: 14,
                open: 11,
                time: '12:40:00 pm',
                timestamp: 1503920400,
                volume: 15
            }];

            expect(actual).toEqual(expected);
        });
    });

    describe('getDateFromPrice()', () => {
        it('should get the date from the price object', () => {
            expect(selectors.getDateFromPrice({[dataStoreKeys.TIMESTAMP]: 10})).toEqual(10000);
        });
    });

    describe('calculateGranularity()', () => {
        it('should return 1 when from and to are 200 seconds apart', () => {
            const to = moment();
            const from = moment(to).subtract(200, 'seconds');

            expect(selectors.calculateGranularity(from.valueOf(), to.valueOf())).toEqual(1);
        });

        it('should return 54 when from and to are 3 hours apart', () => {
            const to = moment();
            const from = moment(to).subtract(3, 'hours');

            expect(selectors.calculateGranularity(from.valueOf(), to.valueOf())).toEqual(54);
        });

        it('should return 432 when from and to are 1 day apart', () => {
            const to = moment();
            const from = moment(to).subtract(1, 'days');

            expect(selectors.calculateGranularity(from.valueOf(), to.valueOf())).toEqual(432);
        });
    });

    describe('getGranularityFromFormValues()', () => {
        it('should return 1 when from and to are 200 seconds apart', () => {
            // ARRANGE
            const to = moment();
            const from = moment(to).subtract(200, 'seconds');

            const formValues = {
                [dataStoreKeys.FROM_DATE]: from.valueOf(),
                [dataStoreKeys.TO_DATE]: to.valueOf()
            };

            // ASSERT
            expect(selectors.getGranularityFromFormValues(formValues)).toEqual(1);
        });

        it('should return 54 when from and to are 3 hours apart', () => {
            // ARRANGE
            const to = moment();
            const from = moment(to).subtract(3, 'hours');

            const formValues = {
                [dataStoreKeys.FROM_DATE]: from.valueOf(),
                [dataStoreKeys.TO_DATE]: to.valueOf()
            };

            // ASSERT
            expect(selectors.getGranularityFromFormValues(formValues)).toEqual(54);
        });

        it('should return 432 when from and to are 1 day apart', () => {
            // ARRANGE
            const to = moment();
            const from = moment(to).subtract(1, 'days');

            const formValues = {
                [dataStoreKeys.FROM_DATE]: from.valueOf(),
                [dataStoreKeys.TO_DATE]: to.valueOf()
            };

            // ASSERT
            expect(selectors.getGranularityFromFormValues(formValues)).toEqual(432);
        });
    })
});