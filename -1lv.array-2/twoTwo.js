// Array-2 -- twoTwo
// Given an array of ints, return true if every 2 that appears in the array is next to another 2.

// Examples

// twoTwo([4, 2, 2, 3]) → true
// twoTwo([2, 2, 4]) → true
// twoTwo([2, 2, 4, 2]) → false

function twoTwo(nums){
  let checkTwo=true

  //   check the current number is 2
  //   check if the next is also 2 
//   as long as the next is not the last 
//   ...if curr is last and not 2 break from loop
if(nums.length===1 && nums[0]===2){return false}

  for(let i=0;i<nums.length;i++){
    if(nums[i]===2 && nums[i+1]===2 && i!==nums.length-1){
      checkTwo=true
    }
     if(nums[i]!==2 && nums[i+1]===2 && i!==nums.length-1){
      checkTwo=false
    }
   }

  return checkTwo
  
}
console.log(twoTwo([4, 2, 2, 3]))// → true
console.log(twoTwo([2, 2, 4]))// → true
console.log(twoTwo([2, 2, 4, 2]))// → false