import { Reducer } from "redux";
import { PersistConfig } from "redux-persist/es/types";
import * as React from "react";
import * as flightActions from './src/redux/hotel/actions';

declare const flightReducer: Reducer;
declare const flightPersistConfig: PersistConfig;
declare const flightSaga;
declare const SEARCH_ACTIONS;
declare class FlightList extends React.PureComponent<{}, {}> {}

declare const flightSetLoading: typeof flightActions.flightSetLoading;
declare const flightSetList: typeof flightActions.flightSetList;

declare module 'jtb.hotels' {}

