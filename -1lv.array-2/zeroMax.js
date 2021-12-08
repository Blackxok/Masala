// Array-2 -- zeroMax
// Return a version of the given array where each zero value in the array is replaced by the largest odd value to the right of the zero in the array. If there is no odd value to the right of the zero, leave the zero as a zero.

// Examples

// zeroMax([0, 5, 0, 3]) → 5,5,3,3
// zeroMax([0, 4, 0, 3]) → 3,4,3,3
// zeroMax([0, 1, 0]) → 1,1,0
//-------------------Nested Loop
function zeroMax(nums){

  for(let i=0;i<nums.length;i++){
    if(nums[i]===0 && nums.length===1){return nums}
    if(nums[i]===0){
      nums[i]=findLargestOdd(i,nums.length,nums)
    }
 
  }
  console.log(nums)
  return nums
}

//helper func:finds largest odd num
function findLargestOdd(start,end,nums){
  let largestOdd=0
  for(let i=start;i<end;i++){
    if(nums[i]%2!==0 && nums[i]>largestOdd){
      largestOdd=nums[i]
    }
  }
  return largestOdd
}
// console.log(zeroMax([0, 5, 0, 3])) // 5,5,3,3
console.log(zeroMax([0, 4, 0, 3])) // 3,4,3,3

// -------------------------Approach 2
// function zeroMax(nums){
//   let largestOdd=0
//   let arr=[...nums]
//   for(let i=arr.length-1;i>=0;i--){
//     if(arr[i]%2!==0 && arr[i]>largestOdd){
//       largestOdd=arr[i]
//     }
//     if(arr[i]===0){
//       arr[i]=largestOdd
//     }
//   }

//   return arr
// }
