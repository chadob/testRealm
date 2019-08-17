import {
  MAX_BARS,
  MIN_BARS
} from "./types";

export const maxBars = (status) => ({
  type: MAX_BARS,
  payload: status
});
export const minBars = (status) => ({
  type: MIN_BARS,
  payload: status
});
