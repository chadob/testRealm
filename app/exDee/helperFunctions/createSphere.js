import { multiply, subtract } from 'mathjs';
function createSphere(numSides, width, createRing) {
  var xRing = createRing(numSides, width, "y", [[0,0,0], [width,0,0], [width, width, 0], [0, width, 0]]);
  console.log(xRing)
  var allVertices = [], figure, botRight, botLeft;
  xRing.map((side, idx) => {
    figure = [[...side[0]], [...side[1]]];
    botRight = [...side[1]];
    botLeft = [...side[0]]
    botRight[1] += width;
    botLeft[1] += width;
    figure.push(botRight)
    figure.push(botLeft)
    console.log(figure);
    allVertices.push(createRing(numSides, width, "x", figure));
  })
  console.log(allVertices)
  return allVertices;
}
export default createSphere
