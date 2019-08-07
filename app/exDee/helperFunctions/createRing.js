import { multiply, subtract } from 'mathjs';
//start/end pt is a 3 length array. ex: [0,0,0] [width,0,0] representing location in 3d space
//to loop around y axis: pass width into y index, for x: width into x axis
function createRing(numSides, width, axis, figure) {
  console.log(figure)
  var angleDeg = (180 - (numSides-2) * 180 / numSides);
  var angle = (180 - (numSides-2) * 180 / numSides) * Math.PI / 180;
  //rotation around y axis
  var rotMatrices = {}, curAngle, sides, curSide, startRot, endRot, newStart, newEnd, translation, transMatrix, curAngle;
  if (axis === "x") {
    sides = [[figure[0], figure[3]]];
    for (var i = 0; i < numSides - 1; i++) {
      curAngle = angle * (i + 1)
      rotMatrices = {
        x: [ [1, 0, 0], [0, Math.cos(-1 * curAngle), -1 * Math.sin(-1 * curAngle)], [0, Math.sin(-1 * curAngle), Math.cos(-1 * curAngle)]],
        y: [ [Math.cos(-1 * curAngle), 0, Math.sin(-1 * curAngle)], [0, 1, 0], [-1 * Math.sin(-1 * curAngle), 0, Math.cos(-1 * curAngle)]],
        z: [ [Math.cos(-1 * curAngle), -1 * Math.sin(-1 * curAngle), 0], [Math.sin(-1 * curAngle), Math.cos(-1 * curAngle), 0], [0, 0, 1]]
      }
      console.log(sides)
      startRot = multiply(sides[0][0], rotMatrices[axis]);
      endRot = multiply(sides[0][1], rotMatrices[axis]);
      console.log(startRot, endRot)
      translation = subtract(sides[i][0], endRot);
      console.log(translation)
      transMatrix = [[1,0,0,translation[0]], [0,1,0,translation[1]], [0,0,1,translation[2]], [0, 0, 0, 1]]
      newStart = multiply(transMatrix, startRot.concat(1))
      newEnd = sides[i][0];
      curSide = [newStart.slice(0,3), newEnd];
      sides.push(curSide);
      console.log(sides)
    }
  } else if (axis === "y") {
    sides = [[figure[0], figure[1]]];
    for (var i = 0; i < numSides - 1; i++) {
      curAngle = angle * (i + 1)
      rotMatrices = {
        x: [ [1, 0, 0], [0, Math.cos(-1 * curAngle), -1 * Math.sin(-1 * curAngle)], [0, Math.sin(-1 * curAngle), Math.cos(-1 * curAngle)]],
        y: [ [Math.cos(-1 * curAngle), 0, Math.sin(-1 * curAngle)], [0, 1, 0], [-1 * Math.sin(-1 * curAngle), 0, Math.cos(-1 * curAngle)]],
        z: [ [Math.cos(-1 * curAngle), -1 * Math.sin(-1 * curAngle), 0], [Math.sin(-1 * curAngle), Math.cos(-1 * curAngle), 0], [0, 0, 1]]
      }
      startRot = multiply(sides[0][0], rotMatrices[axis]);
      endRot = multiply(sides[0][1], rotMatrices[axis]);
      translation = subtract(sides[i][1], sides[0][0]);
      transMatrix = [[1,0,0,translation[0]], [0,1,0,translation[1]], [0,0,1,translation[2]], [0, 0, 0, 1]]
      newStart = sides[i][1];
      newEnd = multiply(transMatrix, endRot.concat(1));
      curSide = [newStart, newEnd.slice(0,3)];
      sides.push(curSide);
    }
  }
  return sides;
}
export default createRing
