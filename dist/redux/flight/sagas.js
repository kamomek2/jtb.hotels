"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
const jtb_search_1 = require("jtb.search");
const fakeApi_1 = require("../../utils/fakeApi");
const actions_1 = require("./actions");
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
function* performSearchSaga({ query, arrival_date, departure_date }) {
    console.log('starting flights fetch');
    yield effects_1.put(actions_1.flightSetLoading(true));
    const list = yield effects_1.call(fakeApi_1.fakeFetchFlights, { query, arrival_date, departure_date });
    console.log('list is', list);
    yield effects_1.put(actions_1.flightSetList(list));
    yield effects_1.put(actions_1.flightSetLoading(false));
}
function* mySaga() {
    yield effects_1.takeLatest(jtb_search_1.SEARCH_ACTIONS.DISPATCH_SEARCH_QUERY, performSearchSaga);
    //yield takeLatest(TYPES.ACTION, function);
}
exports.default = mySaga;
//# sourceMappingURL=sagas.js.map