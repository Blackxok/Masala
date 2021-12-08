// Warmup-1 -- close10
// Given 2 int values, return whichever value is nearest to the value 10, or return 0 in the event of a tie. Note that Math.abs(n) returns the absolute value of a number.

// Examples

// close10(8, 13) → 8
// close10(13, 8) → 8
// close10(13, 7) → 0
function close10(a, b){
  if(a===b){
    return 0}
  
  differenceA=Math.abs(10-a)
  differenceB=Math.abs(10-b)
  if (differenceA>differenceB){
    return b
  }
  else if (differenceA===differenceB){
    return 0
  }
  else return a
}