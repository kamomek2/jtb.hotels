import { createStore, applyMiddleware, combineReducers, compose, Store } from 'redux';

import { persistStore, persistReducer } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history';
import { Persistor } from "redux-persist/es/types";
import { routerMiddleware } from 'connected-react-router'

import flightReducer, { flightPersistConfig } from './flight/reducer';
import flightSaga from './flight/sagas';

import { searchReducer, searchSaga, searchPersistConfig } from 'jtb.search';

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
    search: persistReducer(searchPersistConfig, searchReducer),
    router: connectRouter(history),
  }),
  composeEnhancers(applyMiddleware(
    routerMiddleware(history),
    sagaMiddleware
  ))
);

export function configureStore(): { store: Store<any>, persistor: Persistor } {
  sagaMiddleware.run(flightSaga);
  sagaMiddleware.run(searchSaga);

  const persistor = persistStore(store);

  return { store, persistor };
}
