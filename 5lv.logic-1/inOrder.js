// Logic-1 -- inOrder
// Given three ints, a b c, return true if b is greater than a, and c is greater than b. 
//However, with the exception that if "bOk" is true, b does not need to be greater than a.

// Examples

// inOrder(1, 2, 4, false) → true
// inOrder(1, 2, 1, false) → false
// inOrder(1, 1, 2, true) → true

  function inOrder(a, b, c, bOk){
    if(b>a && c>b){
      return true
    }
    //where a and b does not need to be compared
    if(c>b && bOk===true){
      return true}
    return false
   
  }
   


console.log(inOrder(1, 2, 4, false)) //true
console.log(inOrder(1, 2, 1, false)) //false
console.log(inOrder(1, 1, 2, true)) //true

// if (bOk) {
//   return c > b;
// }
// return b > a && c > b;