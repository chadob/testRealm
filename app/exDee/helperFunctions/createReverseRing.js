import { multiply, add, subtract } from 'mathjs';
//rotates square set of points counterclockwise around axis
//this means that if the increases when it is facing you, it then goes counterclockwise around it
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

//takes a unit vector parallel to either the x axis or y axis
//orientation of the ring: horizontal or vertical
//calculates the translation needed for the next section based on the past one.
//returns array of all figures' coordinates in x,y,z style arrays: [[x,y,z],[x,y,z]]
function createReverseRing(numSides, width, orient, figure) {
  var curAngle, rotFigure, translation, transMatrix, curSide, vector;
  var angleDeg = (180 - (numSides-2) * 180 / numSides);
  var angle = (180 - (numSides-2) * 180 / numSides) * Math.PI / 180;
  var originJointEdge = (orient === "hor") ? [0,3,1] : [0,1,3];
  var joint = originJointEdge.map(point => figure[point]);
  var pieces = [figure];
  vector = multiply(1 / width, subtract(joint[1], joint[0]));
  for (var i = 0; i < numSides - 1; i++) {
    curAngle = angle * (i + 1);
    rotFigure = rotAroundVector(curAngle, vector, figure);
    translation = subtract(joint[0], rotFigure[originJointEdge[2]]);
    curSide = rotFigure.map(point => add(point, translation))
    joint = originJointEdge.map(point => curSide[point]);
    pieces.push(curSide);
  }
  return pieces;
}

export default createReverseRing
