"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const effects_1 = require("redux-saga/effects");
const fakeApi_1 = require("../../utils/fakeApi");
const actions_1 = require("./actions");
const constants_1 = require("./constants");
function* performSearchSaga({ query, arrival_date, departure_date }) {
    yield effects_1.put(actions_1.hotelSetLoading(true));
    const list = yield effects_1.call(fakeApi_1.fakeFetchHotels, { query, arrival_date, departure_date });
    yield effects_1.put(actions_1.hotelSetList(list));
    yield effects_1.put(actions_1.hotelSetLoading(false));
}
function* mySaga() {
    yield effects_1.takeLatest(constants_1.GLOBAL_ACTIONS.SEARCH_DISPATCH_SEARCH_QUERY, performSearchSaga);
}
exports.default = mySaga;
//# sourceMappingURL=sagas.js.map