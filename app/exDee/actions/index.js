import {
  RESIZE_WINDOW
} from "./types";

export const resizeWindow = (width, height) => ({
  type: RESIZE_WINDOW,
  windowWidth: width,
  windowHeight: height
})
