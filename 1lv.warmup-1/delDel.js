// Given a string, if the string "del" appears starting at index 1, return a string where that "del" has been deleted. Otherwise, return the string unchanged.

// Examples

// delDel('adelbc') → abc
// delDel('adelHello') → aHello
// delDel('abcdel') → abcdel

function delDel(str){
  del=str.slice(1,4)
   if(del==="del"){
     return str[0]+str.slice(4)
   }
   else return str
   
 }
