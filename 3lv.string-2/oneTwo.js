// String-2 -- oneTwo
// Given a string, compute a new string by moving the first char to come after the next two chars, 
//so "abc" yields "bca". Repeat this process for each subsequent group of 3 chars, so "abcdef" yields "bcaefd". 
//Ignore any group of fewer than 3 chars at the end.

// Examples

// oneTwo('abc') → bca
// oneTwo('tca') → cat
// oneTwo('tcagdo') → catdog

function oneTwo(str){
  let arr=[]
  let string=""
  // console.log(stringArr)
  // cut string in groups of three up to the end of the string
  if(str.length<3){return ""}

  if(str.length>=3 ){
    let stringArr=str.split("")
    
    
    for(let i=0;i<stringArr.length;i++){
      if(i===0 || i%3===0){
      let char=stringArr.splice(i,1) //t and g
    
      stringArr.splice(i+2,0,char)      
      }
    }
      let joined=stringArr.join("")

     string+=joined
    
if(string.length%3===0){
   return string
 }

 if(string.length%3!==0){
   let remainder=string.length%3
   return string.slice(0,str.length-remainder)
 }
}
}
 
console.log(oneTwo('abc') ) //bca
console.log(oneTwo('tca') ) //cat
console.log(oneTwo('tcagdo')) //catdog
console.log(oneTwo('1234567890')) //2315648970
console.log(oneTwo('abcdefghijklkmnopqrstuvwxyz12345678'))// bcaefdhigkljmnkpqostrvwuyzx231564