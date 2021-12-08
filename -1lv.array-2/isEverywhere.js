// Array-2 -- isEverywhere
// We'll say that a value is "everywhere" in an array if for every pair of adjacent elements in the array, at least one of the pair is that value. Return true if the given value is everywhere in the array.

// Examples

// isEverywhere([1, 2, 1, 3], 1) → true
// isEverywhere([1, 2, 1, 3], 2) → false
// isEverywhere([1, 2, 1, 3, 4], 1) → false

function isEverywhere(nums, val){
  if(nums.length<=1){return true}
  if(nums.length===2 && nums.includes(val)){return true} 
  for(let i=0;i<nums.length;i++){

   if( nums.length%2===0 && nums[i]===val && nums[i+2]===val && nums[nums.length-1]!==val){
      return true
    }
    
    if( nums.length%2===0 && nums[i]===val && nums[i+2]===val && nums[nums.length-1]===val){
     return false
    }

    if(nums[i+1]===val && nums[i+3]===val){
      return true
    }
  }
  return false
}
console.log(isEverywhere([1, 2, 1, 3], 1))// → true
console.log(isEverywhere([1, 2, 1, 3], 2))// → false