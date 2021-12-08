// String-2 -- zipZap
// Look for patterns like "zip" and "zap" in the string -- length-3, starting with 'z' and ending with 'p'. 
//Return a string where for all such words, the middle letter is gone, so "zipXzap" yields "zpXzp".

// Examples

// zipZap('zipXzap') → zpXzp
// zipZap('zopzop') → zpzp
// zipZap('zzzopzop') → zzzpzp
function zipZap(str){

  if(str.length<3){return str}
  
  for(let i=0;i<str.length;i++){
    if(str.slice(i,i+1)==="z" && str.slice(i+2,i+3)==="p") { 
      str=str.split("") 
      str.splice(i+1,1) //remove middle where i
      str=str.join("")
     
    }
  }
  return str

}
console.log(zipZap('zipxzap')) //zpXzp