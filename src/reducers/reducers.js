import * as CONSTANT from "constant";
export const initialState = {
  startGame: false,
  score: 0,
  fail: 0,
  complexity: 1,
  loseGame: false,
  winGame: false,
  time: 1000,
  loader: false
};

export function rootReduser(state = initialState, action) {
  switch (action.type) {
    case CONSTANT.TOGGLE_LOADER:{
      return {
        ...state,
        loader: !state.loader
      }
    }
    case CONSTANT.SET_START_GAME:
      return {
        ...state,
        startGame: action.payload.start,
        loseGame: action.payload.lose,
        winGame: action.payload.lose,
        score: action.payload.score,
        fail: action.payload.fail,
        time: action.payload.time
      }
    case CONSTANT.INCREASE_SCORE:
      return {
        ...state,
        score: state.score += 1
      }
    case CONSTANT.SET_FAIL:
      return {
        ...state,
        fail: state.fail += 1
      }
    case CONSTANT.SET_LOSE:
      return {
        ...state,
        loseGame: action.payload
      }
    case CONSTANT.SET_COMPLEXITY:
      return {
        ...state,
        complexity: state.complexity += 1
      }
    case CONSTANT.SET_WIN:
      return {
        ...state,
        winGame: action.payload
      }
    case CONSTANT.SET_NEW_TIME:
      return {
        ...state,
        time: state.time -= 100
      }
    default:
      return state
  }
}
