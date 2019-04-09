import { HOTEL_ACTIONS } from "./constants";
import { IHotelState } from "./reducer";

export const hotelSetLoading = (is_loading: IHotelState['is_loading']) => ({
  type: HOTEL_ACTIONS.SET_LOADING, is_loading,
});

export const hotelSetList= (list: IHotelState['list']) => ({
  type: HOTEL_ACTIONS.SET_LIST, list,
});

export type searchDispatchQueryAction = {
  type: string, query: string, arrival_date: string, departure_date: string
};
