const cuboid = (
  state = {
    height: 200,
    width: 200,
    length: 400,
    className: "bob",
    windowHeight: 0,
    windowWidth: 0
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
export default cuboid
