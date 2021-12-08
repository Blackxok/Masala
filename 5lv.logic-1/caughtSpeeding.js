// Logic-1 -- caughtSpeeding
// You are driving a little too fast, and a police officer stops you. Write code to compute the result, encoded as an int value: 0=no ticket, 1=small ticket, 2=big ticket. If speed is 60 or less, the result is 0. If speed is between 61 and 80 inclusive, the result is 1. If speed is 81 or more, the result is 2. Unless it is your birthday -- on that day, your speed can be 5 higher in all cases.

// Examples

// caughtSpeeding(60, false) → 0
// caughtSpeeding(65, false) → 1
// caughtSpeeding(65, true) → 0

function caughtSpeeding(speed, isBirthday){
    let speed2=speed+5
    
    //CASE1://if <=60 then return 0
    if(speed<=60 || false){
  
     return 0}
    
    //CASE2://if >=61 and <=80 or false return 1
          //consider if speed2>=61 and <=80 && true
    
    else if((speed>=61 && speed<=80) ||false){
      
      if(speed2>=61 && speed2<80 && isBirthday===true){
        return 0}
      
      else return 1
    }
    
      //if >=81 return 2
         //consider if speed2>=61 and <=80 && true
    else if(speed>=81 || false){
        if (speed2>=81 && isBirthday===true){
            return 1}
      
    else return 2}
     
  }