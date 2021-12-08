// Array-2 -- has12
// Given an array of ints, return true if there is a 1 in the array with a 2 somewhere later in the array.

// Examples

// has12([1, 3, 2]) → true
// has12([3, 1, 2]) → true
// has12([3, 1, 4, 5, 2]) → true

function has12(nums){
    let arr=[]
    for(let i=0;i<nums.length;i++){
      if(nums[i]===1){
        arr=nums.splice(i)}
    }
    for(let i=0;i<arr.length;i++){
      if(arr[i]===2){
      return true}
      
    }
    return false
  }
