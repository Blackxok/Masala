// Warmup-1 -- stringE
// Return true if the given string contains between 1 and 3 'e' chars.

// Examples

// stringE('Hello') → true
// stringE('Heelle') → true
// stringE('Heelele') → false

function stringE(str){
  let arr=[]
  for(let i=0;i<str.length;i++){
    if(str[i]==="e"){
      arr.push(str[i])
  }
  }
  if(arr.length===3|| arr.length===1){
    return true}
 
  else return false
}