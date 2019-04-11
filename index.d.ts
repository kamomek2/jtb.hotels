import { Reducer } from "redux";
import { PersistConfig } from "redux-persist/es/types";
import * as React from "react";
import * as Types from "./src/types";

declare const hotelReducer: Reducer;
declare const hotelPersistConfig: PersistConfig;
declare const hotelSaga;
declare const SEARCH_ACTIONS;
declare class HotelList extends React.PureComponent<{}, {}> {}

declare type IHotelItem = Types.IHotelItem;
declare type IHotelState = Types.IHotelState;

declare module 'jtb.hotels' {}
declare const HOTEL_INITIAL_STATE: IHotelState;
