// Logic-1 -- maxMod5
// Given two int values, return whichever value is larger. 
//However if the two values have the same remainder when divided by 5, 
//then the return the smaller value. However, in all cases, if the two values are the same, 
//return 0. Note: the % "mod" operator computes the remainder, e.g. 7 % 5 is 2.

// Examples

// maxMod5(2, 3) → 3
// maxMod5(6, 2) → 6
// maxMod5(3, 2) → 3
function maxMod5(a, b){
  let aModulo=a%5 
  let bModulo=b%5
 
  if(a===b){return 0}
  
  if(aModulo===bModulo){
    
    if(a>b){return b} 
     return a 
  }
  if(a>b){
   return a
  }

  if(b>a){return b}
}
console.log(maxMod5(2, 3)) //3
console.log(maxMod5(6, 2)) //6
console.log(maxMod5(3, 2)) //3