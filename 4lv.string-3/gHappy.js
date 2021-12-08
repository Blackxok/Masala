// String-3 -- gHappy
// We'll say that a lowercase 'g' in a string is "happy" if there is another 'g' immediately to its left or right. Return true if all the g's in the given string are happy.

// Examples

// gHappy('xxggxx') → true
// gHappy('xxgxx') → false

function gHappy(str){
  for(let i=0;i<str.length;i++){
    let prev=i-1
      
    if(str[i-1]==="g" && str[i]==="g" || str[i+1]==="g" &&str[i]==="g" ){
      continue
    }
    
    if(str[i-1]!=="g" && str[i]==="g"){
      return false
    }
     if(str[i]==="g" && str[i+1]!=="g"){
      return false
    }
  }
  return true
}
console.log(gHappy('xxggxx'))//true
console.log(gHappy('xxgxx')) //false