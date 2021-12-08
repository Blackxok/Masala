// Array-1 -- midThree
// Given an array of ints of odd length, return a new array length 3 containing the elements from the middle of the array. 
//The array length will be at least 3.

// Examples

// midThree([1, 2, 3, 4, 5]) → 2,3,4
// midThree([8, 6, 7, 5, 3, 0, 9]) → 7,5,3
// midThree([1, 2, 3]) → 1,2,3
function midThree(nums){
  let arr=[]
  let len=nums.length
  if(len===3){return nums}
  let mid=nums[Math.floor(len/2)]
  let prev=nums[Math.floor(len/2-1)]

  let next=nums[Math.floor(len/2+1)]
  let array=arr.push(prev,mid,next)  
  return arr
}
console.log(midThree([1, 2, 3, 4, 5]))// → 2,3,4