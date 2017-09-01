import * as R from 'ramda';

const useWithFlipped = R.compose(R.flip, R.useWith);

export default {
    useWithFlipped
}