// Given a non-empty string and an int n, return a new string where the char at index n has been removed. The value of n will be a valid index of a char in the original string (i.e. n will be in the range 0..str.length()-1 inclusive).

// Examples

// missingChar('kitten', 1) → ktten
// missingChar('kitten', 0) → itten
// missingChar('kitten', 4) → kittn

function missingChar(str, n){
  let beginning=str.slice(0,n)
  let end=str.slice(n+1,str.length)
  return beginning+end
}


// solution 2 
function missingChar(str, n){
  let string=""
  for(let i=0; i<str.length;i++){
    if(i!==n){
      string+=(str[i]) 
      }
    }
    return string
}