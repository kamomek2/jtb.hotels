import { createReducer } from 'reduxsauce';
import * as ACTIONS from "./actions";
import { FLIGHT_ACTIONS } from "./constants";
import storage from "redux-persist/lib/storage";
import { PersistConfig } from "redux-persist/es/types";

export type IFlightState = Readonly<{
  // key: string
}>;

type UnsafeReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
interface ActionHandler<T> {
  (state: IFlightState, payload: UnsafeReturnType<T>): IFlightState;
}
//
// const someActionHandler: ActionHandler<typeof ACTIONS.someAction> = (state) => {
//   return { ...state };
// };

const HANDLERS = {
  // [FLIGHT_ACTIONS.SOME_ACTION]: someActionHandler,
};

const INITIAL_STATE: IFlightState = {
  // key: val,
  // key: val,
  // key: val
};

export default createReducer(INITIAL_STATE, HANDLERS);
export const flightPersistConfig: PersistConfig = {
  key: 'user',
  whitelist: [],
  storage,
};
