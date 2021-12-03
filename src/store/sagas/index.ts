import { all, call } from 'redux-saga/effects';
import SampleSaga from './sample';

export default function * sagas () {
  yield all([call(SampleSaga)]);
}
