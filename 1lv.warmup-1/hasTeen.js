// Warmup-1 -- hasTeen
// We'll say that a number is 'teen' if it is in the range 13..19 inclusive. Given 3 int values, return true if 1 or more of them are teen.

// Examples

// hasTeen(13, 20, 10) → true
// hasTeen(20, 19, 10) → true
// hasTeen(20, 10, 13) → true

function loneTeen(a, b){
 
  if((a>=13 && a<=19) && (b>=13 && b<=19)){
   return false;
 }
  else if((a>=13 && a<=19) || (b>=13 && b<=19)){
   return true;
 }
 else return false;
}