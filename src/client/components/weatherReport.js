// // src/component/weatherReport.js

// const top50Cities = [
//     {"city": "New York", "state": "NY"},
//     {"city": "Los Angeles", "state": "CA"},
//     {"city": "Orange", "state": "CA"},
//     {"city": "Tustin", "state": "CA"},
//     {"city": "Irvine", "state": "CA"},
//     {"city": "Pasadena", "state": "CA"},
//     {"city": "Chicago", "state": "IL"},
//     {"city": "Houston", "state": "TX"},
//     {"city": "Phoenix", "state": "AZ"},
//     {"city": "Philadelphia", "state": "PA"},
//     {"city": "San Antonio", "state": "TX"},
//     {"city": "San Diego", "state": "CA"},
//     {"city": "Dallas", "state": "TX"},
//     {"city": "San Jose", "state": "CA"},
//     {"city": "Austin", "state": "Texas"},
//     {"city": "Sacramento", "state": "CA"},
//     {"city": "Long Beach", "state": "CA"},
//     {"city": "Virginia Beach", "state": "VA"},
//     {"city": "Oakland", "state": "CA"},
//     {"city": "Minneapolis", "state": "MN"},
//     {"city": "Tulsa", "state": "OK"},
//     {"city": "Arlington", "state": "TX"},
//     {"city": "Tampa", "state": "FL"},
//     {"city": "New Orleans", "state": "LA"}
// ];

  
//   const APIKey = "3daeb15cb22b22588e54780c5e9e5711";
  
//   export const weatherData = {};
  
//   function createCityWeatherContainer(json) {
//     const container = document.createElement("div");
//     container.className = "nav-reportBar-content-wrapper-item";
  
//     const cityTitle = document.createElement("span");
//     cityTitle.className = "header03 weatherReport weatherReport_title";
    
//     const cityObject = top50Cities.find(city => city.city === json.name);
//     const cityState = cityObject ? cityObject.state : '';
    
//     cityTitle.textContent = `${json.name}, ${cityState}`;
//     container.appendChild(cityTitle);

//     const temperature = document.createElement("span");
//     temperature.className = "header03 weatherReport weatherReport_temp";
//     temperature.innerHTML = `${parseInt(json.main.temp)}°F`;
//     container.appendChild(temperature);
  
//     // const description = document.createElement("span");
//     // description.className = "header02 weatherReport weatherReport_description";
//     // description.innerHTML = `<i class="weather-description-icon icon-weather-default"></i> ${json.weather[0].description}`;
//     // container.appendChild(description);
  
//     // const weatherDetails = document.createElement("span");
//     // weatherDetails.className = "header02 weatherReport weatherReport_details";
//     // container.appendChild(weatherDetails);
  
//     // const humidity = document.createElement("span");
//     // humidity.className = "header02 weatherReport weatherReport_humidity";
//     // humidity.innerHTML = `
//     //   <i class="fa-solid fa-water"></i>
//     //   <span>${json.main.humidity}%
//     //     Humidity, </span>
//     // `;
//     // weatherDetails.appendChild(humidity);
  
//     // const wind = document.createElement("span");
//     // wind.className = "header02 weatherReport weatherReport_wind";
//     // wind.innerHTML = `
//     //   <i class="fa-solid fa-wind"></i>
//     //   <span>${parseInt(json.wind.speed)}Km/h
//     //   Wind speed</span>
//     // `;
//     // weatherDetails.appendChild(wind);
  
//     // // save weather data
//     // weatherData[json.name] = {
//     //   cityTitle: json.name,
//     //   temperature: Math.round((json.main.temp * 9) / 5 + 32),
//     //   description: json.weather[0].description,
//     //   humidity: json.main.humidity,
//     //   windSpeed: parseInt(json.wind.speed),
//     // };
  
//     return container;
//   }

//   export const fetchCityWeatherData = async (cityName) => {
//     try {
//       const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(cityName)}&units=imperial&appid=${APIKey}`;
//       console.log(url);  // Print URL to console
//       const response = await fetch(url);
//       if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//       } else {
//         const data = await response.json();
//         weatherData[cityName] = data;  // Store fetched weather data into weatherData object
//         return data;
//       }
//     } catch (error) {
//       console.error(`Failed to fetch weather data for city: ${cityName} with error: ${error}`);
//       return null;
//     }
//   }
  
//   top50Cities.forEach(async city => {
//     const json = await fetchCityWeatherData(city.city);
  
//     if (!json || !json.main) {
//       console.error(`Failed to get weather data for city: ${city.city}`);
//       return;
//     }
  
//     const container = createCityWeatherContainer(json);
//     const citiesContainer = document.querySelector(".nav-reportBar-content-wrapper");
//     citiesContainer.appendChild(container);
//   });
  
//   export async function getWeather(cityName) {
//     const data = await fetchCityWeatherData(cityName);
//     return data;
//   }