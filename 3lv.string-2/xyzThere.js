// XYZ THERE
// String-2 -- xyzThere
// Return true if the given string contains an appearance of "xyz" where the xyz is not directly preceeded by a period (.). So "xxyz" counts but "x.xyz" does not.

// Examples

// xyzThere('abcxyz') → true
// xyzThere('abc.xyz') → false
// xyzThere('xyz.abc') → true
// xyzThere('xyz.abc') → true

// function xyzThere(str){
//   let word="xyz"
//   let count=0
//   let idx=[]
  
  
  
//   //takes count for xyz appears more than once
//   for(let i=0;i<str.length;i++){
  
//     if(str[i]==="x" && str[i+1]==="y" && str[i+2]==="z"){
//       count++
  
//     //gives location of where xyz starts in each scenario
//       idx.push(i) 
//     }
  
//   }
  
//   // console.log(idx) //[0,4,7,10]
//   //if xyz is at location 4,7,10 check if prior is "."
//   //if it is then false
//   //if it isn't then true
  
//   for(let i=0;i<=idx.length-1;i++){
//     let idxPrior=idx[i]-1 //gives index of element prior
//     // console.log(idxPrior,"idx")
  
  
//     let charPrev=str[idxPrior] //gives element character
//     // console.log(char,"char")
  
//     let strWord=str.slice(idx[i],idxPrior+4)
//     // console.log(strWord,"next")
  
//   // console.log(xyzThere('xyz.abc'))// → true
//     if(idx[i]===0){
//       return true
//     }
  
//     //while idx is more than 0 && prev is not ., iterate each time and check for more xyz in str
//     // else if (charPrev !=="." && idx[i]!==0 && idx.length>0){
//     //   return true
//     // }
  
//   if (charPrev !=="." & idx.length>0){
//     idx++
//     if(strWord==="xyz"){
//       return true
//     }
//     else return false
//     }
  
//   }
//   return false 
// }

function xyzThere(str){
  for(let i=0; i<str.length;i++){
    if(str.slice(i,i+3)==="xyz" && str[i-1]!=="."){
      return true
    }
  }
  return false
}
//------------------------------
// function xyzThere(str){
//   let word="xyz"
//   let count=0;
  
//   //takes count for xyz appears more than once
//    for(let i=0;i<str.length;i++){
  
//     if(str.slice(i,i+3)===word){
//         if(str[i-1]!=="."){
//           return true
//         }
      
//     }
  
//    }
//   //takes into account all remaining cases to keep looping
//     return false
//   }
  console.log(xyzThere('xabcxyz')) //→ true
  console.log(xyzThere('abc.xyz'))// → false
  console.log(xyzThere('xyz.abc'))// → true
  console.log(xyzThere('abc.xyzxyzxyz'))//→ true 

  