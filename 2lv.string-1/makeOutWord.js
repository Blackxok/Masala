// String-1 -- makeOutWord
// Given an "out" string length 4, such as "<<>>", and a word, return a new string where the word is in the middle of the out string, e.g. "<<word>>". Note: use str.substring(i, j) to extract the String starting at index i and going up to but not including index j.

// Examples

// makeOutWord('<<>>', 'Yay') → <>
// makeOutWord('<<>>', 'WooHoo') → <>
// makeOutWord('[[]]', 'word') → [[word]]


function makeOutWord(out, word){

  let firstHalf=(out.length/2)
     
  let first= out.slice(0,firstHalf)
  
  let last=out.slice(firstHalf)
  
  return `${first}${word}${last}`
}

console.log(makeOutWord('<<>>', 'Yay'))