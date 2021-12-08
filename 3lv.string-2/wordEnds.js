// String-2 -- wordEnds
// Given a string and a non-empty word string, return a string made of each char just before and just after every appearance of the word in the string. Ignore cases where there is no char before or after the word, and a char may be included twice if it is between two words.

// Examples

// wordEnds('abcXY123XYijk', 'XY') → c13i
// wordEnds('XY123XY', 'XY') → 13
// wordEnds('XY1XY', 'XY') → 11
function wordEnds(str,word){
  let result = ''
  for (let i = 0; i < str.length; i++) {
    let segment = str.slice(i, i + word.length) // make copy of string starting at i to i + word.length
    if (segment === word) { // If this segment of the str is equal to the word
      if (i !== 0) { // Let's check that we are not at the beginning, if we are not lets copy the previous char to result
        result += str[i - 1]
      }
      if (i + word.length !== str.length) { // Let's check that we are not at the end, if we are not lets copy the char after the segment match to result
        result += str[i + word.length]
      }
    }
  }
  return result
 }	
