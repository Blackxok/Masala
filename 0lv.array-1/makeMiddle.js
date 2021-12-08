// Array-1 -- makeMiddle
// Given an array of ints of even length, return a new array length 2 containing the middle two elements from the original array. The original array will be length 2 or more.

// Examples

// makeMiddle([1, 2, 3, 4]) → 2,3
// makeMiddle([7, 1, 2, 3, 4, 9]) → 2,3
// makeMiddle([1, 2]) → 1,2

function makeMiddle(nums){
  let arr=[]
  let len=nums.length
  if(len===2){return nums}
  let mid=nums[len/2]
  let prev=nums[(len/2 - 1)]
  let array=arr.push(prev,mid)  
  return arr
}