// COUNTHI String-2 -- countHi
// Return the number of times that the string "hi" appears anywhere in the given string.

// Examples

// countHi('abc hi ho') → 1
// countHi('ABChi hi') → 2
// countHi('hihi') → 2

function countHi(str){
  let count=0;
  for(let i=0;i<str.length;i++){
    let string=str.slice(i,i+2)

    if(string==="hi"){
      // console.log((str[i+2]))
      count++
    }
  }
   return count
 }

// function countHi(str){

//   let word="hi"
  
//   let count=0
//   //look through the string and see if current letter=h
//   // and if current+1 is i
//   // if yes, count ++
  
//   for(let i=0;i<str.length;i++){
//     let current=str[i]
//     //  console.log(current,"c")
  
//     let next=str[i+1]
  
//     // console.log(current, next,"n")
  
//     if(current === "h" && next === "i"){
//       count++
//     }
//     // return count
    
//   }
   
//   return count;
  
//   }
  console.log(countHi('abc hi ho')) // → 1
  console.log(countHi('ABChi hi')) // → 2
  console.log(countHi('hihi')) // → 2
  