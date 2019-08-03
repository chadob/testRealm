import { multiply, subtract } from 'mathjs';
function createSphere(numSides, width, createRing) {
  var xRing = createRing(numSides, width, "y", [0,0,0], [width,0,0]);
  console.log(xRing)
  var allVertices = [], startPt, endPt;
  xRing.map((side, idx) => {
    console.log(side);
    startPt = [...side[0]];
    endPt = [...side[0]];
    endPt[1] += width;
    allVertices.push(createRing(numSides, width, "x", startPt, endPt));
  })
  console.log(allVertices)
  return allVertices;
}
export default createSphere
