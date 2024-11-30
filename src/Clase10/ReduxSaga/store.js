import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import userReducers from "./reducers";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(userReducers, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;