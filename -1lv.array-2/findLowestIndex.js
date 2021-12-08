// Array-2 -- findLowestIndex
// Return the index of the minimum value in an array. The input array will have at least one element in it.

// Examples

// findLowestIndex([99, 98, 97, 96, 95]) → 4
// findLowestIndex([2, 2, 0]) → 2
// findLowestIndex([1, 3, 5]) → 0

function findLowestIndex(nums){
  //have a variable called lowest to hold the idx result
  //loop through array starting at idx 1
  //have a pointer that starts at 0
  //compare each element to the pointer position starting at 0
  //if pointer or num value is equal to 0 return 0
  //if the element at the pointer value is lower than 
    //the position pointed by loop keep that idx and element location
    //else if it's higher make the idx loop locator the new pointer
  
  let lowest=0
  for(let i=1;i<nums.length;i++){
   
   let pointer=0
   if(nums[i]===0 || nums[pointer===0]){return i}
   if(nums[pointer]<nums[i] ){
     lowest=pointer
   }
   else if(nums[pointer]>nums[i] ){
     lowest=i
    }
  }
  return lowest
 }
 // console.log(findLowestIndex([99, 98, 97, 96, 95]))//→ 4
 console.log(findLowestIndex([11, 9, 0, 1]))// 2