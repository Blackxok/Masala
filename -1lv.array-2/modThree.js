function modThree(nums){
  for(let i=0;i<nums.length;i++){
    if(nums[i]===3){return true}
    if(Math.floor(nums[i]%3===0) && Math.floor(nums[i+1]%3===0) && Math.floor(nums[i+2]%3===0)){
      return true
    }
     if(Math.floor(nums[i]%2===0) && Math.floor(nums[i+1]%2===0) && Math.floor(nums[i+2]%2===0)){
      return true
    }
  }
  return false
 }

// console.log(modThree([2, 1, 3, 5]))// → true
// console.log(modThree([2, 1, 2, 5]))// → false