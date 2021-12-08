// WITHOUTX2 String-1 -- withoutX2
// Given a string, if one or both of the first 2 chars is 'x', return the string without those 'x' chars, and otherwise return the string unchanged. This is a little harder than it looks.

// Examples

// withoutX2('xHi') → Hi
// withoutX2('Hxi') → Hi
// withoutX2('Hi') → Hi

function withoutX2(str){
  if(str[0]==="x" && str[1]==="x"){
    return str.slice(2)
  }

      if(str[0]==="x" && str[1]!=="x"){
      return str.slice(1)
    }

    if(str[0] !=="x" && str[1] ==="x"){
      let first=str[0]
      let rest=str.slice(2)
      return  `${first}${rest}` 
    }
    
  return str
}
console.log(withoutX2('xxHi')) //Hi
console.log(withoutX2('xHi')) //Hi
console.log(withoutX2("Hxi"))//Hi
console.log(withoutX2('Hi'))//Hi