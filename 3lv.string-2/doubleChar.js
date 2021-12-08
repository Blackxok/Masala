// String-2 -- doubleChar
// Given a string, return a string where for every char in the original, there are two chars.

// Examples

// doubleChar('The') → TThhee
// doubleChar('AAbb') → AAAAbbbb
// doubleChar('Hi-There') → HHii--TThheerree

function doubleChar(str){
  word=""
  for(let i=0;i<str.length;i++){
    word+=str[i].repeat(2)
 }
 return word
}
console.log(doubleChar("The"))//TThhee

