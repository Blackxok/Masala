// Array-2 -- has77
// Given an array of ints, return true if the array contains two 7's next to each other, or there are two 7's separated by one element, such as with {7, 1, 7}.

// Examples

// has77([1, 7, 7]) → true
// has77([1, 7, 1, 7]) → true
// has77([1, 7, 1, 1, 7]) → false

function has77(nums){
    for(let i=0;i<nums.length;i++){
      if(nums[nums.length-2]===7 && nums[nums.length-1]!==7){
        return false}
      if(nums[i]===7 && nums[i+1]===7){
        return true}
      if(nums[i]===7 && nums[i+2]===7){
      return true}
       if(nums[nums.length-1] && nums[nums.length-2]===7){
      return true}
       if(nums[nums.length-1]===7 && nums[nums.length-3]===7){
      return true}
   
  
    else return false
  }