import { Reducer } from "redux";
import { PersistConfig } from "redux-persist/es/types";
import * as React from "react";
import * as hotelActions from './src/redux/hotel/actions';

declare const hotelReducer: Reducer;
declare const hotelPersistConfig: PersistConfig;
declare const hotelSaga;
declare const SEARCH_ACTIONS;
declare class HotelList extends React.PureComponent<{}, {}> {}

declare const hotelSetLoading: typeof hotelActions.hotelSetLoading;
declare const hotelSetList: typeof hotelActions.hotelSetList;

declare interface IHotelState {}

declare module 'jtb.hotels' {}
