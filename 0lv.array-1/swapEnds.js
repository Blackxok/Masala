// Array-1 -- swapEnds
// Given an array of ints, swap the first and last elements in the array. Return the modified array. The array length will be at least 1.

// Examples

// swapEnds([1, 2, 3, 4]) → 4,2,3,1
// swapEnds([1, 2, 3]) → 3,2,1
// swapEnds([8, 6, 7, 9, 5]) → 5,6,7,9,8

function swapEnds(nums){
  let  arr=[] 
  
 if(nums.length>1){
  let last=nums.slice(nums.length-1)
  let first=nums.slice(0,1)
  nums.pop()
  nums.shift()
  arr=arr.concat(last,...nums,first) 
    return arr 
 } 
   if(nums.length===1){return nums)} 
}
console.log(swapEnds([1]))// → 1,1
console.log(swapEnds([1, 2, 3, 4]))// → 4,2,3,1