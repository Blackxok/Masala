// COUNTCODE String-2 -- countCode
// Return the number of times that the string "code" appears anywhere in the given string, except we'll accept any letter for the 'd', so "cope" and "cooe" count.

// Examples

// countCode('aaacodebbb') → 1
// countCode('codexxcode') → 2
// countCode('cozexxcope') → 2

function countCode(str){
  // loop through string 
  // search c , o , d, e 
  // if code[2] is any char in regx ok as long as code[3] is e
  // count ++
  
 count=0 
 let regx=/[a-z]/g
  for(let i=0; i< str.length;i++){
   if(str[i]==="c" && str[i+1]==="o" && str[i+2].match(regx) && str[i+3]==="e" ){
     count++
   }


 }
 return count
 
 }
console.log(countCode('aaacodebbb'))// → 1
console.log( countCode('codexxcode')) //→ 2
console.log(countCode('cozexxcope'))// → 2