// Logic-1 -- sumLimit
// Given 2 non-negative ints, a and b, return their sum, 
//so long as the sum has the same number of digits as a. 
//If the sum has more digits than a, just return a without b. 
//(Note: one way to compute the number of digits of a non-negative int n is to convert it to a string 
//with String.valueOf(n) and then check the length of the string.)

// Examples

// sumLimit(2, 3) → 5
// sumLimit(8, 3) → 8
// sumLimit(8, 1) → 9

function sumLimit(a, b){
  let sum=a+b
  let sumLength=new String(sum).length
  let aLength=new String(a).length
  let bLength=new String(b).length

  if(sumLength>aLength){
    return a
  }

  else return sum
}
console.log(sumLimit(2, 3))//5
console.log(sumLimit(8, 3))//8
console.log(sumLimit(8, 1))//9