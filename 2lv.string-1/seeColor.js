// String-1 -- seeColor
// Given a string, if the string begins with "red" or "blue" return that color string, otherwise return the empty string.

// Examples

// seeColor('redxx') → red
// seeColor('xxred') →
// seeColor('blueTimes') → blue
function seeColor(str){
    let beginRed=str.slice(0,3)
    let beginBlue=str.slice(0,4)
  
    if(beginRed === "red" || beginBlue === "blue"){
      if(beginRed === "red" ){
        return "red"}
      return "blue"
    }
    else return ""
  }
