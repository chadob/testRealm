//Width/height are of the piece that get's wrapped around x axis
//diameter is the depth of the cylinder.
// formula for width of side of regular polygon dependent on diameter is:
// diameter = (2 * width) / (2 Math.sin(180/numside * (Math.PI / 180)))
// width = (diameter * 2 * Math.sin(180/aroundYSides * (Math.PI / 180))) / 2
const cylinder = (
  state = {
    height: 200,
    diameter: 400,
    className: "bob",
    aroundXSides: 4,
    aroundYSides: 10,
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
export default cylinder
