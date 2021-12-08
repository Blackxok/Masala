// String-3 -- countYZ
// Given a string, count the number of words ending in 'y' or 'z' -- so the 'y' in "heavy" and the 'z' in "fez" count, but not the 'y' in "yellow" (not case sensitive). We'll say that a y or z is at the end of a word if there is not an alphabetic letter immediately following it. (Note: Character.isLetter(char) tests if a char is an alphabetic letter.)

// Examples

// countYZ('fez day') → 2
// countYZ('day fez') → 2
// countYZ('day fyyyz') → 2

function countYZ(str){
  //make a variable for count to hold the number of occurances where criteria is met
  let count=0
  let string=""
  let letter=/[a-zA-Z]/g

  // let myVar='a'
  // if(myVar.match(letter)){
  //   console.log("yes")
  // }
 str=str.toLowerCase() 

 if(str[str.length-1]==="y" || str[str.length-1]==="z"){
     count++
   }

  for(let i=0;i<str.length;i++){ 
  
    //if y or z is before a space or non letter and i+2 is a yellow then continue to checking the next character
    //if y or z is before a space or non letter or the last in the string then count ++
   
  
   if(!str[i].match(letter) && str[i-1]==="y"){
     count++
   }
    if(!str[i].match(letter) && str[i-1]==="z"){
     count++
   }


 }
 return count
}
console.log(countYZ('fez day'))// → 2)
console.log(countYZ('day fez'))// → 2)
console.log(countYZ('day fyyyz'))// → 2)


   //   if(!str.match(letter)){
    //     continue
    //   }
    //   else count++
    // }