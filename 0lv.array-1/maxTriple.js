// Array-1 -- maxTriple
// Given an array of ints of odd length, look at the first, last, and middle values in the array and return the largest. The array length will be a least 1.

// Examples

// maxTriple([1, 2, 3]) → 3
// maxTriple([1, 5, 3]) → 5
// maxTriple([5, 2, 3]) → 5
function maxTriple(nums){
  let first=nums[0]
  let middle=nums[Math.floor(nums.length/2)]
  let last=nums[nums.length-1]
  if(first>middle && first>last){
    return first
  }
  if(middle>first && middle>last){
    return middle
  }
  else return last
}
console.log( maxTriple([1, 7, 3, 1, 5]))// → 5