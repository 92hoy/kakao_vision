// FETCH_MOIM액션이 불렸을 때 데이터를 moimList에 저장해 새로운 state를 반환해준다.
import { FETCH_MOIM } from "../actions/index";

const initialState = {
  moimList: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_MOIM:
      return { ...state, moimList: action.payload.data };
    default:
      return state;
  }
}
