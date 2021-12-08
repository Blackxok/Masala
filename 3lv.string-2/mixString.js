// String-2 -- mixString
// Given two strings, a and b, create a bigger string made of the first char of a, 
//the first char of b, the second char of a, the second char of b, and so on. 
//Any leftover chars go at the end of the result.

// Examples

// mixString('abc', 'xyz') → axbycz
// mixString('Hi', 'There') → HTihere
// mixString('xxxx', 'There') → xTxhxexre

function mixString(a, b){
  //make a result variable
  let result=""
  //make two variables short and long
  let short
  let long
  
  //compare the two strings and check which one is smaller
    //assign small to short and long to long
  if(a.length>b.length){
    long=a
    short=b
  } else {
    short=a 
    long=b
  }
  //take 1 from each at the same idx-loop:shorter str 
  //loop through short bc it tells you how many char 
  //to copy to result short*2---the braid
  for(let i=0;i<short.length;i++){
    //start w/ a and b after...string
    result+=a[i]+b[i]
  }
  //slice bigger str starting from length of the smallest str to the rest of the bigger str
  //add that to result
  result+=long.slice(short.length)
             
  
  return result
}
console.log(mixString('abc', 'xyz'))  //→ axbycz
console.log(mixString('Hi', 'There'))//→ HTihere
console.log(mixString('xxxx', 'There')) // → xTxhxexre