document.getElementById("weatherSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  if (value === "")
    return;
  console.log(value);
  const url = "http://api.openweathermap.org/data/2.5/weather?q=" + value + ",US&units=imperial" + "&APPID=76ba025adce76719aef920ee33eb2297";
  fetch(url)
    .then(function(response) {
      return response.json();
    }).then(function(json) {
      let results = "";
      results += '<h2 class="place" >Weather in ' + json.name + "</h2>";
      for (let i=0; i < json.weather.length; i++) {
	results += '<img class="icon" src="http://openweathermap.org/img/w/' + json.weather[i].icon + '.png"/>';
      }
      results += '<h2 class="heading">' + json.main.temp + " &deg;F</h2>"
      results += '<p class="report">'
      for (let i=0; i < json.weather.length; i++) {
	results += json.weather[i].description
	if (i !== json.weather.length - 1)
	  results += ", "
      }
      results += "</p>";
      document.getElementById("weatherResults").innerHTML = results;
    });
});



document.getElementById("weatherSubmit").addEventListener("click", function(event) {
  event.preventDefault();
  const value = document.getElementById("weatherInput").value;
  if (value === "")
    return;
  console.log(value);
const url2 = "http://api.openweathermap.org/data/2.5/forecast?q=" + value + ", US&units=imperial" + "&APPID=76ba025adce76719aef920ee33eb2297";
fetch(url2)
  .then(function(response) {
    return response.json();
  }).then(function(json) {
    let forecast = "";
    for (let i=0; i < json.list.length; i++) {
forecast += '<h2 class="heading">' + moment(json.list[i].dt_txt).format('MMMM Do YYYY, h:mm:ss a') + "</h2>";
forecast += '<p class="report">Temperature: ' + json.list[i].main.temp + "</p>";
forecast += '<img class ="icon" src="http://openweathermap.org/img/w/' + json.list[i].weather[0].icon + '.png"/>'
    }
    document.getElementById("forecastResults").innerHTML = forecast;
  });
});