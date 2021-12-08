// String-2 -- repeatFront
// Given a string and an int n, return a string made of the first n characters of the string, 
//followed by the first n-1 characters of the string, and so on. 
//You may assume that n is between 0 and the length of the string, inclusive (i.e. n >= 0 and n <= str.length()).

// Examples

// repeatFront('Chocolate', 4) → ChocChoChC
// repeatFront('Chocolate', 3) → ChoChC
// repeatFront('Ice Cream', 2) → IcI

function repeatFront(str, n){
  let num=n
  let res=""

  let myWord=str.slice(0,n)

  for(let i=0;i<myWord.length;i++){
    res+=str.slice(0,num)
    num--
  }
  return res
}
// ----------------------
// function repeatFront(str, n){
//   // let stringed=str.slice(str,n)
//   string=""
  
//   for(let i=n;i>0;i--){
//     let stringed=str.slice(str,i)
//     string+=stringed
//   }
//  return string
// }
console.log(repeatFront('Chocolate', 4)) //→ ChocChoChC
console.log(repeatFront('Chocolate', 3) )//→ ChoChC
console.log(repeatFront('Ice Cream', 2)) //→ IcI