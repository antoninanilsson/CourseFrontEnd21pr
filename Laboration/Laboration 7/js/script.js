const clockWeek=document.querySelector('#clockWeek');
const clockDate =document.querySelector('#clockDate');
const clockTime =document.querySelector('#clockTime');

const formatClock=()=>{
       let myCurrentDate=new currentDate();
       clockWeek.innerText=myCurrentDate.weekString();
       clockDate.innerText=myCurrentDate.dateString(); 
       clockTime.innerText=myCurrentDate.timeString();
 }   
 
setInterval(function(){
    formatClock();
    
},1000);







