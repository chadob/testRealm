const regular = (
  state = {
    height: 20,
    width: 20,
    length: 20,
    windowHeight: 0,
    windowWidth: 0,
    numSides: 2,
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
