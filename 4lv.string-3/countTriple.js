countTriple
// We'll say that a "triple" in a string is a char appearing three times in a row. Return the number of triples in the given string. The triples may overlap.

// Examples

// countTriple('abcXXXabc') → 1
// countTriple('xxxabyyyycd') → 3
// countTriple('a') → 0

function countTriple(str){
  // loop through String
  // check if the current the prev and the next are the same
  // if yes count++
  let count=0;
  for(let i=0;i<str.length;i++){
    let prev=str[i-1]
    let curr=str[i]
    let next=str[i+1]
    
    if(prev===curr && curr===next){
      count+=1
    }
  }
  return count
}
console.log(countTriple('abcXXXabc'))// → 1
console.log(countTriple('xxxabyyyycd')) //→ 3