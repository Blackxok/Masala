// Array-1 -- reverse3
// Given an array of ints length 3, return a new array with the elements in reverse order, so {1, 2, 3} becomes {3, 2, 1}.

// Examples

// reverse3([1, 2, 3]) → 3,2,1
// reverse3([5, 11, 9]) → 9,11,5
// reverse3([7, 0, 0]) → 0,0,7
function reverse3(nums){
  let arr=[]
  for(let i=nums.length-1;i>=0;i--){
    arr.push(nums[i])
  }
  return arr
}
console.log( reverse3([1, 2, 3]))// → 3,2,1