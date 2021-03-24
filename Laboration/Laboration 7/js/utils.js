// function lägga till ledande nollor
const pad=(num, size) => {
    num = num.toString();
    while (num.length < size) num = "0" + num;
    return num;
  }

// Söndag är 0, Måndag är 1 osv
const weekName =(num) => {
    if (num<0 ||num>6){
        return '????';
    }
    const weekArray = ['Söndag','Måndag','Tisdag','Onsdag','Torsdag','Fredag','Lördag'];
    return weekArray[num];
}
// class att ha aktuell datum och tid 
class currentDate {     
    constructor(){
        const now = new Date();
        this.year= now.getFullYear();
        this.month= now.getMonth()+1;
        this.date= now.getDate();
        this.hour=now.getHours();
        this.min=now.getMinutes();
        this.sec=now.getSeconds();
        this.weekDay=now.getDay();
    }
    weekString(){
        return weekName(this.weekDay);  }
    dateString(){
        return this.year +'-'+pad(this.month,2)+'-'+pad(this.date,2); }
    timeString(){
        return pad(this.hour,2)+':'+pad(this.min,2)+':'+pad(this.sec,2);   }        
}