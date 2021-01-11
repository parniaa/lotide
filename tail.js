// FUNCTION IMPLEMENTATION
const tail = function(array) {
  let newArray = [];
  for (let i = 1; i < array.length; i++) {
    newArray[i] = array[i];
  }
  return newArray;
};
module.exports = tail;
