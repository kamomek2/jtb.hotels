"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FAKE_HOTEL_LIST = [
    { title: 'First hotel from fake api' },
    { title: 'Second hotel from fake api' },
    { title: 'Third hotel from fake api' },
];
exports.fakeFetchHotels = ({ query, arrival_date, departure_date }) => (new Promise(resolve => setTimeout(() => resolve(exports.FAKE_HOTEL_LIST), 1500)));
//# sourceMappingURL=fakeApi.js.map