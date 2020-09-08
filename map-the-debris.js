function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  let result = []; // we need to return an array of new Objects

  arr.forEach(function (dataPoint) {
    let newObj = {};
    // the math for it: 2 * pi * square root of all of the following: ((earth radius + avgAlt) to the power of three ) divided by GM
    let firstPart = Math.PI * 2;
    let divisionPart = Math.pow(earthRadius + dataPoint.avgAlt, 3) / GM;
    let squareRootOfDivisionPart = Math.sqrt(divisionPart);

    let obPeriodRounded = Math.round(firstPart * squareRootOfDivisionPart);

    // adding the new object properties for each dataPoint in the array:
    newObj.name = dataPoint.name;
    newObj.orbitalPeriod = obPeriodRounded;

    result.push(newObj); // pushing the new objects into the new array
  });
  return result; // returning the newly completed array
}

orbitalPeriod([
  { name: "iss", avgAlt: 413.6 },
  { name: "hubble", avgAlt: 556.7 },
  { name: "moon", avgAlt: 378632.553 },
]);

console.log(
  orbitalPeriod([
    { name: "iss", avgAlt: 413.6 },
    { name: "hubble", avgAlt: 556.7 },
    { name: "moon", avgAlt: 378632.553 },
  ])
);
