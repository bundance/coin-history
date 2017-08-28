import * as selectors from './data.selectors';
import * as dataStoreKeys from '../../constants/store-keys/data-store-keys';

describe('data selectors tests', () => {
    describe('getHistoricPricesSample()', () => {
        const mockPricesCSV = `1503920460,4319.98,4319.98,4319.98,4319.98,0.0000046\\n
        1503920400,4318.24,4319.98,4319.98,4319.98,1.4392226700000001\\n
        1503920340,4318.24,4319.98,4319.98,4319.98,0.4933771500000001\\n
        1503920280,4318.67,4319.99,4318.67,4319.98,8.34976003\\n
        1503920220,4318.64,4318.67,4318.66,4318.67,0.9104138000000002\\n
        1503920160,4317,4318.68,4317,4318.67,1.0130253599999999\\n
        1503920100,4316.99,4318.6,4318.59,4317,0.67826558\\n
        1503920040,4316.99,4318.63,4316.99,4318.6,6.217752910000001\\n
        1503919980,4315.32,4316.99,4316.99,4316.99,1.4957775599999998\\n
        1503919920,4316.98,4316.99,4316.99,4316.99,1.4317222199999995`;

        const mockState = {
            [dataStoreKeys.DATA]: {
                [dataStoreKeys.HISTORIC_PRICES_SAMPLE]: mockPricesCSV
            }
        };

        it('should convert the historic prices csv string into an array of objects', () => {
            const actual = selectors.getHistoricPricesSample(mockState);

            expect(Array.isArray(actual)).toEqual(true);
            expect(typeof actual[0] === 'Object').toEqual(true);
        });
    });
});