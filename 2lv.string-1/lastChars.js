// String-1 -- lastChars
// Given 2 strings, a and b, return a new string made of the first char of a and the last char of b, so "yo" and "java" yields "ya". If either string is length 0, use '@' for its missing char.

// Examples

// lastChars('last', 'chars') → ls
// lastChars('yo', 'java') → ya
// lastChars('hi', '') → h@

function lastChars(a, b){
  //if a or b is length 0 use "@" for the missing char
  if (!a.length && !b.length){
    return "@@"
  }
  
  if(!a.length){
    a="@"
    return `${a}${b[b.length-1]}`
  }
  if(!b.length){
    b="@"
    return `${a[0]}${b}`
  } 
  
  //a[0]+b.length-1
  return a[0] + b[b.length - 1]
  
}
console.log(lastChars('last', 'chars')) //ls
console.log(lastChars('yo', 'java')) //ya
console.log(lastChars('hi', ''))//h@
console.log(lastChars('', 'hello'))