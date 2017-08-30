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
                    [dataStoreKeys.HISTORIC_PRICES_SAMPLE]: mockPricesCSV
                }
            };
        });

        it('should return the first 2 prices', () => {
            const actual = selectors.getFirstXPrices(2, mockState);

            const expected = [{
                date: 1503920460,
                readableDate: "28-Aug-17",
                readableTime: "12:41:00 pm",
                open: 1,
                close: 2,
                high: 3,
                low: 4,
                volume: 5
            }, {
                date: 1503920401,
                readableDate: "28-Aug-17",
                readableTime: "12:40:01 pm",
                open: 11,
                close: 12,
                high: 13,
                low: 14,
                volume: 15
            }];

            expect(actual).toEqual(expected);
        });

        it('should return the first 3 prices', () => {
            const actual = selectors.getFirstXPrices(3, mockState);

            const expected = [{
                date: 1503920460,
                readableDate: "28-Aug-17",
                readableTime: "12:41:00 pm",
                open: 1,
                close: 2,
                high: 3,
                low: 4,
                volume: 5
            }, {
                date: 1503920401,
                readableDate: "28-Aug-17",
                readableTime: "12:40:01 pm",
                open: 11,
                close: 12,
                high: 13,
                low: 14,
                volume: 15
            }, {
                date: 1503920402,
                readableDate: "28-Aug-17",
                readableTime: "12:40:02 pm",
                open: 21,
                close: 22,
                high: 23,
                low: 24,
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
                    [dataStoreKeys.HISTORIC_PRICES_SAMPLE]: mockPricesCSV
                }
            };
        });

        it('should return the last 2 prices', () => {
            const actual = selectors.getLastXPrices(2, mockState);

            const expected = [{
                date: 1503920403,
                readableDate: "28-Aug-17",
                readableTime: "12:40:03 pm",
                open: 31,
                close: 32,
                high: 33,
                low: 34,
                volume: 35
            }, {
                date: 1503920404,
                readableDate: "28-Aug-17",
                readableTime: "12:40:04 pm",
                open: 41,
                close: 42,
                high: 43,
                low: 44,
                volume: 45
            }];

            expect(actual).toEqual(expected);
        });

        it('should return the last 3 prices', () => {
            const actual = selectors.getLastXPrices(3, mockState);

            const expected = [{
                date: 1503920402,
                readableDate: "28-Aug-17",
                readableTime: "12:40:02 pm",
                open: 21,
                close: 22,
                high: 23,
                low: 24,
                volume: 25
            }, {
                date: 1503920403,
                readableDate: "28-Aug-17",
                readableTime: "12:40:03 pm",
                open: 31,
                close: 32,
                high: 33,
                low: 34,
                volume: 35
            }, {
                date: 1503920404,
                readableDate: "28-Aug-17",
                readableTime: "12:40:04 pm",
                open: 41,
                close: 42,
                high: 43,
                low: 44,
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
                    [dataStoreKeys.HISTORIC_PRICES_SAMPLE]: mockPricesCSV
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
                date: 1503920460,
                open: 1,
                close: 2,
                high: 3,
                low: 4,
                volume: 5
            }, {
                date: 1503920400,
                open: 11,
                close: 12,
                high: 13,
                low: 14,
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
                    [dataStoreKeys.HISTORIC_PRICES_SAMPLE]: mockPricesCSV
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
                readableDate: readableDate1,
                readableTime: readableTime1,
                date: 1503920460,
                open: 1,
                close: 2,
                high: 3,
                low: 4,
                volume: 5
            }, {
                readableDate: readableDate2,
                readableTime: readableTime2,
                date: 1503920400,
                open: 11,
                close: 12,
                high: 13,
                low: 14,
                volume: 15
            }];

            expect(actual).toEqual(expected);
        });
    })
});