// String-1 -- hasBad
// Given a string, return true if "bad" appears starting at index 0 or 1 in the string, such as with "badxxx" or "xbadxx" but not "xxbadxx". The string may be any length, including 0.

// Examples

// hasBad('badxx') → true
// hasBad('xbadxx') → true
// hasBad('xxbadxx') → false

function hasBad(str){
  //"bad" in idx 0,1,2 or 1,2,3-true
  //slice the first three and see if it matches the word bad
  let firstThree=str.slice(0,3)
  //slice the (1,2,3) idx and see if it matched the word bad 
  let nextThree=str.slice(1,4)
  
  if(firstThree === "bad" || nextThree ==="bad"){
    return true
  }
  return false
}
console.log(hasBad("badxx"))//true