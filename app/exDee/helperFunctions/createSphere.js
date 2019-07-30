function createSphere(numSides, width, createRing) {
  var xRing = createRing(numSides, width, "y", [0,0,0]);
  console.log(xRing)
  var allVertices = [];
  xRing.map((side, idx) => {
    console.log(side);
    allVertices.push(createRing(numSides, width, "x", side[0]));
  })
  console.log(allVertices)
  return allVertices;
}
export default createSphere
