import {
  BEGIN,
  END,
  LOGOUT,
  THEME,
  YOUTUBE,
  SET_SELECTED_MUSIC,
} from "../types";

const INITIAL_STATE = {
  loading: false,
  theme: "cyberpunk",
  youtube: [],
  selectedMusic: "jfKfPfyJRdk",
};

export const global = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BEGIN:
      return { ...state, loading: true };
    case END:
      return { ...state, loading: false };
    case THEME:
      return { ...state, theme: action.payload };
    case YOUTUBE:
      return { ...state, youtube: action.payload };
    case SET_SELECTED_MUSIC:
      return { ...state, selectedMusic: action.payload };
    case LOGOUT:
      return INITIAL_STATE;
    default:
      return state;
  }
};
