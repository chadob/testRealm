import { multiply, add, subtract } from 'mathjs';
function createSphere(numSides, width, createRing) {
  var figure = [[0,0,0], [width,0,0], [width, width, 0], [0, width, 0]];
  var xRing = createRing(numSides, width, "hor", figure);
  var allVertices = [];
  xRing.map((side, idx) => {
    allVertices.push(createRing(numSides, width, "vert", side));
  })
  return allVertices;
}
export default createSphere
