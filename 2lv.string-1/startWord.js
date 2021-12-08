// Given a string and a second "word" string, we'll say that the word matches the string if it appears at the front of the string,
// except its first char does not need to match exactly. On a match, return the front of the string, or otherwise return the empty string. 
//So, so with the string "hippo" the word "hi" returns "hi" and "xip" returns "hip". 
//The word will be at least length 1.

// Examples

// startWord('hippo', 'hi') → hi
// startWord('hippo', 'xip') → hip
// startWord('hippo', 'i') → h

function startWord(str, word){
   //if word is in front of str=matches, word[0]!==str[0]
        //get size of word and see if the front matches. 
        //the front=str(1) because the str[0] doesn't matter,size of word length 
  //----if match return the front of the str where 
  //----if not matching return ""

  //takes length of word and returns a number
  let wordS=word.length
  // console.log(wordS,"cut")

  //returns the first few chars in str according to the length of word
  let cut=str.slice(0,wordS)
  // console.log(cut,"cut") //hi, hip, h

  // since the first char doesnt have to be the same, takes the rest of the STR up to the length of word
  let newStr=str.slice(1,wordS)
  // console.log(newStr,"cut") //if empty and first letter matches return first letter

//  in order to see if it matches the rest of word
  let cutword=word.slice(1)
//   console.log(cutword,"cut")
  
  if(str===word || newStr===cutword){
    return cut
  }
  else return ""
}
console.log(startWord('hippo', 'hi'))//hi
console.log(startWord('hippo', 'xip'))//hip
console.log(startWord('hippo', 'i'))//h