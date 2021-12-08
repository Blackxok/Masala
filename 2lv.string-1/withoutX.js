/**WITHOUTX  Given a string, if the first or last chars are 'x', return the string without those 'x' chars, and otherwise return the string unchanged. */ 

function withoutX(str){

  if(str[0]==="x" && str[str.length-1]==="x"){
      return str.slice(1,str.length-1)
  }
  if(str[0]==="x" || str[str.length-1]==="x"){
    if(str[0]==="x"){
     return str.slice(1)
    }
   if(str[str.length-1]==="x"){
     let lastChar=str.length-1
    return str.slice(0,str.length-1)
  }
  }
  
  return str
}
console.log(withoutX('xHix')) //Hi
console.log(withoutX('xHi'))//Hi
console.log(withoutX('Hxix'))//Hxi