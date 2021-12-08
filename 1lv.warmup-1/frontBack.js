// Warmup-1 -- frontBack
// Given a string, return a new string where the first and last chars have been exchanged.

// Examples

// frontBack('code') → eodc
// frontBack('a') → a
// frontBack('ab') → ba

function frontBack(str){
  if(!str.length || str.length==1){
    return str
  }
  
  if(str.length>1){
  let firstChar=str[str.length-1];
  let lastChar=str[0]
  let middle=str.slice(1,str.length-1)
  }
  
  return firstChar+middle+lastChar
}