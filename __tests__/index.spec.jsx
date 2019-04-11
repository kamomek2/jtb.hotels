import React from 'react';
import { shallow } from 'enzyme';

import { HotelList } from '../dist/containers/HotelList';
import { HotelListLoading } from '../dist/components/HotelListLoading';
import { HotelListItem } from '../dist/components/HotelListItem';

import hotelReducer, { INITIAL_STATE } from '../dist/redux/hotel/reducer';

describe('[Hotels]', () => {
  describe('[Mount] Checking components', () => {
    it('[HotelList] is rendering loader', () => {
      const wrapper = shallow(<HotelList
        query="string"
        list={[
          { title: '1' },
          { title: '2' },
        ]}
        is_loading
      />);

      expect(wrapper.find(HotelListLoading).length).toBe(1);
      expect(wrapper.find(HotelListItem).length).toBe(0);
    });

    it('[HotelList] is rendering list', () => {
      const wrapper = shallow(<HotelList
        query="string"
        list={[
          { title: '1' },
          { title: '2' },
        ]}
        is_loading={false}
      />);

      expect(wrapper.find(HotelListLoading).length).toBe(0);
      expect(wrapper.find(HotelListItem).length).toBe(2);
    });
  });

  describe('[Store] Data storage', () => {
    it('reducer exports hotel list', () => {
      const newState = hotelReducer(INITIAL_STATE);
      expect(newState.list).toEqual([]);
    });
  });
});
