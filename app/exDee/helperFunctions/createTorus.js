import { multiply, add, subtract } from 'mathjs';
function createTorus(aroundYSides, aroundXSides, width, height, createRing) {
  var figure = [[0,0,0], [width,0,0], [width, height, 0], [0, height, 0]];
  var xRing = createRing(aroundYSides, width, height, "hor", figure);
  var allVertices = [];
  xRing.map((side, idx) => {
    allVertices.push(createRing(aroundXSides, width, height, "vert", side));
  })
  return allVertices;
}
export default createTorus
