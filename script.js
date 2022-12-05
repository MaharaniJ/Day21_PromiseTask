

function getWeatherData(){

    var cityNames = document.getElementById('cityNames').value
    
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityNames}&appid=11bbbd91670fb0afbaf4b9054cde3be1`
  
// calling api
fetch(url).then((res)=>res.json()).then((data)=>{

  var weatherCard = document.getElementById('weatherCard');
  weatherCard.innerHTML=`<br><div class="card" style="width: 18rem;">
  <img src="./Weather.jfif" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text">Temperature: ${data.main.temp_max}</p>
    <p class="card-text">WindSpeed: ${data.wind.speed}</p>
    <p class="card-text">Humidity: ${data.main.humidity}</p>
  </div></div>`
  }
 
  );
}getWeatherData();
