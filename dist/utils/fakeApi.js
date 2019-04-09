"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FAKE_FLIGHT_LIST = [
    { title: 'First flight from fake api' },
    { title: 'Second flight from fake api' },
    { title: 'Third flight from fake api' },
];
exports.fakeFetchHotels = ({ query, arrival_date, departure_date }) => (new Promise(resolve => setTimeout(() => resolve(exports.FAKE_FLIGHT_LIST), 1000)));
//# sourceMappingURL=fakeApi.js.map