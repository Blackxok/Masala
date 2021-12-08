// Array-2 -- sum67
// Return the sum of the numbers in the array, except ignore sections of numbers starting with a 6 and extending to the next 7 (every 6 will be followed by at least one 7). Return 0 for no numbers.

// Examples

// sum67([1, 2, 2]) → 5
// sum67([1, 2, 2, 6, 99, 99, 7]) → 5
// sum67([1, 1, 6, 7, 2]) → 4

function sum67(nums){
  //loop, 
  //find 6 and can not count until i see the next 7 after that 6
  let shouldCount=true
  let sum=0
  for(let i=0;i<nums.length;i++){
    if(nums[i]===6){
       shouldCount=false
      continue
    }
     if(shouldCount===true){
      sum+=nums[i]
    }
    if(nums[i]===7){
       shouldCount=true
//       continue
    }
   
//        if(shouldCount===true){
//       sum+=nums[i]
//          continue
//     }
  }  
  return sum
}