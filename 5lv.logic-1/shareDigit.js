// Logic-1 -- shareDigit
// Given two ints, each in the range 10...99, 
//return true if there is a digit that appears in both numbers, 
//such as the 2 in 12 and 23. (Note: division, 
//e.g. n/10, gives the left digit while the % "mod" n%10 gives the right digit.)

// Examples

// shareDigit(12, 23) → true
// shareDigit(12, 43) → false
// shareDigit(12, 44) → false

function shareDigit(a, b){
  a=a.toString().split("")
  console.log(a)
  b=b.toString().toString("")
  if(a[0]===b[0] || a[0]===b[1]){return true}
  if(a[1]===b[0] || a[1]===b[1]){return true}
  else return false
}
console.log(shareDigit(12, 23)) //true
console.log(shareDigit(12, 43)) //false
console.log(shareDigit(12, 44)) //false