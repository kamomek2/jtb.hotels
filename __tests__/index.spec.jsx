import React from 'react';
import { mount } from 'enzyme';

import { Provider } from 'react-redux';
import { configureTestStore } from './redux/store';
import { HotelListLoading } from '../dist/components/HotelListLoading';
import { HotelList } from '../dist/index';
//
// describe('Checking exports', () => {
//   const { store } = configureTestStore();
//
//   const wrapper = mount(<Provider store={store}>
//     <HotelList />
//   </Provider>);
//
//   it('renders when store is ready', () => {
//     expect(wrapper.find(HotelListLoading).length).toBe(1);
//   });
//
//   it('renders when store is ready', () => {
//     expect(wrapper).toBe(1);
//   });
// });
