import { createStore, applyMiddleware, Store } from 'redux';
import { RepositoriesState } from './ducks/repositories/types';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './ducks/rootSaga';

import rootReducer from './ducks/rootReducer';

export interface ApplicationState {
  repositories: RepositoriesState;
}

const sagaMiddleware = createSagaMiddleware();

const store: Store<ApplicationState> = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
