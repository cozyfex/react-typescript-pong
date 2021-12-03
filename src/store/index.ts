import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import { History } from 'history';
import createSagaMiddleware from 'redux-saga';
import reducers from './reducers';
import sagas from './sagas';

export default function configureStore (customHistory?: History) {
  const sagaMiddleware = createSagaMiddleware({
    context: {
      history: customHistory,
    },
  });

  let middlewares: any[] = [sagaMiddleware];
  if (process.env.REACT_APP_ENV === 'development') {
    middlewares.push(logger);
  }

  const store = createStore(
    reducers,
    composeWithDevTools(
      applyMiddleware(...middlewares),
    ),
  );

  sagaMiddleware.run(sagas);

  return store;
}
