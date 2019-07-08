import { createAction } from "redux-actions";

// define type
const FETCH_REQUESTED = "main/FETCH_REQUESTED";
const FETCH_SUCCEEDED = "main/FETCH_SUCCEEDED";
const FETCH_FAILED = "main/FETCH_FAILED";
const INC_COUNT = "main/INC_COUNT";
const DEC_COUNT = "main/DEC_COUNT";
const SET_TAKE_TEXT = "main/SET_TAKE_TEXT";
const TAKE_TEST_A = "main/TAKE_TEST_A";
const TAKE_TEST_B = "main/TAKE_TEST_B";
const REPEAT_TAKE = "main/REPEAT_TAKE";
const INC_THROTTLE_NUM = "main/INC_THROTTLE_NUM";
const HANDLE_THROTTLE_NUM = "main/HANDLE_THROTTLE_NUM";

// create action
const fetchRequested = createAction(FETCH_REQUESTED);
const fetchSucceeded = createAction(FETCH_SUCCEEDED);
const fetchFailed = createAction(FETCH_FAILED);
const incCount = createAction(INC_COUNT);
const decCount = createAction(DEC_COUNT);
const setTakeText = createAction(SET_TAKE_TEXT);
const takeTestA = createAction(TAKE_TEST_A);
const takeTestB = createAction(TAKE_TEST_B);
const repeatTake = createAction(REPEAT_TAKE);
const incThrottleNum = createAction(INC_THROTTLE_NUM);
const handleThrottleNum = createAction(HANDLE_THROTTLE_NUM);

// types, actions
export default {
  types: {
    FETCH_REQUESTED,
    FETCH_SUCCEEDED,
    FETCH_FAILED,
    INC_COUNT,
    DEC_COUNT,
    TAKE_TEST_A,
    TAKE_TEST_B,
    SET_TAKE_TEXT,
    REPEAT_TAKE,
    INC_THROTTLE_NUM,
    HANDLE_THROTTLE_NUM
  },
  actions: {
    fetchRequested,
    fetchSucceeded,
    fetchFailed,
    incCount,
    decCount,
    takeTestA,
    takeTestB,
    setTakeText,
    repeatTake,
    incThrottleNum,
    handleThrottleNum
  }
};
