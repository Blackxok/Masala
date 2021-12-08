// Given a string, return a string length 2 made of its first 2 chars. If the string length is less than 2, use '@' for the missing chars.

// Examples

// atFirst('hello') → he
// atFirst('hi') → hi
// atFirst('h') → h@

function atFirst(str){
  //check if str is length 2
  if(str.length >= 2){
  //if yes return str length 2
    return str.slice(0,2)
  } 

      
  else if (str.length===1){
  //if no return str at 1 + @ 
   let newStr=str.slice(0)
   newStr=`${newStr}@`
    return newStr
  }
  
  return "@@"
}
console.log(atFirst('hello') )//he
console.log(atFirst('hi') )//hi
console.log(atFirst('h'))//h@