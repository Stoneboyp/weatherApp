require('dotenv').config()
const weatherAPI = process.env.weatherAPI;
const getCurrentPosition = async(latitude,longitude) => {

  const { default: fetch } = await import('node-fetch');

  const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&units=metric&appid=${weatherAPI}`;
    return fetch(url)
    .then((response) => {
      return response.json();
    })
    .catch((error) => console.log(error));
};

const searchWeather = async(searchCity) => {
  const { default: fetch } = await import('node-fetch');
  
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${searchCity}&units=metric&appid=${weatherAPI}`;
  return fetch(url)
    .then((response) => {
      return response.json();
    })
};
module.exports = {getCurrentPosition, searchWeather}