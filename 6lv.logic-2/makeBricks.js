function makeBricks(small, big, goal){
  let bigVal=big*5
  // console.log(bigVal) //20
  // big=bigVal
  let test=""
  for(let i=0;i<=bigVal;i++){
    if(bigVal>goal){
      big=big-1
      bigVal=big*5
      test+=big
      continue
    }

    // console.log(bigVal, "big")
   let leftforSingles=goal-bigVal
   if(small<leftforSingles){
     return false
   }
    if(small>=leftforSingles){
     return true
   }

  }
 return false
}
console.log(makeBricks(1,4,12))//false
// console.log(makeBricks(3, 2, 10))//true