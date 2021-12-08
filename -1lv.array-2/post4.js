// Array-2 -- post4
// Given a non-empty array of ints, return a new array containing the elements from the original array that come after the last 4 in the original array. The original array will contain at least one 4. Note that it is valid in java to create an array of length 0.

// Examples

// post4([2, 4, 1, 2]) → 1,2
// post4([4, 1, 4, 2]) → 2
// post4([4, 4, 1, 2, 3]) → 1,2,3
function post4(nums){
  if(nums[nums.length-1]===4){
    return nums.splice(nums.splice(nums.length-1))
  }
  for(let i=nums.length-1;i>0;i--){
    if(nums[i-1]===4){
      return nums.splice(i)
    }
  }
}
console.log(post4([4, 4, 1, 2, 3])) //→ 1,2,3