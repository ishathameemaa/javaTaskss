const inputBox = document.querySelector('.input-box');
const searchBtn = document.getElementById('searchBtn')
const weather_img = document.querySelector('.weather-img')
const temperature = document.querySelector('.temperature')
const description = document.querySelector('.description');
const humidity = document.getElementById('humidity');
const wind_speed = document.getElementById('wind-speed');
const location_not_found=document.querySelector('.location-not-found');
const weather_body = document.querySelector('.weather-body');

async function checkWeather(city){
	const api_key="665c386eddbbad787b042639603df993";
	const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

	const weather_data =await fetch(`${url}`).then(response => response.json());


	if(weather_data.code=== `404`){
		location_not_found.style.display="flex";
		weather_body.style.display="none";
		console.log("error");
		return;
	}
	location_not_found.style.display="none";
	weather_body.style.display="flex";
	temperature.innerHTML=`${Math.round(weather_data.main.temp - 273.15)}°C`;
	description.innerHTML=`${weather_data.weather[0].description}`
	humidity.innerHTML=`${weather_data.main.humidity}%`;
	wind_speed.innerHTML = `${weather_data.wind.speed}km/H`;

	switch(weather_data.weather[0].main){
		case 'clouds':
			weather_img.src="/task/weatherApp/weatherimg/cloud.png";
			break;
			case 'clear':
			weather_img.src="/task/weatherApp/weatherimg/sun (1).png";
			break;
			case 'Rain':
			weather_img.src="/task/weatherApp/weatherimg/rain.png";
			break;
			case 'Mist':
				weather_img.src="/task/weatherApp/weatherimg/raining.png";
				break;
				case 'Snow':
						weather_img.src="/task/weatherApp/weatherimg/snowing.png"
			
	}
	console.log(weather_data);
}

searchBtn.addEventListener('click',()=>{
	checkWeather(inputBox.value);
});