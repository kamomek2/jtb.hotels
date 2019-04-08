"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reduxsauce_1 = require("reduxsauce");
const constants_1 = require("./constants");
const storage_1 = require("redux-persist/lib/storage");
const setLoading = (state, { is_loading }) => (Object.assign({}, state, { is_loading }));
const setList = (state, { list }) => (Object.assign({}, state, { list }));
const HANDLERS = {
    [constants_1.FLIGHT_ACTIONS.SET_LOADING]: setLoading,
    [constants_1.FLIGHT_ACTIONS.SET_LIST]: setList,
};
const INITIAL_STATE = {
    is_loading: false,
    list: [],
};
exports.default = reduxsauce_1.createReducer(INITIAL_STATE, HANDLERS);
exports.flightPersistConfig = {
    key: 'user',
    whitelist: [],
    storage: storage_1.default,
};
//# sourceMappingURL=reducer.js.map