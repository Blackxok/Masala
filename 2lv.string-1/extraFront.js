// String-1 -- extraFront
// Given a string, return a new string made of 3 copies of the first 2 chars of the original string. The string may be any length. If there are fewer than 2 chars, use whatever is there.

// Examples

// extraFront('Hello') → HeHeHe
// extraFront('ab') → ababab
// extraFront('H') → HHH

function extraFront(str){
    if(str.length > 2){
      str=str.slice(0,2)
      return str.repeat(3)
    }
    else return str.repeat(3)
      
  }