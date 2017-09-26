import * as R from 'ramda';
import * as appKeys from '../../constants/store-keys/app-store-keys';

export const isLoading = R.path(['app', appKeys.IS_LOADING]);
