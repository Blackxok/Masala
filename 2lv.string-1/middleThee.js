// String-1 -- middleThree
// Given a string of odd length, return the string length 3 from its middle, so "Candy" yields "and". The string length will be at least 3.

// Examples

// middleThree('Candy') → and
// middleThree('and') → and
// middleThree('solving') → lvi

function middleThree(str){
  //str odd length and atleast 3 chars
  if((str.length % 2 !== 0) && (str.length >= 3)){
  //cut in half and take next and the following char
     let middleCharIdx=Math.floor(str.length/2)
     let previous=middleCharIdx-1
     let nextNext=middleCharIdx+2 //the cut off for slice

    return str.slice(previous,nextNext)
  
  }

  
  
}

console.log(middleThree("Candy"))//and