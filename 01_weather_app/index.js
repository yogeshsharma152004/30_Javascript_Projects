const API_KEY = "988751e556df5b2f22a7562c369865c3"
const API_URL = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const serachBox = document.querySelector(".search input");

const serachBtn = document.querySelector(".search button");

const weatherIcon = document.querySelector(".weather-icon");
 
async function checkWeather(city){
    const response  = await fetch(API_URL + city + `&appid=${API_KEY}`);

    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none"
    }
    else{

        var data = await response.json();



    document.querySelector(".city").innerHTML = data.name;

    document.querySelector(".temp").innerHTML= Math.round(data.main.temp) + "°C";

    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds"){
         weatherIcon.src = "./images/clouds.png"
    }
    else if(data.weather[0].main == "Clear"){
         weatherIcon.src = "./images/clouds.png"
    }
    else if(data.weather[0].main == "Rain"){
         weatherIcon.src = "./images/rain.png"
    }
    else if(data.weather[0].main == "Mist"){
         weatherIcon.src = "./images/mist.png"
    }
    else if(data.weather[0].main == "Snow"){
         weatherIcon.src = "./images/snow.png"
    }

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none"
    }
    
}

serachBtn.addEventListener("click", function(){
    checkWeather(serachBox.value)
})

