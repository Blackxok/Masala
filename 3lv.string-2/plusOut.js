// String-2 -- plusOut
// Given a string and a non-empty word string, return a version of the original String where all chars have been replaced by pluses ("+"), except for appearances of the word string which are preserved unchanged.

// Examples

// plusOut('12xy34', 'xy') → ++xy++
// plusOut('12xy34', '1') → 1+++++
// plusOut('12xy34xyabcxy', 'xy') → ++xy++xy+++xy
function plusOut(str, word){
  let result=""
  for(let i=0;i<str.length;i++){
    let sliced=str.slice(i,i+word.length)
    if(sliced===word){
       result+=word
       i+=word.length-1 //-1 because loop does ++
    }
    else result+="+"
  }
  return result
}