// String-2 -- repeatSeparator
// Given two strings, word and a separator sep, return a big string made of count occurrences of the word, 
//separated by the separator string.

// Examples

// repeatSeparator('Word', 'X', 3) → WordXWordXWord
// repeatSeparator('This', 'And', 2) → ThisAndThis
// repeatSeparator('This', 'And', 1) → This

function repeatSeparator(word, sep, count){
  let string=`${word}${sep}`
  let str=""

// repeat the word count Time
// each time it is repeated, add a sep at the end
//once the word is repeated the last time, do not add the sep

let sepLength=sep.length
// console.log(sepLength)
str+=string.repeat(count)
return str.slice(0,str.length-sepLength)
}
console.log(repeatSeparator('Word', 'X', 3))//WordXWordXWord
console.log(repeatSeparator('This', 'And', 2)) //ThisAndThis
console.log(repeatSeparator('This', 'And', 1)) //This
