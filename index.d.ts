import { Reducer } from "redux";
import { PersistConfig } from "redux-persist/es/types";
import * as React from "react";

declare const hotelReducer: Reducer;
declare const hotelPersistConfig: PersistConfig;
declare const hotelSaga;
declare const SEARCH_ACTIONS;
declare class HotelList extends React.PureComponent<{}, {}> {}

declare interface IHotelItem {
  title: string,
}

declare interface IHotelState {
  is_loading: boolean,
  list: IHotelItem[],
}

declare module 'jtb.hotels' {}
