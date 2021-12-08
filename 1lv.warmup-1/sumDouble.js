// Given two int values, return their sum. Unless the two values are the same, then return double their sum.

// Examples

// sumDouble(1, 2) → 3
// sumDouble(3, 2) → 5
// sumDouble(2, 2) → 8

function diff21(n){
  if(n>21){
    let abs=Math.abs(n-21)
  return abs*2
  }
  else return Math.abs(n-21)
}