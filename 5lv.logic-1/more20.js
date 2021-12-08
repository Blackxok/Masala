// Logic-1 -- more20
// Return true if the given non-negative number is 1 or 2 more than a multiple of 20.

// Examples



function more20(n){
  //n=is Math.abs num ---
  //1 more than multiple of 20====true
//   21%20---1
//   41%20---1
//   61%20---1
  if(n%20===1){
    return true}
 
  //2 more multiple than 20===true
//   22%20---2
//   42%20---2
//   62%20---2
  if(n%20===2){
    return true}
 
  else return false

}

// more20(20) → false
// more20(21) → true
// more20(22) → true