// Logic-1 -- lessBy10
// Given three ints, a b c, return true if one of them is 10 or more less than one of the others.

// Examples

// lessBy10(1, 7, 11) → true
// lessBy10(1, 7, 10) → false
// lessBy10(11, 1, 7) → true

function lessBy10(a, b, c){
  if(c-10>=a || c-10>=b){return true}
  if(a-10>=b || a-10>=c){return true}
  if(b-10>=a || b-10>=c){return true}
  return false 
}
console.log(lessBy10(1, 7, 11)) //true
console.log(lessBy10(1, 7, 10)) //false
console.log(lessBy10(11, 1, 7)) //true