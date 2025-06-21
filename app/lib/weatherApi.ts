import { OPENWEATHER_API_KEY } from './constants';
import { WeatherForecast } from './types';


const BASE_URL = 'https://api.openweathermap.org/data/3.0/onecall';
const UNITS = 'metric'; 

export const fetchWeatherForecast = async (
  latitude: number,
  longitude: number
): Promise<WeatherForecast | null> => {
  if (!OPENWEATHER_API_KEY) {
    console.error('OpenWeatherMap API key is not set.');
    return null;
  } 

  try {
    const url = `${BASE_URL}?lat=${latitude}&lon=${longitude}&exclude=minutely,hourly,alerts&units=${UNITS}&appid=${OPENWEATHER_API_KEY}`;
    const response = await fetch(url);

    if (!response.ok) {
      const errorData = await response.json();
      console.error(`Failed to fetch weather: ${response.status} - ${errorData.message}`);
      if (response.status === 401) {
          console.error("OpenWeatherMap API Key might be invalid or not activated for One Call API 3.0.");
      } else if (response.status === 429) {
          console.error("OpenWeatherMap API rate limit exceeded.");
      }
      return null;
    }

    const data = await response.json();
    return data as WeatherForecast;
  } catch (error) {
    console.error('Error fetching weather forecast:', error);
    return null;
  }
};