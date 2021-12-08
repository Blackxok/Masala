// Logic-1 -- in1To10
// Given a number n, return true if n is in the range 1..10, inclusive. Unless "outsideMode" is true, in which case return true if the number is less or equal to 1, or greater or equal to 10.

// Examples

function in1To10(n, outsideMode) {
  //if n is between 1 and 10 return true

  if (n >= 1 && n <= 10 && outsideMode === false) {
    return true;
  }

  //if n is <=1 OR >=10 outsideMode is true then return true

  if ((n <= 1 || n >= 10) && outsideMode === true) {
    return true;
  } else return false;
}

// in1To10(5, false) → true
// in1To10(11, false) → false
// in1To10(11, true) → true/
