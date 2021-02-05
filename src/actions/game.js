import { requestHandler } from "utils/requestHandler";
import * as CONSTANT from "constant";

export function setStartGame(start) {
  return {
    type: CONSTANT.SET_START_GAME,
    payload: start,
  }
}

export function chargeMyScore() {
  return {
    type: CONSTANT.INCREASE_SCORE,
  }
}

export function chargeFail() {
  return {
    type: CONSTANT.SET_FAIL,
  }
}

export function setLoseGame(lose) {
  console.log(lose)
  return {
    type: CONSTANT.SET_LOSE,
    payload: lose,
  }
}

export function setWinGame(win) {
  return {
    type: CONSTANT.SET_WIN,
    payload: win,
  }
}
export function chargeComplexity() {
  return {
    type: CONSTANT.SET_COMPLEXITY,
  }
}

export function changeTime() {
  return {
    type: CONSTANT.SET_NEW_TIME,
  }
}

export function getScore() {
  return dispatch => {
    const options = {
      type: "get",
      url: "/score",
    };
    const cb = (response) => {
      dispatch({type: CONSTANT.BEST_SCORE, payload: response.data})
    }
    requestHandler({options, cb})
  };
}


export function setScore(data) {
  return dispatch => {
    const options = {
      type: "post",
      url: '/update',
      data
    };
    const cb = (response) => {
      dispatch({type: CONSTANT.BEST_SCORE, payload: response.data})
    }
    requestHandler({options, cb})
  };
}