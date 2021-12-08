// Given a string str, if the string starts with "f" return "Fizz". If the string ends with "b" return "Buzz". If both the "f" and "b" conditions are true, return "FizzBuzz". In all other cases, return the string unchanged.

// Examples

// fizzString('fig') → Fizz
// fizzString('dib') → Buzz
// fizzString('fib') → FizzBuzz

function fizzString(str){
  
  if((str[0]==="f") && (str[str.length-1]==="b")){
    return "FizzBuzz"
  }

  if(str[0]==="f"){
    return "Fizz"
  }

  if(str[str.length-1]==="b"){
    return "Buzz"
  }

  return str

}
console.log(fizzString('fig'))  // → Fizz   
console.log(fizzString('dib')) // → Buzz
console.log(fizzString('fib')) // → FizzBuzz