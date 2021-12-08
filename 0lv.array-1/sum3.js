// Given an array of ints length 3, return the sum of all the elements.

// Examples

// sum3([1, 2, 3]) → 6
// sum3([5, 11, 2]) → 18
// sum3([7, 0, 0]) → 7

function sum3(nums){
  count=0
  for(let i=0;i<nums.length;i++){
    count+=nums[i]
  }
  return count
}