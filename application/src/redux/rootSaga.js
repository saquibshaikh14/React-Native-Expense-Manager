// src/sagas/rootSaga.js
import {all} from 'redux-saga/effects';
import * as allSagas from './sagas';

function* rootSaga() {
  yield all(Object.values(allSagas).map(saga => saga()));
}

export default rootSaga;
