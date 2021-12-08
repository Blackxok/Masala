// Given a string, return the longest substring 
// that appears at both the beginning and end of 
// the string without overlapping. For example, 
// sameEnds("abXab") is "ab".

// Examples

// sameEnds('abXYab') → ab
// sameEnds('xx') → x
// sameEnds('xxx') → x

function sameEnds(str){
let string=""
let i=0
  for(let j=0;j<str.length;j++){
    if(str[j]===str[i] && j!==0){
      string+=str[j]
      i++
    } else {
      string=""
      i=0
    }
    
    //have 2 pointers/indexes i,j
    // i stays at 0 and j keeps moving -j is in loop
    //when i and j match...move at the same time so i++ and j goes up bc of loop. 
    //if they don't match reset string and i becomes 0 whil j keeps looping
    //if i and j never match then empty string
    //if they do match and j reached end of loop then string is returned with chars
  }
  
  
return string
} 
console.log(sameEnds("abxabz")) //""
console.log(sameEnds("ababzab")) //ab
// console.log(sameEnds('abXYab')) //ab
// console.log(sameEnds('xavaXYZjava')) //""
// console.log(sameEnds('mymmy'))//my
// console.log(sameEnds("Hello! and Hello!"))//
// console.log(sameEnds("javajava"))
// console.log(sameEnds(""))
