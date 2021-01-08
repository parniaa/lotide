// var planetMoons = {
//   mercury: 0,
//   venus: 0,
//   earth: 1,
//   mars: 2,
//   jupiter: 67,
//   saturn: 62,
//   uranus: 27,
//   neptune: 14
// };

// for (var planet in planetMoons) {
//   var numberOfMoons = planetMoons[planet];
//   console.log("Planet: " + planet + ", # of Moons: "+ numberOfMoons);
// }



const stdev = function(arr) {
  /* IMPLEMENT ME */
  // stdev = sqrt(sum((x - populationMean)^2)/numberOfValues)
//   *--square root of
//  --average of
//  -- squared deviations of
//  -- values from their average value


//calculate the average
  let average = 0;
  let secondAverage =0;
  let avrgMinusValues = [];
  let powerTwo = [];
  let secondArray = [];
//calculate the average 
  for (const item of arr) {
    average += item;
  }
  average = (average / arr.length);
//substract the average from array items
for (let item of arr) {
  secondArray.push( item - average);
}
//power two new array items
for (let item of secondArray) {
  powerTwo.push(Math.pow(item, 2));
}
//average of new array items
for (const item of powerTwo) {
  secondAverage += item;
}
secondAverage = (secondAverage / powerTwo.length);
//
 console.log(Math.sqrt(secondAverage));
};

const inputValue = [6,2,3,4,9,6,1,0,5];
stdev(inputValue);