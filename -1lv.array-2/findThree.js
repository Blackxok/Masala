// Array-2 -- haveThree
// Given an array of ints, return true if the value 3 appears in the array exactly 3 times, and no 3's are next to each other.

// Examples

// haveThree([3, 1, 3, 1, 3]) → true
// haveThree([3, 1, 3, 3]) → false
// haveThree([3, 4, 3, 3, 4]) → false


function haveThree(nums){
  let count=0
  let pointer=0
  for(let i=0;i<nums.length;i++){
    if(nums[i]===3){
      count++
    } 
  }
    
  if(count!==3){
    return false
  }
    
  for(let i=0;i< nums.length;i++){
    if(nums[i]===3 && nums[i+1]===3){
      return false
    }
   }
  
  return true
  }
  console.log(haveThree([3, 1, 3, 1, 3])) //true
  console.log(haveThree([3, 1, 3, 3])) //false