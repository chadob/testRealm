function createCuboidStyles(className, width, height, length, background, sides, aroundYSides, aroundXSides) {
  var styles = {
  };
  styles[className] = {
  	position: "absolute",
  	transformStyle: "preserve-3d",
  	transformOrigin: "top left"
  }
  sides.map((side, sideIdx) => {
    styles["side" + sideIdx] = {
      outline: "1px solid black",
      transformOrigin: "top left",
      // backfaceVisibility: "hidden",
      position: "absolute",
      background: background,
    }
  })
  Object.assign(styles["side0"], {
    width: width,
    height: height,
    transform: "translateX(" + sides[0][0][0] + "px) translateY(" + sides[0][0][1] + "px) translateZ(" + sides[0][0][2] + "px) rotateY(0deg) rotateX(0deg)"
  });
  Object.assign(styles["side1"], {
    width: length,
    height: height,
    transform: "translateX(" + sides[1][0][0] + "px) translateY(" + sides[1][0][1] + "px) translateZ(" + sides[1][0][2] + "px) rotateY(-90deg) rotateX(0deg)"
  });
  Object.assign(styles["side2"], {
    width: width,
    height: height,
    transform: "translateX(" + sides[2][0][0] + "px) translateY(" + sides[2][0][1] + "px) translateZ(" + sides[2][0][2] + "px) rotateY(-180deg) rotateX(0deg)"
  });
  Object.assign(styles["side3"], {
    width: length,
    height: height,
    transform: "translateX(" + sides[3][0][0] + "px) translateY(" + sides[3][0][1] + "px) translateZ(" + sides[3][0][2] + "px) rotateY(-270deg) rotateX(0deg)"
  });
  Object.assign(styles["side4"], {
    width: width,
    height: length,
    transform: "translateX(" + sides[4][0][0] + "px) translateY(" + sides[4][0][1] + "px) translateZ(" + sides[4][0][2] + "px) rotateY(0deg) rotateX(90deg)"
  });
  Object.assign(styles["side5"], {
    width: width,
    height: length,
    transform: "translateX(" + sides[5][0][0] + "px) translateY(" + sides[5][0][1] + "px) translateZ(" + sides[5][0][2] + "px) rotateY(0deg) rotateX(-90deg)"
  });
  return styles;
}
export default createCuboidStyles
