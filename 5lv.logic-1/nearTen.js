// Logic-1 -- nearTen
// Given a non-negative number "num", return true if num is within 2 of a multiple of 10. Note: (a % b) is the remainder of dividing a by b, so (7 % 5) is 2.

// Examples

// nearTen(12) → true
// nearTen(17) → false
// nearTen(19) → true

function nearTen(num){
   //if num is within 2 of the multiple of 0
 
  //(158) → true where modulo is 8
  //162->where modulo is 2
 
//if 0=num%10--->two up is remainder 1 or 2 and two down is remainder or 8 or 9
 
  if(num%10===1 || num%10===2 || num%10===0 ||num%10===8 || num%10==9){
   
    return true}
 
  else return false
}

console.log( nearTen(12)) //true
console.log( nearTen(17))//false
console.log( nearTen(19))//true