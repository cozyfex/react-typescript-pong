import { all, call, fork, put, takeLatest } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';
import { sampleFailureAction, sampleSuccessAction } from '../actions/sample';
import { SampleActionTypes } from '../interfaces/sample/sample.actions.interfaces';
import { TvShowContentInterface } from '../interfaces/sample/sample.interfaces';

function loadSampleAPI (data: string) {
  return axios.get(`https://api.tvmaze.com/search/shows?q=${data}`);
}

function * loadSample (action: any) {
  try {
    const result: AxiosResponse<TvShowContentInterface[]> = yield call(
      loadSampleAPI,
      action.data,
    );
    yield put(sampleSuccessAction(result.data));
  } catch (e: any) {
    console.error(e);
    yield put(sampleFailureAction(e.message));
  }
}

function * watchLoadSample () {
  yield takeLatest(SampleActionTypes.REQUEST, loadSample);
}

export default function * SampleSaga () {
  yield all([fork(watchLoadSample)]);
}
