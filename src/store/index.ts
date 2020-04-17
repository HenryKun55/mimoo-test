import { createStore, applyMiddleware, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'

import { AuthState } from '../store/ducks/auth/types'
import { ProductState } from '../store/ducks/products/types'

import reducers from './ducks'
import rootSaga from './ducks/rootSaga'

const sagaMiddleware = createSagaMiddleware()

const store: Store<ApplicationState> = createStore(
  reducers,
  applyMiddleware(sagaMiddleware),
)

sagaMiddleware.run(rootSaga)

export interface ApplicationState {
  auth: AuthState,
  products: ProductState,
}

export default store
