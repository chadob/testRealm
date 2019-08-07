function createRing(numSides, width, vector, figure) {
  console.log(figure)
  var angleDeg = (180 - (numSides-2) * 180 / numSides);
  var angle = (180 - (numSides-2) * 180 / numSides) * Math.PI / 180;
  //rotation around y axis
  var curAngle, sides, curSide, startRot, endRot, newStart, newEnd, translation, transMatrix, curAngle;
  var rotAroundVector = [
    [
      Math.cos(angle) + vector[x] * vector[x] * (1 - Math.cos(angle)),
      vector[x] * vector[y] * (1 - Math.cos(angle)) - vector[z] * Math.sin(angle),
      vector[x] * vector[z] * (1 - Math.cos(angle)) + vector[y] * Math.sin(angle)
    ],
    [
      vector[y] * vector[x] * (1 - Math.cos(angle)) + vector[z] * Math.sin(angle),
      Math.cos(angle) + vector[y] * vector[y] * (1 - Math.cos(angle)),
      vector[y] * vector[z] * (1 - Math.cos(angle)) - vector[x] * Math.sin(angle)
    ],
    [
      vector[z] * vector[x] * (1 - Math.cos(angle)) - vector[y] * Math.sin(angle),
      vector[z] * vector[y] * (1 - Math.cos(angle)) + vector[x] * Math.sin(angle)
      Math.cos(angle) + vector[z] * vector[z] * (1 - Math.cos(angle)),
    ],
  ]
  for (var i = 0; i < numSides - 1; i++) {
    curAngle = angle * (i + 1)
    var botLeftRot = multiply(figure[3], rotAroundVector);
    translation = subtract(figure[0], botLeftRot)
    transMatrix = [[1,0,0,translation[0]], [0,1,0,translation[1]], [0,0,1,translation[2]], [0, 0, 0, 1]]
    newTopLeft = multiply(transMatrix, figure[0].concat(1);
    newTopRight = multiply(transMatrix, figure[1].concat(1)
    curSide = [newTopLeft.slice(0,3), newTopRight.slice(0,3)];
    sides.push(curSide);
  }
  return sides;
}
export default createRing
