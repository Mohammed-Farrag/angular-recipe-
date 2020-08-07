const api_key = '565095d954352573b876d1dd9259c59f';
const url = 'https://api.openweathermap.org/data/2.5/weather?q='; //url{city name}&appid={your api key} 

const city_name = document.querySelector('.city');

const date_area = document.querySelector('.date');

const weather_area = document.querySelector('.weather');
const temp = document.querySelector('.temp');

const hi_low_area = document.querySelector('.hi-low');

const searchbox = document.querySelector('.city-search');

searchbox.addEventListener('keypress', setQuery);

function setQuery(event){

    if(event.keyCode === 13){
        getResult(searchbox.value);
    }  
}

function getResult(value){
    fetch(`${url}${value}&units=metric&appid=${api_key}`)
    .then(res => {

        return res.json();
        
    }).then(data => {
        city_name.textContent = `${data.name}, ${data.sys.country}`;
        date_area.textContent = dataBuilder();
        weather_area.textContent = `${data.weather[0].main}`;
        temp.textContent = `${data.main.temp} °C`;
        hi_low_area.textContent = `${data.main.temp_max}°C / ${data.main.temp_min}°C`
        console.log(data);
    })
}



function dataBuilder(){

    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    
    
    let now = new Date();

    let day = days[now.getDay()];
    let date = now.getDate();
    let month = months[now.getMonth()];
    let year =  now.getFullYear();
    return `${day} ${date} ${month} ${year}`;

}





function currencyRapidApi(){
    fetch("https://currency-exchange.p.rapidapi.com/exchange?q=9.0&from=USD&to=EGP", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "currency-exchange.p.rapidapi.com",
            "x-rapidapi-key": "57fd7df47dmsh9763b57fc2b8044p12d0d1jsn27feb42c08c3"
        }
    })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    });
}

currencyRapidApi();