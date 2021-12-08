// Array-2 -- withoutTen
// Return a version of the given array where all the 10's have been removed. The remaining elements should shift left towards the start of the array as needed, and the empty spaces a the end of the array should be 0. So {1, 10, 10, 2} yields {1, 2, 0, 0}. You may modify and return the given array or make a new array.

// Examples

// withoutTen([1, 10, 10, 2]) → 1,2,0,0
// withoutTen([10, 2, 10]) → 2,0,0
// withoutTen([1, 99, 10]) → 1,99,0
function withoutTen(nums){
  let arr=[]
  let zero=[]

  for(let i=0;i<nums.length;i++){
    if(nums[i]!==10){
      arr.push(nums[i])
    }
    else zero.push(0)
  }
 
  return arr.concat(zero)
}
console.log(withoutTen([1, 10, 10, 2]))// → 1,2,0,0