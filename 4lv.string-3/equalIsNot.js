function equalIsNot(str){
  let isCount=0;
  let notCount=0;
  for(let i=0;i<str.length;i++){
     let stringIs=str.slice(i,i+2)
     let stringNot=str.slice(i,i+3)
     
     if(stringIs==="is"){
       isCount++
       }
    
    if(stringNot==="not"){
      notCount++
      }
  }
  if(isCount===notCount){
    return true}
  
  else return false
}
console.log(equalIsNot('noisxxnotyynotxsi')) //false