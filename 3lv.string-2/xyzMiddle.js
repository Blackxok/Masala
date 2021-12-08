// String-2 -- xyzMiddle
// Given a string, does "xyz" appear in the middle of the string?
// To define middle, we'll say that the number of chars to the left and right of the "xyz" must differ by at most one. 

// Examples

// xyzMiddle('AAxyzBB') → true
// xyzMiddle('AxyzBB') → true
// xyzMiddle('AxyzBBB') → false

function xyzMiddle(str){
  for(let i=0;i<str.length;i++){

    if(str[i]==="x" && str[i+1]==="y" && str[i+2]==="z"){
      let firstHalf=str.slice(0,i) //before x 
      let secondHalf=str.slice(i+3,str.length) //after z
      let num1=firstHalf.length
      let num2=secondHalf.length
      let total=Math.abs(num1-num2)
      if(total===1 || num1===num2){
        return true
      }
    
    }
  }
  return false
}
console.log( xyzMiddle('AAxyzBB')) //true -odd
console.log( xyzMiddle('AxyzBB') ) //true -even
console.log(xyzMiddle('AxyzBBB')) //false -odd
console.log(xyzMiddle(('AAAxyzBB'))) //true -odd
