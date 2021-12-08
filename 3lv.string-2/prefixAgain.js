// String-2 -- prefixAgain
// Given a string, consider the prefix string made of the first N chars of the string. Does that prefix string appear somewhere else in the string? Assume that the string is not empty and that N is in the range 1..str.length().

// Examples

// prefixAgain('abXYabc', 1) → true
// prefixAgain('abXYabc', 2) → true
// prefixAgain('abXYabc', 3) → false

function prefixAgain(str, n){

  let cut=str.slice(0,n)
  let rest=str.slice(n)
 
  if(rest.includes(cut)){return true}

  return false

}
// function prefixAgain(str, n){
//   // look at the pref-
//   // define pref by slicing n from the beginning of the str
//   // compare the pref to the rest of the string
//   //if the rest of the str includes pref true 
//   //else false
  
//   let lower=str.toLowerCase()
//   let pref=lower.slice(0,n)
//   let restStr=lower.slice(n+1)
  
//   if(str.length-1===1 && str[0]===str[1]){
//     return true
//   }
//   if(restStr.includes(pref)){
//     return true
//   }
//   else return false

// }
console.log( prefixAgain('abXYabc', 1)) //true
console.log(prefixAgain('abXYabc', 2))// true
console.log(prefixAgain('abXYabc', 3)) //false