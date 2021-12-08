// Given an array of ints, return the sum of the first 2 elements in the array. 
//If the array length is less than 2, just sum up the elements that exist, 
//returning 0 if the array is length 0.

// Examples

// sum2([1, 2, 3]) → 3
// sum2([1, 1]) → 2
// sum2([1, 1, 1, 1]) → 2
function sum2(nums){
  let sum=0
  
  for(let i=0;i<nums.length;i++){
  
    if(nums.length>0 && nums.length<2){
      sum+=nums[i]
    }
    
    if(nums.length>=2){
      sum=nums[0]+nums[1]
    }

   }  
   return sum
}
console.log( sum2([1, 2, 3]))// → 3