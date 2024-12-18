// Fetch weather data from OpenWeatherMap API
import fetch from 'node-fetch';
const apiKey = '12897a72c0e130cb687187c6728e6a80';
const city = 'India';
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data); // Log the entire response data to inspect its structure
        console.log(`Weather in ${city}:`);
        console.log(`Temperature: ${data.main.temp}K`);
        console.log(`Weather: ${data.weather[0].description}`);
    })
    .catch(error => console.error('Error:', error));