import { handleActions } from "redux-actions";
import { Map } from "immutable";

import { main } from "../actions";
const {
  INC_COUNT,
  DEC_COUNT,
  FETCH_SUCCEEDED,
  FETCH_FAILED,
  SET_TAKE_TEXT
} = main.types;

const initialState = Map({
  num: 0,
  visitNum: 0, // 방문 횟수
  takeTestText: null
});

export default handleActions(
  {
    [INC_COUNT]: (state, action) => {
      console.log("**** INC_COUNT", state.get("num"));
      return state.set("num", state.get("num") + 1);
    },
    [DEC_COUNT]: (state, action) => {
      console.log("**** DEC_COUNT", state.get("num"));
      return state.set("num", state.get("num") - 1);
    },
    [FETCH_SUCCEEDED]: (state, action) => {
      console.log("**** FETCH_SUCCEEDED", action.data);
      return state;
    },
    [FETCH_FAILED]: (state, action) => {
      console.log("**** FETCH_FAILED", action.data);
      return state;
    },
    [SET_TAKE_TEXT]: (state, { payload: { take } }) => {
      console.log("> SET_TAKE_TEXT reducer: ", take);
      return state.set("takeTestText", take);
    }
  },
  initialState
);
