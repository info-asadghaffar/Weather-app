function temperature () {
    let city = document.getElementById("city").value ;
    axios.get('https://api.weatherapi.com/v1/current.json?key=82aceb6d1a0c4529a8e130124241910&q=${city}&aqi=yes')
  .then(function (response) {
    console.log(response);
    let weatherapp = response.data;
    console.log(weatherapp.current.temp_c)
    document.getElementById("name").innerHTML = (`${city}`)
    document.getElementById("temp").innerHTML = (`${weatherapp.current.temp_c}C`)
    document.getElementById("wind").innerHTML = (`${weatherapp.current.wind_kph}Kph`)
    document.getElementById("humidity").innerHTML = (`${weatherapp.current.humidity}%`)
    document.getElementById("cloud").innerHTML = (`${weatherapp.current.cloud}%`)
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })
}