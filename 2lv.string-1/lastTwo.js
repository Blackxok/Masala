// String-1 -- lastTwo
// Given a string of any length, return a new string where the last 2 chars, if present, are swapped, so "coding" yields "codign".

// Examples

// lastTwo('coding') → codign
// lastTwo('cat') → cta
// lastTwo('ab') → ba

function lastTwo(str){
    if(str.length>1){
    let previous=str[str.length-1]
    let last=str[str.length-2]
    
    let string=str.slice(0,str.length-2)
    
    return string+previous+last
    }
    return str
    
  }