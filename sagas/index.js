import { all } from "redux-saga/effects";

import { default as main } from "./main";

export default function* rootSaga() {
  yield all([...main]);
}
