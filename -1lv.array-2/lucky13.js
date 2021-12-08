// Array-2 -- lucky13
// Given an array of ints, return true if the array contains no 1's and no 3's.

// Examples

// lucky13([0, 2, 4]) → true
// lucky13([1, 2, 3]) → false
// lucky13([1, 2, 4]) → false
function lucky13(nums){
  if(nums.includes(1) || nums.includes(3)){
    return false}
  return true
}