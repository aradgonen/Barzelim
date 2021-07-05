import { SET_DC } from "./types";

export const setDc = (dc) => ({
  type: SET_DC,
  payload: dc,
});
