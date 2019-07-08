import {
  put,
  takeEvery,
  call,
  take,
  select,
  throttle
} from "redux-saga/effects";

import * as api from "../lib/api";
import { main } from "../actions";

const {
  FETCH_REQUESTED,
  FETCH_SUCCEEDED,
  FETCH_FAILED,
  SET_TAKE_TEXT,
  TAKE_TEST_A,
  TAKE_TEST_B,
  REPEAT_TAKE,
  INC_THROTTLE_NUM,
  HANDLE_THROTTLE_NUM
} = main.types;

const { incThrottleNum } = main.actions;

// ===== 비동기 통신 테스트
export function* fetchTest(action) {
  try {
    const { data } = yield call(api.fetchTest, action.payload);

    yield put({ type: FETCH_SUCCEEDED, data });
  } catch (error) {
    yield put({ type: FETCH_FAILED, error });
  }
}

// ===== take flow task 테스트
function* takeFlowLogic() {
  const state = yield select();
  const takeTestText = state.main.get("takeTestText") || 0;
  yield put({
    type: SET_TAKE_TEXT,
    payload: { take: takeTestText + 1 }
  });
}

// ===== throttle num  증가
function* incThrottleNumSaga() {
  console.log("> incThrottleNum: ", incThrottleNum());
  yield put(incThrottleNum());
}

/* ===========================
  watcher
  ===========================*/
// ===== takeEvery - 언제나 감시한다.
function* watchFetchData() {
  console.log("*** watchFetchData");
  yield takeEvery(FETCH_REQUESTED, fetchTest);
}

// ===== take flow task 테스트
function* watchTakeFlow() {
  console.log("*** watchTakeFlow");
  while (true) {
    // take/TEST.A
    yield take(TAKE_TEST_A);
    yield takeFlowLogic();

    // // take/TEST.B
    yield take(TAKE_TEST_B);
    yield takeFlowLogic();
  }
}

// ===== 지정 순회, i가 2까지 출력 후 done 출력
function* watchRepeatTake() {
  console.log("*** watchRepeatTake");
  for (let i = 0; i < 3; i++) {
    yield take(REPEAT_TAKE);
    console.log("> i: ", i);
  }
  console.log("> done: 더이상 실행안됨.");
}

// ===== 쓰로틀링 테스트
function* watchThrottle() {
  console.log("*** watchThrottle");
  yield throttle(1000, HANDLE_THROTTLE_NUM, incThrottleNumSaga);
}

// export default [watchFetchData(), watchTakeFlow(), watchRepeatTake()];
export default [watchFetchData, watchTakeFlow, watchRepeatTake, watchThrottle];
