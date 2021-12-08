// Array-2 -- tripleUp
// Return true if the array contains, somewhere, three increasing adjacent numbers like .... 4, 5, 6, ... or 23, 24, 25.

// Examples

// tripleUp([1, 4, 5, 6, 2]) → true
// tripleUp([1, 2, 3]) → true
// tripleUp([1, 2, 4]) → false

function tripleUp(nums){
  let bool=false
  for(let i=0;i<nums.length;i++){
    //loop
    //check if the next is 1 more than current
    //next next is two more than current---->true
    //---->else false
    let curr=nums[i]
    let next=nums[i]+1
    let nextNext=nums[i]+2
  
    if(nums[i] && nums[i+1]===next && nums[i+2]===nextNext){
      bool=true 
    }
   }
     return bool
  }
  console.log(tripleUp([1, 4, 5, 6, 2]))// → true
  console.log(tripleUp([1, 2, 3]))// → true
  console.log(tripleUp([1, 2, 4]))// → false