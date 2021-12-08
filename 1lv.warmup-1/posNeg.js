// Given 2 int values, return true if one is negative and one is positive. Except if the parameter "negative" is true, then return true only if both are negative.

// Examples

// posNeg(1, -1, false) → true
// posNeg(-1, 1, false) → true
// posNeg(-4, -5, true) → true

function posNeg(a, b, negative){
  let pos=Math.abs(a) //positive
  let pos2=Math.abs(b) //positive
  
if(pos!==a && pos2===b && negative===false){
  return true}

  else if(pos!==a && pos2===b && negative===true){
  return false}
 
 else if(pos===a && pos2!==b && negative===false){
  return true}
  
else if(pos!==a && negative===true){
  return true
}

  else return false
 
}