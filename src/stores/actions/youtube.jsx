import axios from "axios";
import { SET_SELECTED_MUSIC, YOUTUBE } from "../types";

export const getYoutube = (q) => async (dispatch) => {
  try {
    let results = await axios.get(`https://bot.khan.my.id/yt?q=${q}`);
    dispatch({ type: YOUTUBE, payload: results.data });
  } catch (error) {
    console.log(error);
  }
};

export const setSelectedMusic = (id) => async (dispatch) => {
  dispatch({ type: SET_SELECTED_MUSIC, payload: id });
};
