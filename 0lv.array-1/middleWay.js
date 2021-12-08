// Array-1 -- middleWay
// Given 2 int arrays, a and b, each length 3, return a new array length 2 containing their middle elements.

// Examples

// middleWay([1, 2, 3], [4, 5, 6]) → 2,5
// middleWay([7, 7, 7], [3, 8, 0]) → 7,8
// middleWay([5, 2, 9], [1, 4, 5]) → 2,4
function middleWay(a, b){
  let mid1=a.slice(1,2)
  let mid2=b.slice(1,2)
  let arr=mid1.concat(mid2)
  return arr
}