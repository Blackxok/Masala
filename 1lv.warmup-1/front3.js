// Warmup-1 -- front3
// Given a string, we'll say that the front is the first 3 chars of the string. If the string length is less than 3, the front is whatever is there. Return a new string which is 3 copies of the front.

// Examples

// front3('Java') → JavJavJav
// front3('Chocolate') → ChoChoCho
// front3('abc') → abcabcabc

if (str.length<=1){
  return `${str}${str}${str}`
}
else if (str.length>1){
let front3=str.slice(0,3)
return `${front3}${front3}${front3}`
}