// String-1 -- conCat
// Given two strings, append them together (known as "concatenation") and return the result. However, if the concatenation creates a double-char, then omit one of the chars, so "abc" and "cat" yields "abcat".

// Examples

// conCat('abc', 'cat') → abcat
// conCat('dog', 'cat') → dogcat
// conCat('abc', '') → abc
function conCat(a, b){
  let aEnding=a[a.length-1]
  let bBeginning=b[0]
  
  if(aEnding===bBeginning){
    return `${a}${b.slice(1,b.length)}`
  }
  return `${a}${b}`

}
