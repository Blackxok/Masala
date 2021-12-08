// String-1 -- middleTwo
// Given a string of even length, return a string made of the middle two chars, so the string "string" yields "ri". The string length will be at least 2.

// Examples

// middleTwo('string') →
// middleTwo('code') →
// middleTwo('Practice') →

function middleTwo(str){
  let string=""
        let prev=str[Math.floor(str.length/2)-1]
        let mid=str[Math.floor(str.length/2)]
        string+=prev+mid
      
  return string
 
}
console.log(middleTwo('string'))//

// -----coding js solution passed, not ans to whats asked
// function middleTwo(str){
//   let string=""
//   if(str.length%2 !==0){return str}
//   if(str.length>=2){
//         let prev=str[Math.floor(str.length/2)-1]
//         let mid=str[Math.floor(str.length/2)]
//         string+=prev+mid
//   }
//   return ""
// }