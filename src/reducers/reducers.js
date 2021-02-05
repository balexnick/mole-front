import * as CONSTANT from "constant";
export const initialState = {
  [CONSTANT.LOADER]: false,
};

export function rootReduser(state = initialState, action) {
  switch (action.type) {
    case CONSTANT.LOADER: {
      return{
        ...state,
        [CONSTANT.LOADER]: action.payload
      }
    }
    default:
      return state;
  }
}
