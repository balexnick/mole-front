export const SET_START_GAME = 'SET_START_GAME'
export const INCREASE_SCORE = 'INCREASE_SCORE'
export const SET_FAIL = 'SET_FAIL'
export const SET_LOSE = 'SET_LOSE'
export const SET_COMPLEXITY = 'SET_COMPLEXITY'
export const SET_WIN = 'SET_WIN'
export const SET_NEW_TIME = 'SET_NEW_TIME'


export function setStartGame(start) {
  return {
    type: SET_START_GAME,
    payload: start,
  }
}

export function chargeMyScore() {
  return {
    type: INCREASE_SCORE,
  }
}

export function chargeFail() {
  return {
    type: SET_FAIL,
  }
}

export function setLoseGame(lose) {
  return {
    type: SET_LOSE,
    payload: lose,
  }
}

export function setWinGame(win) {
  return {
    type: SET_WIN,
    payload: win,
  }
}
export function chargeComplexity() {
  return {
    type: SET_COMPLEXITY,
  }
}

export function changeTime() {
  return {
    type: SET_NEW_TIME,
  }
}
