import { SET_DC } from "../actions/types";

const initialState = [];

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
      case SET_DC:
        return payload;
      default:
        return state;
    }
}