import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { connectRouter, RouterState, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';

import hotelReducer, { hotelPersistConfig } from '$redux/hotel/reducer';
import hotelSaga from '$redux/hotel/sagas';

import { searchReducer, searchSaga, searchPersistConfig, ISearchState } from 'jtb.search';
import { flightReducer, flightSaga, flightPersistConfig, IFlightState } from 'jtb.flights';

export const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory();

const composeEnhancers = compose;

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

export function configureTestStore() {
  sagaMiddleware.run(searchSaga);
  sagaMiddleware.run(hotelSaga);
  sagaMiddleware.run(flightSaga);

  const persistor = persistStore(store);

  return { store, persistor };
}

