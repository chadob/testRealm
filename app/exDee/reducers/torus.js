const torus = (
  state = {
    height: 100,
    width: 10,
    length: 20,
    windowHeight: 0,
    windowWidth: 0,
    aroundXSides: 4,
    aroundYSides: 20,
    className: 'torus'
  }, action) => {
    switch (action.type) {
      case 'RESIZE_WINDOW':
        return {
          ...state,
          windowWidth: action.windowWidth,
          windowHeight: action.windowHeight
        }
      default:
        return state
    }
}
export default torus
