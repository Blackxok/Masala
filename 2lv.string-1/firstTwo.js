// String-1 -- firstTwo
// Given a string, return the string made of its first two chars, so the String "Hello" yields "He". If the string is shorter than length 2, return whatever there is, so "X" yields "X", and the empty string "" yields the empty string "". Note that str.length() returns the length of a string.

// Examples

// firstTwo('Hello') → He
// firstTwo('abcdefg') → ab
// firstTwo('ab') → ab
function firstTwo(str2){
  let firstTwo=str2.slice(0,2)

  if(str2.length>2){
    
    return firstTwo
  }
  else (str2.length<2)
  return str2
}