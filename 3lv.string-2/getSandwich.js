// String-2 -- getSandwich
// A sandwich is two pieces of bread with something in between. 
//Return the string that is between the first and last appearance of "bread" in the given string,
// or return the empty string "" if there are not two pieces of bread.

// Examples

// getSandwich('breadjambread') → jam
// getSandwich('xxbreadjambreadyy') → jam
// getSandwich('xxbreadyy') →


function getSandwich(str){
  let string=""
    let word="bread"
    let wordLengthIdx=word.length
    let arr=[]
  for(let i=0;i<str.length;i++){
    if(str[i]==="b" && str.slice(i,i+5)==="bread"){
     arr.push(i)
    }
  }
    
    for(let i=0;i<str.length;i++){
      if(str[i]==="b" && str.slice(i,i+5)==="bread" && arr.length>2){
        
        let lastArr=arr[arr.length-1] //last idx value in array where last b for bread is
        let word=str.slice(arr[0]+5,lastArr)
        return string+=word
      }

      if(str[i]==="b" && str.slice(i,i+5)==="bread" && arr.length<=2){
        let num=i+wordLengthIdx //idx 5
        let lastIdxArr=arr[arr.length-1] //last idx value in array where last b for bread is
        let rest=str.slice(num,lastIdxArr)
        return string+=rest
      }
    }
    return ""
  
}
console.log(getSandwich('breadjambread'))//→ jam
console.log(getSandwich('xbreadjambreadbryy'))//→ jam
console.log(getSandwich('breadbreadbreadbread'))//breadbread
console.log(getSandwich('xxbreadbreadjambreadyy'))//breadjam