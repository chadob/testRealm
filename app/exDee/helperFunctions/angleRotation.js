/*
Before transform: (x1,y1,z1). ----> .(x2,y2,z2)
Also can be represented by vector starting at (x1,y1,z1) with magnitude of (x2,y2,z2) - (x1,y1,z1)
rotation:   (x1,y1,z1) will be multiplied by rotation matrix
After rotation: New (x1,y1,z1) will be the product
To get the translation required we will (x2,y2,z2) - new (x1,y1,z1)
*/

//might need to do negative angle
function createShape(numSides, length, className, multiply) {
  var angle = (numSides-2) * 180 / numSides * Math.PI / 180;
  //rotation around y axis
  var rotYMatrix = [ Math.cos(-1 * angle), 0, Math.arcsin(-1 * angle), 0, 0, 1, 0, 0, Math.sin(-1 * angle), 0, Math.cos(-1 * angle), 0, 0, 0, 0, 1]
  var sides = [
    /*side 1 */  [
      /* start point: */ [0,0,0],
      /*end point: */ [length, 0, 0]
    ]
  ];
  var curSide, startRot, endRot, newStart, newEnd, translation, transMatrix;
  for (i = 0; i < sides.length; i++) {
    startRot = multiply(sides[i][0], rotYMatrix);
    console.log(startRot);
    endRot = multiply(sides[i][1], rotYMatrix);
    translation = sides[i][1] - startRot;
    transMatrix = [1,0,0,0,0,1,0,0,0,0,1,0, translation[0], translation[1],translation[2]]
    newStart = sides[i][1];
    newEnd = multiply(transMatrix, endRot);
    curSide = [newStart, newEnd];
    sides.push(curSide);
  }
  console.log(sides)
  return sides;
}

function multiplyMatrices(a, b) {
  var aNumRows = a.length, aNumCols = a[0].length,
      bNumRows = b.length, bNumCols = b[0].length,
      m = new Array(aNumRows);  // initialize array of rows
  for (var r = 0; r < aNumRows; ++r) {
    m[r] = new Array(bNumCols); // initialize the current row
    for (var c = 0; c < bNumCols; ++c) {
      m[r][c] = 0;             // initialize the current cell
      for (var i = 0; i < aNumCols; ++i) {
        m[r][c] += a[r][i] * b[i][c];
      }
    }
  }
  return m;
}


function createStyles(className, width, height, background, numSides) {
  this[this.props.className + "Styles"] = {};
  this.props.sides.map(side => {
    this[this.props.className + "Styles"]["side" + side.key] = {
      width: this.props.width,
      height: this.props.height,
      background: this.props.background,
      transform: "rotateY(" + (this.props.numSides-2) * 180 / this.props.numSides + "deg) translateX(" + + ") translateY(" + + ") translateZ(" + + ")"
    }
  });
  return this[this.props.className + "Styles"]
}

// var divs = ["transformOrigin: center right, transform: rotateY(" + angle + "deg)"];
// for (i = 0; i < numSides; i++) {
//   if (i % 2 == 0) {
//     divs[i].push(" transformOrigin: center left, transform: rotateY(" + angle + "deg)");
//   }
//   else {
//     divs[i].push(" transformOrigin: center right, transform: rotateY(" + angle + "deg)");
//   }
//   for j = i - 1; j > -1; j-- {
//     if (j % 2 == 0) {
//       divs[i].concat(" transformOrigin: center left, transform: rotateY(" + angle + "deg)");
//     }
//     else {
//       divs[i].concat(" transformOrigin: center right, transform: rotateY(" + angle + "deg)");
//     }
//   }
// }
// transform: rotateY
