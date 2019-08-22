//extra math in the rotateY part of transform.
// i use (numSides-2) * 180 / numSides) to figure out what degrees a regular polygon's angles are
// I then subtract it from 180 to figure out rotation amount
// I then multiply by whatever side it is. 0,1,2...
function createCylinderStyles(className, width, height, diameter, background, sides, aroundYSides, aroundXSides) {
  var styles = {};
  styles[className] = {
  	position: "absolute",
  	transformStyle: "preserve-3d",
  	transformOrigin: "top left"
  }
  sides.map((ring, ringIdx) => {
    ring.map((side, sideIdx) => {
      styles["ring" + ringIdx + "side" + sideIdx] = {
        outline: "1px solid black",
        transformOrigin: "top left",
        // backfaceVisibility: "hidden",
        position: "absolute",
        width: width,
        height: height,
        background: background,
        transform: "translateX(" + side[0][0] + "px) translateY(" + side[0][1] + "px) translateZ(" + side[0][2] + "px) rotateY(" + (-1 * (180 -(aroundYSides-2) * 180 / aroundYSides) * ringIdx)  + "deg) rotateX(" + (-1 * (180 -(aroundXSides-2) * 180 / aroundXSides) * sideIdx)  + "deg) "
      }
    })
  });
  return styles;
}
export default createCylinderStyles
