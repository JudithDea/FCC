function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  collection.forEach((item) => {
    let caseCounter = 0; // when iteraring through the array, we only want to push the item in the new arr if all of the source keys match
    for (let key in source) {
      if (item[key] === source[key]) {
        caseCounter += 1; // if we have a match we add 1 to the caseCounter
      }
      if (caseCounter === Object.keys(source).length) {
        arr.push(item); // only if all the source keys are a match (caseCounter equals the number of source keys) we push this item into the new arr
      }
    }
  });

  // Only change code above this line
  return arr;
}

whatIsInAName(
  [{ apple: 1, bat: 2 }, { apple: 1 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, cookie: 2 }
);

console.log(
  whatIsInAName(
    [
      { first: "Romeo", last: "Montague" },
      { first: "Mercutio", last: null },
      { first: "Tybalt", last: "Capulet" },
    ],
    { last: "Capulet" }
  )
);
