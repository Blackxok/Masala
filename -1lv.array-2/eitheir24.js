// Array-2 -- either24
// Given an array of ints, return true if the array contains a 2 next to a 2 or a 4 next to a 4, but not both.

// Examples

// either24([1, 2, 2]) → true
// either24([4, 4, 1]) → true
// either24([4, 4, 1, 2, 2]) → false
function either24(nums){
  // starts at false
    let checkTwo = 0;
    let checkFour = 0;
    for(let i = 0; i < nums.length - 1; i++){
  
   //if there is a match of 2pairs then change to true   
      if(nums[i] === 2 && nums[i+1] === 2)
        checkTwo = 1;
        // console.log(checkTwo,i, "here")
  
   //if there is a match of 4pairs then change to true   
      if(nums[i] === 4 && nums[i+1] === 4)
        checkFour= 1;
        // console.log(checkFour,i, "there")
    }
  
   // console.log(checkTwo, checkFour, "match")
    //take sum where if 1-true, any other number will be false
    if(checkTwo+checkFour===1){
      return true}
    else return false
  }
console.log(either24([4, 4, 1, 2, 2])) //false
