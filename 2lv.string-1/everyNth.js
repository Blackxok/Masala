// Warmup-1 -- everyNth
// Given a non-empty string and an int N, return the string made starting with char 0, and then every Nth char of the string. So if N is 3, use char 0, 3, 6, ... and so on. N is 1 or more.

// Examples

// everyNth('Miracle', 2) → Mrce
// everyNth('abcdefg', 2) → aceg
// everyNth('abcdefg', 3) → adg

function everyNth(str, n){
  let i=1;
  let newWord=str[0]
  while(i<str.length){
      if(i%n===0){
        newWord+=str[i]
      }
    i++
   }
  return newWord              
 
}
// ------or
// function everyNth(str, n){

//   let newWord=str[0]
//  for(let i=1;i<str.length;i++){
//    if(i%n==0){
//     newWord+=str[i]  
//   }
 
// }
//   return newWord

   
//   }

