// Array-1 -- makeEnds
// Given an array of ints, return a new array length 2 containing the first and last elements from the original array. The original array will be length 1 or more.

// Examples

// makeEnds([1, 2, 3]) → 1,3
// makeEnds([1, 2, 3, 4]) → 1,4
// makeEnds([7, 4, 6, 2]) → 7,2



function makeEnds(nums){
  if(nums.length===1){
    let copy=[nums[0],nums[0]]
    return copy
  }
  if(nums.length>1){
    let lastNum=nums.pop()
    let firstNum=nums.slice(0,1)
    
    let arr=firstNum.concat(lastNum)
    return arr
  }
}

console.log(makeEnds([1,2,3]))//1,3
console.log(makeEnds([7]))//77