// You have a green lottery ticket, with ints a, b, and c on it. 
// If the numbers are all different from each other, the result is 0. 
//If all of the numbers are the same, the result is 20. 
//If two of the numbers are the same, the result is 10.

// Examples

// greenTicket(1, 2, 3) → 0
// greenTicket(2, 2, 2) → 20
// greenTicket(1, 1, 2) → 10

function greenTicket(a, b, c){
  if(a!==b && b!==c && a!==c){return 0}
  if (a===b && b===c){return 20}
  if( a===b || b===c || a===c){return 10}
}

console.log(greenTicket(1, 2, 3) ) //0
console.log(greenTicket(2, 2, 2)) //20
console.log(greenTicket(1, 1, 2)) //10