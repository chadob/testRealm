export const moveBars = function(values, numberPicker) {
  var newValues = values.map(value => {
    return roll(value, numberPicker);
  });
  return newValues;
}

// Generates a number
function roll(prev, numberPicker) {
  var change = numberPicker[Math.floor(Math.random() * (numberPicker.length + 1))];
  var unadjustedNumber = Math.floor(Math.random() * 2) == 0 ? prev - change : prev + change;
  if (unadjustedNumber > 99) {
    return 99;
  } else if (unadjustedNumber < 0) {
    return 0;
  }
  return unadjustedNumber;
}

//Generates an array of repeated numbers. The higher the number is, the fewer times it is repeated
export const createOdds = function(range) {
  var numberPicker = [];
  for (var i=0; i < range; i++) {
    for (var j=0; j < range - i; j++) {
      numberPicker.push(i);
    }
  }
  return numberPicker;
}
