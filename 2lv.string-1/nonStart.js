// String-1 -- nonStart
// Given 2 strings, return their concatenation, except omit the first char of each. The strings will be at least length 1.

// Examples

// nonStart('Hello', 'There') → ellohere
// nonStart('java', 'code') → avaode
// nonStart('shotl', 'java') → hotlava


function nonStart(a, b){
  let firstStr=a.slice(1)
  let secondChar=b.slice(1)
return firstStr+secondChar
}