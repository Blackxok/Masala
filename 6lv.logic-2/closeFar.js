// Logic-2 -- closeFar
// Given three ints, a b c, return true if one of b or c is "close" (differing from a by at most 1), while the other is "far", differing from both other values by 2 or more. Note: Math.abs(num) computes the absolute value of a number.

// Examples

// closeFar(1, 2, 10) → true
// closeFar(1, 2, 3) → false
// closeFar(4, 1, 3) → true

function closeFar(a, b, c){
  let bDifference=Math.abs(a-b) 
  let cDifference=Math.abs(a-c)
  let fromB=Math.abs(b-c)
 
  if(bDifference<=1 && cDifference>=2 && fromB>=2 ){
    return true}
  
  if(cDifference<=1 && bDifference>=2 && fromB>=2){
    return true}
  
  else return false
 
 }
 console.log(closeFar(1, 2, 10))// → true