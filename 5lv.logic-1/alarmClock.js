// Logic-1 -- alarmClock
// Given a day of the week encoded as 0=Sun, 1=Mon, 2=Tue, ...6=Sat, and a boolean indicating if we are on vacation, return a string of the form "7:00" indicating when the alarm clock should ring. Weekdays, the alarm should be "7:00" and on the weekend it should be "10:00". Unless we are on vacation -- then on weekdays it should be "10:00" and weekends it should be "off".

// Examples

// alarmClock(1, false) → 7:00
// alarmClock(5, false) → 7:00
// alarmClock(0, false) → 10:00

function alarmClock(day, vacation){
  //  WEEKDAYS
    //return "7:00" when alarm should ring-weekdays
    //where days are 2-5 inclusive
      //unless vacation-true then "off"
     
  if((day>=1 && day<=5) && vacation===false){
     return "7:00"
  }
   
      else if ((day>=1 && day<=5) && vacation===true){
        return "10:00"}
   
  //WEEKEENDS return "10:00 when the alarm should ring weekends where days are 0 or 6
    //unless vacation-true then 10
   
    else if((day===0 || day===6)  && vacation===false){
  
        return "10:00"}
   
     else if(day===0 || day===6  && vacation===true){
          return "off"}
  }