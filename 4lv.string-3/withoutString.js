// Given two strings, base and remove, return a version of the base string where all instances of the remove string have been removed (not case sensitive). You may assume that the remove string is length 1 or more. Remove only non-overlapping instances, so with "xxx" removing "xx" leaves "x".

// Examples

// withoutString('Hello there', 'llo') → He there
// withoutString('Hello there', 'e') → Hllo thr
// withoutString('Hello there', 'x') → Hello there

// function withoutString(base, remove){
//   let res = ""
//   for (let i = 0; i < base.length; i++) {
//     let substr = base.slice(i, i + remove.length)
//     if (substr.toLowerCase() === remove.toLowerCase()){
//       i += substr.length - 1 
//     } else {
//       res += base[i]
//     }
//   }
//   return res
// }
​
// or with a while loop
​
function withoutString(base, remove){
  let res = ""
  let i = 0;
  while (i < base.length) {
    let substr = base.slice(i, i + remove.length)
    if (substr.toLowerCase() === remove.toLowerCase()) {
      i += substr.length
    } else {
      res += base[i]
      i++
    }
  }
  return res
} 
  
// //new RegEx-regex is an obj.
// //lets create a new pattern with the remove string
// //gi search globally and ignore case  
// let reg=new RegExp(remove,"gi") //creating a pattern that will search for hte string remove globally and ignoring case
// let modBase=base.replace(reg,"")//pattern,replaces the pattern with the empty string

// return modBase

// }

console.log(withoutString('Hello there', 'llo') )// → He there
console.log(withoutString('Hello there', 'e'))// → Hllo thr
console.log(withoutString('Hello there', 'x'))// → Hello there