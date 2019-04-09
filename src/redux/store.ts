import { createStore, applyMiddleware, combineReducers, compose, Store } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, RouterState } from 'connected-react-router'
import { createBrowserHistory } from 'history';
import { Persistor } from "redux-persist/es/types";
import { routerMiddleware } from 'connected-react-router'

import hotelReducer, { hotelPersistConfig, IHotelState } from '$redux/hotel/reducer';
import hotelSaga from '$redux/hotel/sagas';

import { searchReducer, searchSaga, searchPersistConfig, ISearchState } from 'jtb.search';
import { flightReducer, flightSaga, flightPersistConfig, IFlightState } from 'jtb.flights';

export const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

const composeEnhancers =
  typeof window === 'object' &&
  (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? (<any>window).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

export const store = createStore(
  combineReducers({
    flight: persistReducer(flightPersistConfig, flightReducer),
    hotel: persistReducer(hotelPersistConfig, hotelReducer),
    search: persistReducer(searchPersistConfig, searchReducer),
    router: connectRouter(history),
  }),
  composeEnhancers(applyMiddleware(
    routerMiddleware(history),
    sagaMiddleware
  ))
);

export function configureStore(): { store: Store<any>, persistor: Persistor } {
  sagaMiddleware.run(searchSaga);
  sagaMiddleware.run(hotelSaga);
  sagaMiddleware.run(flightSaga);

  const persistor = persistStore(store);

  return { store, persistor };
}

export interface IStore {
  search: ISearchState,
  hotel: IHotelState,
  flight: IFlightState,
  router: RouterState,
}
