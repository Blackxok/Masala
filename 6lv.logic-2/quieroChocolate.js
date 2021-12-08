// Logic-2 -- makeChocolate
// We want make a package of goal kilos of chocolate. 
//We have small bars (1 kilo each) and big bars (5 kilos each). 
//Return the number of small bars to use, assuming we always use big bars before small bars. 
//Return -1 if it can't be done.

// Examples

// makeChocolate(4, 1, 9) → 4
// makeChocolate(4, 1, 10) → -1
// makeChocolate(4, 1, 7) → 2

function makeChocolate(small, big, goal){
  let smallVal=1
  let bigVal=5
  let howManyBig=bigVal*big 
  let smallsNeeded=goal-howManyBig
  let total=small+howManyBig

if( goal===small){
  return small}
  
if(howManyBig>goal && smallsNeeded<=small){
  let totalSmall=goal-bigVal
  return totalSmall}
  


  if(total<goal ){return -1}
  if(total===goal){return small}
  if(smallsNeeded<=small){   
      return smallsNeeded
  }


}
console.log(makeChocolate(4,1,9))//4