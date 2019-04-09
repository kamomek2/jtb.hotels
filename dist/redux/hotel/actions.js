"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const constants_1 = require("./constants");
exports.hotelSetLoading = (is_loading) => ({
    type: constants_1.HOTEL_ACTIONS.SET_LOADING, is_loading,
});
exports.hotelSetList = (list) => ({
    type: constants_1.HOTEL_ACTIONS.SET_LIST, list,
});
//# sourceMappingURL=actions.js.map