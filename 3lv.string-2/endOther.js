// String-2 -- endOther
// Given two strings, return true if either of the strings appears at the very end of the other string, ignoring upper/lower case differences (in other words, the computation should not be "case sensitive"). Note: str.toLowerCase() returns the lowercase version of a string.

// Examples

// endOther('Hiabc', 'abc') → true
// endOther('AbC', 'HiaBc') → true
// endOther('abc', 'abXabc') → true
function endOther(a, b){
  let aLen=a.length
  let bLen=b.length
  
  
  a=a.toLowerCase()
  b=b.toLowerCase()

  if(a===b){return true}


  if(bLen<aLen){
    if( a.slice(-bLen)===b){
      return true
    }
  }


  if(aLen<bLen){
    if(b.slice(-aLen)===a){
      return true
    }
  }
  return false

}
// function endOther(a, b){
//   let aString= a.toLowerCase()
//   let bString = b.toLowerCase()

//   if(a===b){return true}

//   if(aString.length < bString.length){
//     let aIdx= aString.indexOf(aString[0]) //0 

//     let aLength=-a.length

//     if(bString.includes(aString)) {
     
//       if(bString.slice(aLength)==aString)
//       return true
//     }
    
//   }

//   else if (b.length<a.length){
//    let bIdx=bString.indexOf(bString[0])//0
//    let bLength= -b.length
    
//     if(aString.includes(bString)) {
//     // console.log(aString.slice(bLength), "this")
//     // console.log(aString, "this2")

//       if(aString.slice(bLength)==bString)
//       return true
//     }
//   }
//   return false
// }
console.log(endOther('Hiabc', 'abc')) //→ true
console.log(endOther('Hiabcd', 'abc')) //→ true
console.log(endOther('AbC', 'HiaBc')) //→ true
console.log(endOther('abc', 'abXabc')) // → true
