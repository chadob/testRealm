import { multiply, subtract } from 'mathjs';
/*
Before transform: (x1,y1,z1). ----> .(x2,y2,z2)
Also can be represented by vector starting at (x1,y1,z1) with magnitude of (x2,y2,z2) - (x1,y1,z1)
rotation:   (x1,y1,z1) will be multiplied by rotation matrix
After rotation: New (x1,y1,z1) will be the product
To get the translation required we will (x2,y2,z2) - new (x1,y1,z1)
*/

//might need to do negative angle
function createXRing(numSides, width) {
  var angle = (180 - (numSides-2) * 180 / numSides) * Math.PI / 180;
  //rotation around y axis
  var rotYMatrix = [ [Math.cos(-1 * angle), 0, Math.sin(-1 * angle)], [0, 1, 0], [-1 * Math.sin(-1 * angle), 0, Math.cos(-1 * angle)]]
  var sides = [
    /*side 1 */  [
      /* start point: */ [0,0,0],
      /*end point: */ [width, 0, 0]
    ]
  ];
  var curSide, startRot, endRot, newStart, newEnd, translation, transMatrix;
  for (var i = 0; i < numSides - 1; i++) {
    startRot = multiply(sides[i][0], rotYMatrix);
    endRot = multiply(sides[i][1], rotYMatrix);
    translation = subtract(sides[i][1], startRot);
    transMatrix = [[1,0,0,translation[0]], [0,1,0,translation[1]], [0,0,1,translation[2]], [0, 0, 0, 1]]
    newStart = sides[i][1];
    newEnd = multiply(transMatrix, endRot.concat(1));
    curSide = [newStart, newEnd.slice(0,3)];
    sides.push(curSide);
  }
  return sides;
}
export default createXRing
