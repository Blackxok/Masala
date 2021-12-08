// String-2 -- sameStarChar
// Returns true if for every '*' (star) in the string, 
//if there are chars both immediately before and after the star, they are the same.

// Examples

// sameStarChar('xy*yzz') → true
// sameStarChar('xy*zzz') → false
// sameStarChar('*xa*az') → true
function sameStarChar(str){
  let arr=[]
  let checkStars=[]

  for(let i=0;i<str.length;i++){
    if(str[i]==="*"){
      arr.push(i)
    }
  }

  for(let i=0;i<arr.length;i++){


   //zero is first idx element in arr? [0,3]
   if(arr[i]===0){
     checkStars.push(arr[i])
    //  console.log(checkStars,"here")
    }

    //is the element 
    else if (str[arr[i]-1]===str[arr[i]+1]){
      checkStars.push(arr[i]) 
      // console.log(checkStars,"here")
    }

    // console.log(str[str.length-1],"thise")
    else if (arr[i]===str.length-1){
      checkStars.push(arr[i])
      // console.log(arr[i],"here")
    }
   
  }
  // console.log(arr,"start")
  if(checkStars.length!==arr.length){return false}
  return true
}
console.log(sameStarChar('*xa*bz')) //false
console.log(sameStarChar('xy*yzz'))// → true
console.log(sameStarChar('xy*zzz'))//false
console.log(sameStarChar('*xa*az'))//true
console.log(sameStarChar('*xa*a*b'))//false
console.log(sameStarChar('*xa*a*') ) //true
console.log(sameStarChar('XY*YYYY*Y*')) //true
console.log(sameStarChar('*xa*a*'))//true