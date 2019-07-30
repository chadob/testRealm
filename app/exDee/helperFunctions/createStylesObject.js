function createStylesObject(className, width, height, background, sides, numSides) {
  var styles = {};
  var idx = 0;
  for (var side in sides) {
    console.log(side)
    styles["side" + idx] = {
      outline: "1px solid black",
      transformOrigin: "center left",
      // backfaceVisibility: "hidden",
      position: "absolute",
      width: width,
      height: height,
      background: background,
      transform: "translateX(" + side[0][0] + "px) translateY(" + side[0][1] + "px) translateZ(" + side[0][2] + "px) rotateX(" + rotX  + "deg) rotateY(" + rotY + "deg) rotateZ(" + rotZ + "deg)"
    }
    idx++;
  }
  return styles;
}
export default createStylesObject
