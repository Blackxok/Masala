// String-1 -- without2
// Given a string, if a length 2 substring appears at both its beginning and end, return a string without the substring at the beginning, so "HelloHe" yields "lloHe". The substring may overlap with itself, so "Hi" yields "". Otherwise, return the original string unchanged.

// Examples

// without2('HelloHe') → lloHe
// without2('HelloHi') → HelloHi
// without2('Hi') →
function without2(str){
    //in the case it is the same char and less than 2 chars
      if(str.length < 2){
        return str
      }
    
    //in the case that it is same begins and same ends 
      if(str.length => 2){
        let begins=str.slice(0,2)
     
        let ends=str.slice(str.length-2)
  
        if(begins === ends){
         return str.slice(2)
      }
  
      //in the case that it is neither same beginning or end  
        return str
    
  }