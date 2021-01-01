import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootReducer from "./rootReducer";
import rootSaga from './sagas';
import { composeWithDevTools } from "redux-devtools-extension";

const sagaMiddleware = createSagaMiddleware();

const middlewareConfig = process.env.NODE_ENV === "production" ? 
            applyMiddleware(sagaMiddleware) : composeWithDevTools(applyMiddleware(sagaMiddleware))


const configureStore = () => {
  const store = createStore(rootReducer, middlewareConfig);
  sagaMiddleware.run(rootSaga);
  return store
}

// export default configureStore;

const store = configureStore();

export default store;