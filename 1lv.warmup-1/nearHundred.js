// Given an int n, return true if it is within 10 of 100 or 200. Note: Math.abs(num) computes the absolute value of a number.

// Examples

// nearHundred(93) → true
// nearHundred(90) → true
// nearHundred(89) → false

function nearHundred(n){
  let value1 = 100-n;
  let value2 = 200-n;
  return (Math.abs(value1) <= 10 || Math.abs(value2) <=10);
}