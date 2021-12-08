// Logic-1 -- specialEleven
// We'll say a number is special if it is a multiple of 11 or if it is one more than a multiple of 11. Return true if the given non-negative number is special. Use the % "mod" operator.

// Examples

// specialEleven(22) → true
// specialEleven(23) → true
// specialEleven(24) → false

function specialEleven(n){
  //if 11=n/11===0 then true
 
  if(n%11===0 || n%11===1){
    return true}
  //if 11+1, 12 n+1%11===1 then true
 
  else return false
 
}_