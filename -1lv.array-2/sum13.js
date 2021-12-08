// Array-2 -- sum13
// Return the sum of the numbers in the array, returning 0 for an empty array. Except the number 13 is very unlucky, so it does not count and numbers that come immediately after a 13 also do not count.

// Examples

// sum13([1, 2, 2, 1]) → 6
// sum13([1, 1]) → 2
// sum13([1, 2, 2, 1, 13]) → 6
function sum13(nums){
  let arr=[]
  let sum=0
  
  if(nums[nums.length-1]===13){
    nums.pop()
  }
  if(nums[nums.length-2]===13 && nums[0]!==13 && nums.length===3){
    nums.splice(nums.length,1)
    return nums[0]
  }
 
  for(let i=0;i<nums.length;i++){
  
    if(nums[i]===13){
     nums.splice(i,2)
    }
    if(nums.length===0){
      return 0
    }
     sum+=nums[i]
  }
   return sum
   
}
console.log(sum13([1, 2, 2, 1]))// → 6
console.log(sum13([13, 1, 2, 13, 2, 1, 13]))//3
console.log(sum13([1, 2, 13, 2, 1, 13]))// → 4