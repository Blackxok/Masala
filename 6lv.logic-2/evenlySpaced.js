// Logic-2 -- evenlySpaced
// Given three ints, a b c, one of them is small, 
//one is medium and one is large. Return true if the three values are evenly spaced, 
//so the difference between small and medium is the same as the difference between medium and large.

// Examples

// evenlySpaced(2, 4, 6) → true
// evenlySpaced(4, 6, 2) → true
// evenlySpaced(4, 6, 3) → false

// let numArr=evenlySpaced([a,b,c])



function evenlySpaced(a, b, c){

  let numArray=[a,b,c]
  numArray.sort((a, b) => a - b)

    let smallMed=Math.abs(numArray[0]-numArray[1])
    let medLarge=Math.abs(numArray[1]-numArray[2])
    if(smallMed===medLarge){
      return true
    }

  return false

}
console.log(evenlySpaced(2,4,6))//true