"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reduxsauce_1 = require("reduxsauce");
const constants_1 = require("./constants");
const storage_1 = require("redux-persist/lib/storage");
const setLoading = (state, { is_loading }) => (Object.assign({}, state, { is_loading }));
const setList = (state, { list }) => (Object.assign({}, state, { list }));
const HANDLERS = {
    [constants_1.HOTEL_ACTIONS.SET_LOADING]: setLoading,
    [constants_1.HOTEL_ACTIONS.SET_LIST]: setList,
};
exports.INITIAL_STATE = {
    is_loading: false,
    list: [],
};
exports.default = reduxsauce_1.createReducer(exports.INITIAL_STATE, HANDLERS);
exports.hotelPersistConfig = {
    key: 'hotel',
    whitelist: [],
    storage: storage_1.default,
};
//# sourceMappingURL=reducer.js.map