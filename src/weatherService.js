const API_KEY = "f108f4adb253faa49fe23d5f3cbdf504";

const getFormattedWeatherData = async (city, units = "metric") => {
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

  const data = await fetch(URL)
    .then((res) => res.json())
    .then((data) => data);

  console.log(data);
};

export { getFormattedWeatherData };
