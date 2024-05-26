export async function getWeather(cityName) {
  const APIKey = "32a0538c4bd35fd12a9352d4badfa493";
  const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${APIKey}`);

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  const data = await response.json();
  return data;
}
