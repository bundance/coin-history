import * as R from 'ramda';

const asObj = R.curry((key, fn) => R.compose(R.objOf(key), fn));
const useWithFlipped = R.compose(R.flip, R.useWith);


export default {
    asObj,
    useWithFlipped
}