// Array-2 -- zeroFront
// Return an array that contains the exact same numbers as the given array, but rearranged so that all the zeros are grouped at the start of the array. The order of the non-zero numbers does not matter. So {1, 0, 0, 1} becomes {0 ,0, 1, 1}. You may modify and return the given array or make a new array.

// Examples

// zeroFront([1, 0, 0, 1]) → 0,0,1,1
// zeroFront([0, 1, 1, 0, 1]) → 0,0,1,1,1
// zeroFront([1, 0]) → 0,1

function zeroFront(nums){
  //loop
    //if not 0 push to new arr, keep 0 in current arr
    //push non zero arr to end of 0 arr
  if(nums.length===0){return nums}
  
  let nonZero=[]
  let zeroes=[]
  for(let i=0;i<nums.length;i++){
     if(nums[i]!==0){
       nonZero.push(nums[i])
     } 
    if(nums[i]===0){
      zeroes.push(nums[i]) 
    }
  }
  return zeroes.concat(nonZero)

}

// 
// function zeroFront(nums){
//   //loop
//     //if not 0 push to new arr, keep 0 in current arr
//     //push non zero arr to end of 0 arr
//   if(nums.length===0){return nums}
  
//   let nonZero=[]
//   for(let i=0;i<nums.length;i++){
//      if(nums[i]!==0){
//        nonZero.push(nums[i])
//      } 
//     if(nums[i]===0){
//       nonZero.unshift(nums[i]) 
//     }
//   }
//   return nonZero
// }//