// Warmup-1 -- max1020
// Given 2 positive int values, return the larger value that is in the range 10..20 inclusive, or return 0 if neither is in that range.

// Examples

// max1020(11, 19) → 19
// max1020(19, 11) → 19
// max1020(11, 9) → 11
function max1020(a, b){

  //if a is in btw 10 and 20 and b is btwn 10 and 20
  //return the larger value
 
  if((a>=10 && a<=20) && (b>=10 && b<=20)){
        return Math.max(a,b)}
 
  //if a or b is in btwn return that value
//   if a is false look at b and see if its inside 10 and 20
//    -is a in btwn yes then true
//    -else if b is in then true
  else if((a>=10 && a<=20) || (b>=10 && b<=20){
     if(a<10 || a>20){
        return b
       }
       return a
     
     }
 
  //if neither a or b is inside the range then return 0
    else if((a<10 || a>20) && (b<10 || b>20)){
        return 0}
 
}

// Alejo's approach-----------
// function max1020(a, b){
//   if (isInRange(a) && isInRange(b)) {
//     if (a > b) return a
//     else return b
//   }
  
//   if (isInRange(a)) return a
//   if (isInRange(b)) return b
//   return 0
// }
// ​
// function isInRange(n) {
//   return (n >= 10 && n <=20)
// }