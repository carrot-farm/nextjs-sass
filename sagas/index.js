import { all, fork } from "redux-saga/effects";

import { default as main } from "./main";

export default function* rootSaga() {
  yield fork([...main]);
}
