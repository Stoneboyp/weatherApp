import {getCurrentPosition,searchWeather} from "./functions/getWeather.js";

  
let container = document.getElementById("hidden_location");
let isGeoChartRendered = false;
let isChartRendered = false;
let rendered = { }
document.getElementById("myLocation").addEventListener("click", () => {
  if (container.style.display === "block") {
    container.style.display = "node";
  } else {
    container.style.display = "block";
  }
  if(isChartRendered){
    window.chart.destroy()
    isChartRendered = false;
  }  
  getCurrentPosition();

    if (localStorage.getItem("weatherDataGeo") !== null && !isGeoChartRendered) {
      const data = JSON.parse(localStorage.getItem("weatherDataGeo"));
      
      const Data = [
        { date: data.list[0].dt_txt, temperature: data.list[0].main.temp },
        { date: data.list[8].dt_txt, temperature: data.list[8].main.temp },
        { date: data.list[16].dt_txt, temperature: data.list[16].main.temp },
        { date: data.list[24].dt_txt, temperature: data.list[24].main.temp },
        { date: data.list[32].dt_txt, temperature: data.list[32].main.temp },
        { date: data.list[38].dt_txt, temperature: data.list[38].main.temp },
      ];
    
      var options = {
        series: [
          {
            name: "Temperature",
            data: Data.map((data) => ({
              x: new Date(data.date).getTime(),
              y: (data.temperature = Math.floor(data.temperature)),
            })),
          },
        ],
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        title: {
          align: "left",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          type: "datetime",
        },
      };
    
      if(!isGeoChartRendered){
      var chart = new ApexCharts(document.querySelector("#chart"), options);
      chart.render();
      window.chart = chart
      localStorage.removeItem("weatherDataGeo");
      isGeoChartRendered = true;
      console.log(`graph ${isGeoChartRendered}`);
    }
      

    
  }
  });

document.getElementById("searchCity").addEventListener("click", () => {
  if(isGeoChartRendered){
    window.chart.destroy()
    isGeoChartRendered = false;
  }  
  if (container.style.display === "block") {
    container.style.display = "node";
  } else {
    container.style.display = "block";
  }
    searchWeather();
    if (localStorage.getItem("weatherData") !== null && !isChartRendered) {
      const data = JSON.parse(localStorage.getItem("weatherData"));
      console.log(data);  
      const Data = [
        { date: data.list[0].dt_txt, temperature: data.list[0].main.temp },
        { date: data.list[8].dt_txt, temperature: data.list[8].main.temp },
        { date: data.list[16].dt_txt, temperature: data.list[16].main.temp },
        { date: data.list[24].dt_txt, temperature: data.list[24].main.temp },
        { date: data.list[32].dt_txt, temperature: data.list[32].main.temp },
        { date: data.list[39].dt_txt, temperature: data.list[39].main.temp },
      ];
    
      var options = {
        series: [
          {
            name: "Temperature",
            data: Data.map((data) => ({
              x: new Date(data.date).getTime(),
              y: (data.temperature = Math.floor(data.temperature)),
            })),
          },
        ],
        chart: {
          height: 350,
          type: "line",
          zoom: {
            enabled: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "straight",
        },
        title: {
          align: "left",
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "transparent"], // takes an array which will be repeated on columns
            opacity: 0.5,
          },
        },
        xaxis: {
          type: "datetime",
        },
      };
    if(!isChartRendered){
      var chart = new ApexCharts(document.querySelector("#chart"), options);
      window.chart = chart
      chart.render();
      localStorage.removeItem("weatherData");
      isChartRendered = true;
    }
  }
    
  });
