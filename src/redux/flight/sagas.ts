import { call, put, takeLatest } from 'redux-saga/effects';
import { fakeFetchFlights } from "../../utils/fakeApi";
import { flightSetList, flightSetLoading, searchDispatchQueryAction } from "./actions";
import { GLOBAL_ACTIONS } from "./constants";
import { SagaIterator } from "redux-saga";

function* performSearchSaga(
  { query, arrival_date, departure_date }: searchDispatchQueryAction
): SagaIterator {
  yield put(flightSetLoading(true));
  const list = yield call(fakeFetchFlights, { query, arrival_date, departure_date });

  yield put(flightSetList(list));
  yield put(flightSetLoading(false));
}

function* mySaga() {
  yield takeLatest(GLOBAL_ACTIONS.SEARCH_DISPATCH_SEARCH_QUERY, performSearchSaga);
}

export default mySaga;
