import { FLIGHT_ACTIONS } from "./constants";
import { IFlightState } from "./reducer";

// export const someAction = () => ({ type: USER_ACTIONS.SOME_ACTION });
export const flightSetLoading = (is_loading: IFlightState['is_loading']) => ({
  type: FLIGHT_ACTIONS.SET_LOADING, is_loading,
});

export const flightSetList= (list: IFlightState['list']) => ({
  type: FLIGHT_ACTIONS.SET_LIST, list,
});
