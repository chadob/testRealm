function createYRing(numSides, width, className) {
  var angle = (180 - (numSides-2) * 180 / numSides) * Math.PI / 180;
  //rotation around y axis
  var rotYMatrix = [ [Math.cos(-1 * angle), 0, Math.sin(-1 * angle)], [0, 1, 0], [-1 * Math.sin(-1 * angle), 0, Math.cos(-1 * angle)]];
  var rotXMatrix = [ [1, 0, 0], [0, Math.cos(-1 * angle), -1 * Math.sin(-1 * angle)], [0, Math.sin(-1 * angle), Math.cos(-1 * angle)]];
  var sides = [
    /*side 1 */  [
      /* start point: */ [0,0,0],
      /*end point: */ [0, width, 0]
    ]
  ];
  var curSide, startRot, endRot, newStart, newEnd, translation, transMatrix;
  for (var i = 0; i < numSides - 1; i++) {
    startRot = multiply(sides[i][0], rotXMatrix);
    endRot = multiply(sides[i][1], rotXMatrix);
    translation = subtract(sides[i][1], startRot);
    transMatrix = [[1,0,0,translation[0]], [0,1,0,translation[1]], [0,0,1,translation[2]], [0, 0, 0, 1]]
    newStart = sides[i][1];
    newEnd = multiply(transMatrix, endRot.concat(1));
    curSide = [newStart, newEnd.slice(0,3)];
    sides.push(curSide);
  }
  return sides;
}
export default createYRing
