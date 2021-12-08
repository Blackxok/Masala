// Logic-1 -- answerCell
// Your cell phone rings. Return true if you should answer it. Normally you answer, except in the morning you only answer if it is your mom calling. In all cases, if you are asleep, you do not answer.

// Examples

// answerCell(false, false, false) → true
// answerCell(false, false, true) → false
// answerCell(true, false, false) → false

function answerCell(isMorning, isMom, isAsleep){
  // if mom and morning->true
  if((isMorning===false || isMom===true) && isAsleep===false){
    return true
  }
  else return false
}
console.log(answerCell(false, false, false)) //true
console.log(answerCell(false, false, true)) //false

// true emasmi chunki && ikkinchi tomoni true boladiku
console.log(answerCell(true, false, false)) // false
