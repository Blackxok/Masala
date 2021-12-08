// Logic-1 -- old35
// Return true if the given non-negative number is a multiple of 3 or 5, but not both. Use the % "mod" operator.

// Examples

// old35(3) → true
// old35(10) → true
// old35(15) → false
// old35(45) → false
// old35(65) → true


function old35(n){
  //~like rolling a ball down the ramp and the ball meets the conditional
    //it will drop into the bucket.
    //Howevaah if i know my bucket is more restrictive in a specific bucket
    //put it in there first.
    //make sure the more restrictive clause is met first
   
    //if n%3===0
    //if n%5===0
       
    //not both
   
   //more restrictive goes first
    if (n%3===0 && n%5===0){
      return false}
   
    //Put n=15 meets 3 so true...
    if(n%3===0 || n%5===0){
      return true}
   
    else return false
  }