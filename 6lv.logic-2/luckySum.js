// Given 3 int values, a b c, return their sum. However, if one of the values is 13 then it does not count towards the sum and values to its right do not count. So for example, if b is 13, then both b and c do not count.

// Examples

// luckySum(1, 2, 3) → 6
// luckySum(1, 2, 13) → 3
// luckySum(1, 13, 3) → 1

function luckySum(a, b, c){
  if(a!==13 && b!==13 && c!==13){
    return a+b+c
  }
  if(a===13){
    return 0
  }
  if(b===13){
    return a
  }
  if(c==13){
    return a+b
  }
}
console.log(luckySum(1, 2, 3)) //6
console.log(luckySum(1, 2, 13)) //3
console.log(luckySum(1, 13, 3)) //1
