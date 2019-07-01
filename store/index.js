/*
  스토어
*/
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
// import penderMiddleware from "redux-pender";
import createSagaMiddleware from "redux-saga"; // redux-saga 임포트

// import * as modules from "./modules";
// import * as modules from "./reducers";
import rootSaga from "../sagas";
import reducers from "../reducers";

// const reducers = combineReducers(modules); //모듈 합치기
const sagaMiddleware = createSagaMiddleware(); // saga 미들웨어 생성
// const middlewares = [penderMiddleware(), sagaMiddleware()];
// console.log("****_____, ", sagaMiddleware);

// const configure = preloadedState =>
//   createStore(
//     reducers,
//     preloadedState,
//     compose(applyMiddleware(sagaMiddleware))
//     // compose(applyMiddleware(...middlewares))
//   );
const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware) // redux-store 미들웨어 등록
);
sagaMiddleware.run(rootSaga); // saga 실행

// const store = configure();

export default store;
