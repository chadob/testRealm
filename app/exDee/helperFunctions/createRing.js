import { multiply, subtract } from 'mathjs';
//start/end pt is a 3 length array. ex: [0,0,0] [width,0,0] representing location in 3d space
//to loop around y axis: pass width into y index, for x: width into x axis
function createRing(numSides, width, axis, startPt, endPt) {
  var angleDeg = (180 - (numSides-2) * 180 / numSides);
  var angle = (180 - (numSides-2) * 180 / numSides) * Math.PI / 180;
  //rotation around y axis
  var rotMatrices = {
    x: [ [1, 0, 0], [0, Math.cos(-1 * angle), -1 * Math.sin(-1 * angle)], [0, Math.sin(-1 * angle), Math.cos(-1 * angle)]],
    y: [ [Math.cos(-1 * angle), 0, Math.sin(-1 * angle)], [0, 1, 0], [-1 * Math.sin(-1 * angle), 0, Math.cos(-1 * angle)]],
    z: [ [Math.cos(-1 * angle), -1 * Math.sin(-1 * angle), 0], [Math.sin(-1 * angle), Math.cos(-1 * angle), 0], [0, 0, 1]]
  }
  var sides = [[startPt, endPt]];
  // if (axis === "x") {
  //   sides = [
  //     /*side 1 */  [
  //       /* start point: */ startPt,
  //       /*end point: */[0,width,0]
  //     ]
  //   ];
  // } else if (axis === "y") {
  //   sides = [
  //     /*side 1 */  [
  //       /* start point: */ startPt,
  //       /*end point: */[width,0,0]
  //     ]
  //   ];
  // } else {
  //   sides = [
  //     /*side 1 */  [
  //       /* start point: */ startPt,
  //       /*end point: */[0,0,0]
  //     ]
  //   ];
  // }
  console.log(sides)
  var curSide, startRot, endRot, newStart, newEnd, translation, transMatrix, curAngle;
  for (var i = 0; i < numSides - 1; i++) {
    startRot = multiply(sides[i][0], rotMatrices[axis]);
    endRot = multiply(sides[i][1], rotMatrices[axis]);
    console.log(startRot, endRot)
    translation = subtract(sides[i][1], startRot);
    transMatrix = [[1,0,0,translation[0]], [0,1,0,translation[1]], [0,0,1,translation[2]], [0, 0, 0, 1]]
    newStart = sides[i][1];
    newEnd = multiply(transMatrix, endRot.concat(1));
    curAngle = angleDeg * i
    curSide = [newStart, newEnd.slice(0,3)];
    sides.push(curSide);
  }
  return sides;
}
export default createRing
