import { createReducer } from 'reduxsauce';
import * as ACTIONS from "./actions";
import { USER_ACTIONS } from "./constants";
import storage from "redux-persist/lib/storage";
import { PersistConfig } from "redux-persist/es/types";

export type IRootState = Readonly<{
  // key: string
}>;

type UnsafeReturnType<T> = T extends (...args: any[]) => infer R ? R : any;
interface ActionHandler<T> {
  (state: IRootState, payload: UnsafeReturnType<T>): IRootState;
}

const someActionHandler: ActionHandler<typeof ACTIONS.someAction> = (state) => {
  return { ...state };
};

const HANDLERS = {
  [USER_ACTIONS.SOME_ACTION]: someActionHandler,
};

const INITIAL_STATE: IRootState = {
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
