import { createReducer } from 'reduxsauce';
import * as ACTIONS from "$redux/hotel/actions";
import { HOTEL_ACTIONS } from "$redux/hotel/constants";
import storage from "redux-persist/lib/storage";
import { PersistConfig } from "redux-persist/es/types";

export interface IHotelItem {
  title: string,
}

export type IHotelState = Readonly<{
  is_loading: boolean,
  list: IHotelItem[],
}>;

type UnsafeReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
interface ActionHandler<T> {
  (state: IHotelState, payload: UnsafeReturnType<T>): IHotelState;
}

const setLoading: ActionHandler<typeof ACTIONS.hotelSetLoading> = (state, { is_loading }) => ({
  ...state,
  is_loading,
});

const setList: ActionHandler<typeof ACTIONS.hotelSetList> = (state, { list }) => ({
  ...state,
  list,
});

const HANDLERS = {
  [HOTEL_ACTIONS.SET_LOADING]: setLoading,
  [HOTEL_ACTIONS.SET_LIST]: setList,
};

const INITIAL_STATE: IHotelState = {
  is_loading: false,
  list: [],
};

export default createReducer(INITIAL_STATE, HANDLERS);
export const hotelPersistConfig: PersistConfig = {
  key: 'hotel',
  whitelist: [],
  storage,
};
