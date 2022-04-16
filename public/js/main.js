// const async = require("hbs/lib/async");

const cityName=  document.getElementById('cityName');
const submitBtn= document.getElementById('submitBtn');
const city_name= document.getElementById('city_name');
const temp= document.getElementById('temp');
const temp_status= document.getElementById('temp_state');

const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal=cityName.value;
 

    if(cityName===""){
        city_name.innerText='Please write the City Name';

    }
    else{
        const url=` https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=c66dd983b7364bd39d9ec7c4d2ac95a7`;
        const response= await fetch(url);
       const data= await response.json();
       const arrData =[data];
       city_name.innerText=`${arrData[0].name}, ${arrData[0].sys.country}`; 
       temp.innerText=arrData[0].main.temp;
       temp_status.innerText=arrData[0].weather[0].main.temp;
    }

}
submitBtn.addEventListener('click',getinfo);
