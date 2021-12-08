// Logic-2 -- roundSum
// For this problem, we'll round an int value up to the next multiple of 10 if its rightmost 
//digit is 5 or more, so 15 rounds up to 20. Alternately, round down to the previous multiple 
//of 10 if its rightmost digit is less than 5, so 12 rounds down to 10. 
//Given 3 ints, a b c, return the sum of their rounded values. To avoid code repetition, 
//write a separate helper "public int round10(int num) {" and call it 3 times. 
//Write the helper entirely below and at the same indent level as roundSum().

// Examples

// roundSum(16, 17, 18) → 60
// roundSum(12, 13, 14) → 30
// roundSum(6, 4, 4) → 10

function roundSum(a, b, c){
  let arr=[a,b,c]
  let nums=[]
  


  for(let i=0;i<arr.length;i++){
    let stringed=arr[i].toString()
    
    if(stringed.length===1 && stringed>4){
      nums.push(10)  
    }
    else if ( stringed.length===1 && arr[i]<=4){
      nums.push(0)   
    }
    
  
    
     
 //   -------------------------------
    if(stringed.length>1){
      let firstDigit=stringed.slice(0,stringed.length-1) //1  
      let lastDigit=stringed.slice(stringed.length-1) //last digit
    
    

    if(lastDigit>4){
    let firstConverted=parseInt(firstDigit)+1
    stringed=parseInt(firstConverted+"0")
    nums.push(stringed)
   }
  
   if(lastDigit<=4){
    let firstConverted=parseInt(firstDigit)
    stringed=parseInt(firstConverted+"0")
    nums.push(stringed)

   }
      
      
      
  }
    
    
}
  

let sum=0
for(let i=0;i<nums.length;i++){
  sum+=nums[i]
}


  return sum
}
// console.log(roundSum(16,17,18))//60
// console.log(roundSum(14,12,26))// 50
// console.log(roundSum(12,13,14))// 30
console.log(roundSum(0,2,9))// 30