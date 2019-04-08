import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';
import { delay } from 'redux-saga';
import { FLIGHT_ACTIONS } from "./constants";
import { SEARCH_ACTIONS, searchDispatchSearchQuery } from 'jtb.search';
import { fakeFetchFlights } from "../../utils/fakeApi";
import { flightSetList, flightSetLoading } from "./actions";
// Worker Saga for SET_EDITOR_LOCATION_INPUT reducer
/*
function* fetchSuggestions({ payload }) {
  const { value } = payload;

  yield delay(300);
  try {
    const results = yield call(someFunction, arguments);
    yield put({ type: TYPES.ANOTHER_ACTION, payload: { results } });
  } catch (e) {
    yield put({ type: TYPES.ANOTHER_ACTION, payload: { results } });
  }
}
*/

function* performSearchSaga(
  { query, arrival_date, departure_date }:
  ReturnType<typeof searchDispatchSearchQuery>
) {
  console.log('starting flights fetch');
  yield put(flightSetLoading(true));
  const list = yield call(fakeFetchFlights, { query, arrival_date, departure_date });

  console.log('list is', list);

  yield put(flightSetList(list));
  yield put(flightSetLoading(false));
}

function* mySaga() {
  yield takeLatest(SEARCH_ACTIONS.DISPATCH_SEARCH_QUERY, performSearchSaga)
  //yield takeLatest(TYPES.ACTION, function);
}

export default mySaga;
