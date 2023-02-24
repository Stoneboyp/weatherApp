let city, avgTemp;

export const getCurrentPosition = () => {
  city = document.getElementById(currentCity);
  avgTemp = document.getElementById(avgTemperature);
  

  navigator.geolocation.getCurrentPosition(function (position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    fetch( 
      `http://localhost:7000/get/?latitude=${latitude}&longitude=${longitude}`
    )
      .then((response) => response.json())
      .then((data) => {
        city = data.city.name;
        avgTemp = Math.round(data.list[0].main.temp);
        currentCity.textContent = city;
        avgTemperature.textContent = `${avgTemp}°C`;
        // console.log(data);
        localStorage.setItem("weatherDataGeo", JSON.stringify(data))
        
      });
  });
};
export const searchWeather = () => {
  city = document.getElementById(currentCity);
  avgTemp = document.getElementById(avgTemperature);
  //   let notFoundElement = document.querySelector(".not-found");

  //   const weatherAPI = process.env.WEATHER_API;
  const input = document.querySelector('input[type="text');
  let searchCity = input.value;
  fetch(`http://localhost:7000/get/?searchCity=${searchCity}`)
    .then((response) => response.json())
    .then((data) => {
      city = data.city.name;
      avgTemp = Math.round(data.list[0].main.temp);
      currentCity.textContent = city;
      avgTemperature.textContent = `${avgTemp}°C`;
      // console.log(data);
      localStorage.setItem("weatherData", JSON.stringify(data))
    })
    // .catch((notFoundElement.style.display = notFoundElement.style.display === "block"))
};
