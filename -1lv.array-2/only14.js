// Array-2 -- only14
// Given an array of ints, return true if every element is a 1 or a 4.

// Examples

// only14([1, 4, 1, 4]) → true
// only14([1, 4, 2, 4]) → false
// only14([1, 1]) → true

function only14(nums){
  let arr=[]
  for(let i=0;i<nums.length;i++){
    if(nums[i]===1 || nums[i]===4){
      arr.push(nums[i])
    }
  }
 if(arr.length===nums.length){return true}
 return false
}
console.log(only14([1, 4, 1, 4]))// → true
console.log(only14([1, 3, 1, 4]))// → false
console.log(only14([1, 1]))// → true
