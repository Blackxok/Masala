// String-1 -- minCat
// Given two strings, append them together (known as "concatenation") and return the result. However, if the strings are different lengths, omit chars from the longer string so it is the same length as the shorter string. So "Hello" and "Hi" yield "loHi". The strings may be any length.

// Examples

// minCat('Hello', 'Hi') → loHi
// minCat('Hello', 'java') → ellojava
// minCat('java', 'Hello') → javaello

function minCat(a, b){
    if(a.length > b.length){
       let cutoff=b.length
       a=a.slice(a.length-cutoff)
      return `${a}${b}`
    }
     else if(b.length > a.length){
       let cutoff=a.length
       b=b.slice(b.length-cutoff)
      return `${a}${b}`
    }
  }