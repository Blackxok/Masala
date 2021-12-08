// Given an array of ints length 3, return an array with the elements "rotated left" so {1, 2, 3} yields {2, 3, 1}.

// Examples

// rotateLeft3([1, 2, 3]) → 2,3,1
// rotateLeft3([5, 11, 9]) → 11,9,5
// rotateLeft3([7, 0, 0]) → 0,0,7

function rotateLeft3(nums){
      
    //version One
    let temp=nums[0]
    nums[0]=nums[1]
    nums[1]=nums[nums.length-1]
    nums[nums.length-1]=temp
    return nums
   //version Two
    // let first=nums.shift()//1
    // let rest=nums.slice(0)
    // rest.push(first)
    // return rest
  
  // version Three
    // let first=nums.slice(0,1)//1
    // let rest=nums.slice(1)
    // let here=rest.concat(first)
    // return here

  //version Four
  }
  console.log(rotateLeft3([1,2,3]))//2,3,1