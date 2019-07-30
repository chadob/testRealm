//extra math in the rotateY part of transform.
// i use (numSides-2) * 180 / numSides) to figure out what degrees a regular polygon's angles are
// I then subtract it from 180 to figure out rotation amount
// I then multiply by whatever side it is. 0,1,2...
function createStyles(className, width, height, background, sides, numSides) {
  var styles = {};
  console.log(sides)
  sides.map((side, idx) => {
    console.log(side)
    styles["side" + idx] = {
      outline: "1px solid black",
      transformOrigin: "center left",
      // backfaceVisibility: "hidden",
      position: "absolute",
      width: width,
      height: height,
      background: background,
      transform: "translateX(" + side[0][0] + "px) translateY(" + side[0][1] + "px) translateZ(" + side[0][2] + "px) rotateY(" + ((180 -(numSides-2) * 180 / numSides) * idx)  + "deg)"
    }
  });
  return styles;
}
export default createStyles
