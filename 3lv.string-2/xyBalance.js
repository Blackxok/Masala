// String-2 -- xyBalance
// We'll say that a String is xy-balanced if for all the 'x' chars in the string, there exists a 'y' char somewhere later in the string. So "xxy" is balanced, but "xyx" is not. One 'y' can balance multiple 'x's. Return true if the given string is xy-balanced.

// Examples

// xyBalance('aaxbby') → true
// xyBalance('aaxbb') → false
// xyBalance('yaaxbb') → false

function xyBalance(str){
  let idx=[]
  let letter="x"

//if only y is included
  if(str.length===1 && str[0]==="y"){return true}
  

//checks for all idx location where x is 
  for(let i=0;i<str.length;i++){
   if(str[i]===letter){
       let xIdx=str.indexOf(letter,i)
   
       idx.push(xIdx)
    }    
  }


//takes last location of x and words thereafter
let startCut=idx[idx.length-1]
let cutStr=str.slice(startCut)



//Ask:does the new cut string after last x include y?
if(cutStr.includes("y")){
  return true
}

//if no x or y then true
if(!str.includes("x") && (!str.includes("y"))){
   return true
 } 

//everything is false
   return false

}

console.log( xyBalance('aaxbby')) // true
console.log(xyBalance('aaxbb')) // false
console.log(xyBalance('yaaxbb')) // false
console.log(xyBalance('yxyxyxyx') )//false there are no y after the last x
console.log(xyBalance('bbb'))//true
console.log(xyBalance('bxyb'))//true
console.log(xyBalance('xaxxbbyx')) //false