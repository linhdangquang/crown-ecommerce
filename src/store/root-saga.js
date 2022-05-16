import { all, call } from 'redux-saga/effects';
import { categoriesSaga } from './categories/categories.saga';

export default function* rootSaga() {
  yield all([call(categoriesSaga)]);
}
  