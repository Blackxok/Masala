//CATDOG  String-2 -- catDog
// Return true if the string "cat" and "dog" appear the same number of times in the given string.

// Examples

// catDog('catdog') → true
// catDog('catcat') → false
// catDog('1cat1cadodog') → true

function catDog(str){
  let catNum=0
  let dogNum=0
  
   for(let i=0;i<str.length;i++){
     let cat=str.slice(i,i+3)
     let dog=str.slice(i,i+3)
     
     if(cat==="cat"){
        catNum++}
     
     if(dog==="dog"){
        dogNum++}
   }
   if(catNum===dogNum){return true}
   return false
 }

// function catDog(str){
//   let word="cat"
//   let word2="dog"
 
//  let countCat=0;
//  let countDog=0;

//  //is word in the string?
//  //if yes then count how many times each word is in str
//  //if word count matches return true

//  //if i find the first letter of word in str and count 3 places and it matches after count ++
//  //then take that same for word2 countDog++
//  //if the nums match true

//  for(let i=0;i<str.length;i++){
//    if(str[i]==="c" && str[i+1]==="a" && str[i+2]==="t"){
//      countCat++
//    }
//   if(str[i]==="d" && str[i+1]==="o" && str[i+2]==="g"){
//      countDog++
//    }

//  }

// if(countCat===countDog){
//   return true
// }
// return false

// }
console.log(catDog('catdogcat'))// → false
console.log(catDog('catcat'))// → false
console.log(catDog('1cat1cadodog'))//→ true