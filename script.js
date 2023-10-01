const apiKey="a38762ac4764d6230369a9256b494260";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");
const weatherIcon=document.querySelector(".weather-icon")

async function checkWeather(city){
    const response=await fetch(apiUrl + city + `&appid=${apiKey}`);


    if(response.status==404){
        document.querySelector(".error").style.display="block"
    }
    var data=await response.json();

    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=`${Math.round(data.main.temp)}°C`;
    document.querySelector(".humidity").innerHTML=`${data.main.humidity}%`;
    document.querySelector(".wind").innerHTML=`${Math.round(data.wind.speed*3.6)}km/h`;

    if(data.weather[0].main == 'Clouds'){
        weatherIcon.src="images/clouds.png"
    }
    else if(data.weather[0].main=='Clear'){
        weatherIcon.src="images/clear.png";
    }
    else if(data.weather[0].main=='Rain'){
        weatherIcon.src="images/rain.png";
    }
    else if(data.weather[0].main=='Drizzle'){
        weatherIcon.src="images/clear.png";
    }
    else if(data.weather[0].main=='Mist'){
        weatherIcon.src="images/mist.png";
    }
    else if(data.weather[0].main=='Humidity'){
        weatherIcon.src="images/humidity.png";
    }
    else if(data.weather[0].main=='Snow'){
        weatherIcon.src="images/snow.png";
    }
    document.querySelector(".error").style.display="none"
    document.querySelector(".weather").style.display="block";


}
searchBtn.addEventListener('click', ()=>{
    checkWeather(searchBox.value)
})
searchBox.addEventListener('keypress', (e)=>{
    if(e.key=="Enter"){
        e.preventDefault();
        searchBtn.click();
    }
})

