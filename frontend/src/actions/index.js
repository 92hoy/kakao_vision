// 우리가 만든 /api/moim을 get해오는 액션을 만든다.
import axios from "axios";
export const FETCH_MOIM = "FETCH_MOIM";

export function fetchMoim() {
  const request = axios.get("/api/moim/");
  return {
    type: FETCH_MOIM,
    payload: request,
  };
}
