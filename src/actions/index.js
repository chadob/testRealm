import {
  TURN_RIGHT,
  TURN_LEFT,
  MOUSE_VIEW,
  MOVE_FORWARD,
  MOVE_BACKWARD,
  RESIZE_WINDOW
} from "./types";
import {rotateCube, translateCube} from './helperFunctions';

export const turnRight = xRotation => ({
  type: TURN_RIGHT,
  newRotation: xRotation + 1.8
})
export const turnLeft = xRotation => ({
  type: TURN_LEFT,
  newRotation: xRotation - 1.8
})
//inefficient. How can I do this without running function 5x?
export const mouseView = (mousePos, windowWidth, windowHeight, curPos, perspective) => {
  const newRotations = rotateCube(mousePos, windowWidth, windowHeight, curPos, perspective);
  const newTranslations = translateCube(newRotations.xRotation, newRotations.yRotation, curPos, perspective);
  return {
    type: MOUSE_VIEW,
    mousePos: mousePos,
    xRotation: newRotations.xRotation,
    yRotation: newRotations.yRotation,
    translateX: newTranslations.translateX,
    translateY: newTranslations.translateY,
    translateZ: newTranslations.translateZ,
  }
}
export const moveForward = (xRotation, yRotation, direction, curPos, perspective) => {
  const newTranslations = translateCube(xRotation, yRotation, curPos + 10, perspective);
  console.log(newTranslations)
  return {
    type: MOVE_FORWARD,
    curPos: curPos + 10,
    translateX: newTranslations.translateX,
    translateY: newTranslations.translateY,
    translateZ: newTranslations.translateZ
  }
}
export const moveBackward = (xRotation, yRotation, direction, curPos, perspective) => {
  const newTranslations = translateCube(xRotation, yRotation, curPos - 10, perspective);
  return {
    type: MOVE_BACKWARD,
    curPos: curPos - 10,
    translateX: newTranslations.translateX,
    translateY: newTranslations.translateY,
    translateZ: newTranslations.translateZ
  }
}
export const resizeWindow = (width, height) => ({
  type: RESIZE_WINDOW,
  windowWidth: width,
  windowHeight: height
})
