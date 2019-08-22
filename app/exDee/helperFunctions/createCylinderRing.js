import { multiply, add, subtract } from 'mathjs';
function rotAroundVector(angle, vector, figure) {
  var rotAroundVector = [
    [
      Math.cos(angle) + vector[0] * vector[0] * (1 - Math.cos(angle)),
      vector[0] * vector[1] * (1 - Math.cos(angle)) - vector[2] * Math.sin(angle),
      vector[0] * vector[2] * (1 - Math.cos(angle)) + vector[1] * Math.sin(angle)
    ],
    [
      vector[1] * vector[0] * (1 - Math.cos(angle)) + vector[2] * Math.sin(angle),
      Math.cos(angle) + vector[1] * vector[1] * (1 - Math.cos(angle)),
      vector[1] * vector[2] * (1 - Math.cos(angle)) - vector[0] * Math.sin(angle)
    ],
    [
      vector[2] * vector[0] * (1 - Math.cos(angle)) - vector[1] * Math.sin(angle),
      vector[2] * vector[1] * (1 - Math.cos(angle)) + vector[0] * Math.sin(angle),
      Math.cos(angle) + vector[2] * vector[2] * (1 - Math.cos(angle))
    ],
  ]
  return figure.map(point => multiply(point, rotAroundVector))
}

function createCylinderRing(numSides, width, height, diameter, orient, figure) {
  var curAngle, rotFigure, translation, transMatrix, curSide;
  var angleDeg = (180 - (numSides-2) * 180 / numSides);
  var angle = (180 - (numSides-2) * 180 / numSides) * Math.PI / 180;
  var originJointEdge = (orient === "hor") ? [0,3,1] : [3,2,0];
  var joint = originJointEdge.map(point => figure[point]);
  var pieces = [figure];
  var depthEvenSides = Math.sqrt(diameter * diameter - width * width);
  var depthOddSides = diameter - ((.5 * width) / Math.tan(1/2 * angle));
  var figure2 = (numSides % 2 > 0) ? [[0,0,0], [depthEvenSides,0,0], [depthEvenSides, height, 0], [0, height, 0]]: [[0,0,0], [depthOddSides,0,0], [depthOddSides, height, 0], [0, height, 0]];
  var vector = (orient === "hor") ? multiply(1 / height, subtract(joint[1], joint[0])) : multiply(1 / width, subtract(joint[1], joint[0]));

  for (var i = 0; i < numSides - 1; i++) {
    curAngle = angle * (i + 1);
    rotFigure = (i % 2 > 0) ? rotAroundVector(curAngle, vector, figure2) : rotAroundVector(curAngle, vector, figure)
    translation = subtract(joint[0], rotFigure[originJointEdge[2]]);
    curSide = rotFigure.map(point => add(point, translation))
    joint = originJointEdge.map(point => curSide[point]);
    pieces.push(curSide);
  }
  return pieces;
}
export default createCylinderRing
