//  Logic-2 -- noTeenSum
//  Given 3 int values, a b c, return their sum. 
// However, if any of the values is a teen -- in the range 13..19 inclusive -- 
// then that value counts as 0, except 15 and 16 do not count as a teens. 
// Write a separate helper "public int fixTeen(int n) {"that takes in an int value and returns 
// that value fixed for the teen rule. In this way, you avoid repeating the teen code 
// 3 times (i.e. "decomposition"). Define the helper below and at the same indent level as 
// the main noTeenSum().


// noTeenSum(1, 2, 3) → 6
// noTeenSum(2, 13, 1) → 3
// noTeenSum(2, 1, 14) → 3
function noTeenSum(a, b, c){
  let sum=0
  let num=[a,b,c]
  let arr=[13,14,17,18,19]
  let sumNums=[]
  
  
  for(let i=0;i<num.length;i++){
    if(num[i]>12 && num[i]<20){
      if(num[i] !==15 && num[i] !==16){
      num[i]=0
      sum+=num[i]
    }
   }
   sumNums.push(num[i]) 
  }
    
  for(let i=0;i<sumNums.length;i++){
    sum+=sumNums[i]
  }
  return sum
  }
console.log(noTeenSum(17,19,3))//6
// console.log(noTeenSum(15,2,3))//5