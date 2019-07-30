const regular = (
  state = {
    height: 200,
    width: 200,
    length: 400,
    windowHeight: 0,
    windowWidth: 0,
    numSides: 100,
    className: 'bob'
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
export default regular
