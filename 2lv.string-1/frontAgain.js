// String-1 -- frontAgain
// Given a string, return true if the first 2 chars in the string also appear at the end of the string, such as with "edited".

// Examples

// frontAgain('edited') → true
// frontAgain('edit') → false
// frontAgain('ed') → true
function frontAgain(str){
    let begins=str.slice(0,2)
    let end1=str.length-2 //e
   
   
    let end=str.slice(end1)
    
    
    if(begins === end && str.length>=2){
       return true
    }
    else return false
  }