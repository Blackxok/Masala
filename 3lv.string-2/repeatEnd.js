// String-2 -- repeatEnd
// Given a string and an int n, return a string made of n repetitions of the last n characters of the string. You may assume that n is between 0 and the length of the string, inclusive.

// Examples

// repeatEnd('Hello', 3) → llollollo
// repeatEnd('Hello', 2) → lolo
// repeatEnd('Hello', 1) → o

function repeatEnd(str, n){
  let stringed=str.slice(str.length-n)
  let repeat= stringed.repeat(n)
  return repeat
}
console.log(repeatEnd('Hello', 3)) //llollollo
console.log(repeatEnd('Hello', 2)) //lolo
console.log(repeatEnd('Hello', 1))//o