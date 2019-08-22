import { multiply, add, subtract } from 'mathjs';
function createCylinder(aroundYSides, aroundXSides, width, height, diameter, createRing, createCylinderRing) {
  var figure = [[0,0,0], [width,0,0], [width, height, 0], [0, height, 0]];
  var xRing = createRing(aroundYSides, width, height, "hor", figure);
  var allVertices = [];
  xRing.map((side, idx) => {
    allVertices.push(createCylinderRing(aroundXSides, width, height, diameter, "vert", side));
  })
  return allVertices;
}
export default createCylinder
