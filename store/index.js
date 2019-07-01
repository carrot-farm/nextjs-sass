/*
  스토어
*/
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga"; // redux-saga 임포트
import { createLogger } from "redux-logger";
import { composeWithDevTools } from "redux-devtools-extension";

import rootSaga from "../sagas";
import reducers from "../reducers";

const sagaMiddleware = createSagaMiddleware(); // saga 미들웨어 생성
let loggerMiddleware;
let middlewares; // 미들웨어들

// ===== 개발 환경 시 디버깅 툴 적용
if (process && process.env && process.env.NODE_ENV === "development") {
  loggerMiddleware = createLogger(); // 로거 미들웨어 생성
  middlewares = composeWithDevTools(
    applyMiddleware(sagaMiddleware, loggerMiddleware) // redux-store 미들웨어 등록
  );
} else {
  middlewares = applyMiddleware(sagaMiddleware);
}

// ===== 스토어 생성
const store = createStore(reducers, middlewares);
sagaMiddleware.run(rootSaga); // saga 실행

export default store;
