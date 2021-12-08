// Array-1 -- biggerTwo
// Start with 2 int arrays, a and b, each length 2. Consider the sum of the values in each array. Return the array which has the largest sum. In event of a tie, return a.

// Examples

// biggerTwo([1, 2], [3, 4]) → 3,4
// biggerTwo([3, 4], [1, 2]) → 3,4
// biggerTwo([1, 1], [1, 2]) → 1,2

function biggerTwo(a, b){
  let sumA=0
  let sumB=0
  for(let i=0;i<a.length;i++){
    sumA+=a[i]
  }
  for(let i=0;i<b.length;i++){
    sumB+=b[i]
  } 
  
  if(sumA>=sumB){
    return a}
  else return b
}