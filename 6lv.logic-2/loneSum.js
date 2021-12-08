// Given 3 int values, a b c, return their sum. However, if one of the values is the same as another of the values, it does not count towards the sum.

// Examples

// loneSum(1, 2, 3) → 6
// loneSum(3, 2, 3) → 2
// loneSum(3, 3, 3) → 0

function loneSum(a, b, c){
  
  if(a!==b && b!==c && a!==c){
    let sum=a+b+c
    return sum
  } 
  if(a===b && a!==c){
    return c
  }
  if(a!==b && a===c){
 
    return b
  }
   if(b===c && a!==c){
    return a
  }
 return 0
}
console.log(loneSum(1, 2, 3) ) //6
console.log(loneSum(3, 3, 3)) //0
console.log(loneSum(3, 2, 3)) //2