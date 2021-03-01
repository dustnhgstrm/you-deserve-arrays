/******************
 * YOUR CODE HERE *
 ******************/

// takes in an array as a parameter and returns the first item from that array.
function getFirstItemFrom(arrOne) {
  return arrOne[0];
}

//  takes in an array as a parameter and returns the last item from that array.

function getLastItemFrom(arrTwo) {
  return arrTwo[arrTwo.length - 1];
}

//takes in an array as a parameter and returns the item at the 3rd index.
//If there are not four items (i.e., if there is no index 3), it returns the value at the last index.

function getIndex3(arrThree) {
  if (arrThree[3]) {
    return arrThree[3];
  } else return arrThree[arrThree.length - 1];
}

//takes in an array as a parameter and returns a boolean indicating whether the array's
//length is at least 10.

function isLongList(arrFour) {
  return arrFour.length >= 10;
}

//takes in an array as a parameter and returns a boolean indicating whether or not the
//first item in the array is a number.

function firstItemIsNumber(arrFive) {
  const firstBit = arrFive[0];
  if (typeof firstBit === "number") {
    return true;
  } else return false;
}

//takes in an array as a parameter and returns the second character in the third item in the
//array. We'll assume that that third item is a string for now, but a good function would
//check that's true! (In the same way the previous question checked if it's a number,
//if you did it the easy way.)

function secondCharOfThirdString(arrSix) {
  const thirdBit = arrSix[2];
  if (typeof thirdBit === "string") return thirdBit[1];
}
/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof getFirstItemFrom === "undefined") {
  getFirstItemFrom = undefined;
}

if (typeof getLastItemFrom === "undefined") {
  getLastItemFrom = undefined;
}

if (typeof getIndex3 === "undefined") {
  getIndex3 = undefined;
}

if (typeof firstItemIsNumber === "undefined") {
  firstItemIsNumber = undefined;
}

if (typeof isLongList === "undefined") {
  isLongList = undefined;
}

if (typeof secondCharOfThirdString === "undefined") {
  secondCharOfThirdString = undefined;
}

module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
  secondCharOfThirdString,
};
