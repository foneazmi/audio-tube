import { BEGIN, END, THEME } from "../types";

export const loadingBegin = () => (dispatch) => {
  dispatch({ type: BEGIN });
};

export const loadingEnd = () => (dispatch) => {
  dispatch({ type: END });
};

export const setTheme = (theme) => (dispatch) => {
  dispatch({ type: THEME, payload: theme });
};

export const setTimer =
  (timer = 10000) =>
  (dispatch) => {
    dispatch({ type: BEGIN });
    setTimeout(() => {
      dispatch({ type: END });
    }, timer);
  };
