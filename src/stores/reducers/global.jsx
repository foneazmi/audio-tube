import { BEGIN, END, LOGOUT, THEME } from "../types";

const INITIAL_STATE = {
  loading: false,
  theme: "cyberpunk",
};

export const global = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BEGIN:
      return { ...state, loading: true };
    case END:
      return { ...state, loading: false };
    case THEME:
      return { ...state, theme: action.payload };
    case LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
