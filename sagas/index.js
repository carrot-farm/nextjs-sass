import { all, fork } from "redux-saga/effects";

import { default as main } from "./main";

export default function* rootSaga() {
  const watchers = [...main];
  for (let i = 0, len = watchers.length; i < len; i++) {
    yield fork(watchers[i]);
  }
}
