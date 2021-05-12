const weatherForm=document.querySelector('#weatherForm');
const cityName=document.querySelector('#cityName');
const errorMessage=document.querySelector('#errorMessage');
const actualWeather=document.querySelector('#actualWeather')

const weatherAPIkey='';


// visa eller ta bort felmeddelande
const setInfoMassage=(message,errStatus) =>{
        errorMessage.innerHTML=message;
        if (errStatus) {
            errorMessage.classList.add('text-danger');
           
        } else {
            errorMessage.classList.remove('text-danger');
        }


}
// validera input 
const validateText=(input, errText)=> {

    if (input.value.trim() ==='' ){
        input.classList.add('is-invalid');
        setInfoMassage(errText,true);
        input.focus();
        return false;
    }else {
        input.classList.remove('is-invalid');
        input.classList.add('is-valid');
        setInfoMassage('',false);
        return true;

    }
}
// skriva data i html i diven under form
const showWeather=(weather)=>{
   const iconPath=`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png` 

   const currentDate = new Date(weather.dt*1000).toLocaleDateString("sv-SW")

   

   actualWeather.innerHTML=  `
       
        <table class="table">
            <thead>
                <tr>
                <th scope="col" colspan="2"> ${weather.name} (${weather.sys.country}),  ${currentDate}</th>
                <th scope="col"><img src="${iconPath}" class="rounded mx-auto d-block bg-white" style="height:3rem;" alt="Weather icon"></th>
                </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Väder</td>
                <td>${weather.weather[0].description}</td>
                
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Temperatur </td>
                <td>${weather.main.temp} °C</td>
                
              </tr>
              
              <tr>
                <th scope="row">3</th>
                <td >Tryck</td>
                <td >${weather.main.pressure} hPa</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td >Luftfuktighet</td>
                <td >${weather.main.humidity} %</td>
               </tr>
               <tr>
                <th scope="row">5</th>
                <td >Vindhastighet</td>
                <td >${weather.wind.speed} m/s</td>
               </tr>

            </tbody>
          </table> `
}


// Få prognos för vald stad eller by

const getWeather= async(apiString) =>{  
 
    try {
        const result= await fetch(apiString);
        if (result.status!==200){
         
            throw new Error(`${result.status}  ${result.statusText}`);
        } 
        const data = await result.json();
        showWeather(data);
     

    } catch (error) {
        console.log(error);
        setInfoMassage('Det gick inte att hitta, försök igen',true)

    }
    
}
// rensa felmeddelande när vi börjar med input av en annan stad

cityName.addEventListener('click',()=>{
    setInfoMassage('',false);
})

// Submit knapp
weatherForm.addEventListener('submit', function(e){
    e.preventDefault();
    if (validateText(cityName,'Du glömde ange din stads namn')) {
        const apiString=`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value.trim()}&units=metric&lang=sv&appid=${weatherAPIkey}`
        getWeather(apiString)          
     
    }else {
        console.log('error input');
     }
    


})