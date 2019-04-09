import { call, put, takeLatest } from 'redux-saga/effects';
import { fakeFetchHotels } from "../../utils/fakeApi";
import { hotelSetList, hotelSetLoading, searchDispatchQueryAction } from "./actions";
import { GLOBAL_ACTIONS } from "./constants";
import { SagaIterator } from "redux-saga";

function* performSearchSaga(
  { query, arrival_date, departure_date }: searchDispatchQueryAction
): SagaIterator {
  yield put(hotelSetLoading(true));
  const list = yield call(fakeFetchHotels, { query, arrival_date, departure_date });

  yield put(hotelSetList(list));
  yield put(hotelSetLoading(false));
}

function* mySaga() {
  yield takeLatest(GLOBAL_ACTIONS.SEARCH_DISPATCH_SEARCH_QUERY, performSearchSaga);
}

export default mySaga;
