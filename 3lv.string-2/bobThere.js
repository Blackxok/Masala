// String-2 -- bobThere
// Return true if the given string contains a "bob" string, but where the middle 'o' char can be any char.

// Examples

// bobThere('abcbob') → true
// bobThere('b9b') → true
// bobThere('bac') → false

function bobThere(str){
  let word="bob"
  for(let i=0; i<str.length;i++){
    if(str[i]===word[0] && str[i+2]===word[2]){
      return true
    }
    
  }
  return false
}
console.log(bobThere('abcbob')) //true
console.log(bobThere('b9b')) // → true
console.log(bobThere('bac'))//→ false