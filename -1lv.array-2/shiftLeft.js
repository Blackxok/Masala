// Array-2 -- shiftLeft
// Return an array that is "left shifted" by one -- so {6, 2, 5, 3} returns {2, 5, 3, 6}. You may modify and return the given array, or return a new array.

// Examples

// shiftLeft([6, 2, 5, 3]) → 2,5,3,6
// shiftLeft([1, 2]) → 2,1
// shiftLeft([1]) → 1

function shiftLeft(nums){
  if(nums.length===0){return nums}
  let num=nums.shift()
  nums.push(num)
  return nums
}
console.log(shiftLeft([6, 2, 5, 3]) ) //2,5,3,6