import axios from "axios";

export const getCurrentWeather = async () => {
  let apiKey = "15e768797b4bf44b49979df29e6da67a";
  let city = "Stockholm";
  let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  const response = await axios({ url, method: "get" });
  return response.data;
};
