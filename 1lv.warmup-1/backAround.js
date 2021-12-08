// Warmup-1 -- backAround
// Given a string, take the last char and return a new string with the last char added at the front and back, so 'cat' yields 'tcatt' The original string will be length 1 or more.

// Examples

// backAround('cat') → tcatt
// backAround('Hello') → oHelloo
// backAround('a') → aaa
let last=str[str.length-1]
let middle=str.slice(0,str.length)
return `${last}${middle}${last}`
