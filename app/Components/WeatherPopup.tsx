import { DailyWeather, WeatherForecast } from '../lib/types';

interface WeatherPopupProps {
  forecast: WeatherForecast;
  cityName: string;
}

const formatTemperature = (temp: number) => `${Math.round(temp)}°C`;

const WeatherPopup: React.FC<WeatherPopupProps> = ({ forecast, cityName }) => {
  if (!forecast || !forecast.daily || forecast.daily.length < 2) {
    return <div className="p-4 text-center">No forecast data available.</div>;
  }

  const today = forecast.daily[0];
  const tomorrow = forecast.daily[1];

  const renderDayForecast = (day: DailyWeather, label: string) => {
    
    const date = new Date((day.dt + forecast.timezone_offset) * 1000);
    const dayName = label === 'Today' ? 'Today' : date.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' });

    return (
      <div className="flex-1 text-center p-2.5 rounded-lg bg-popupBgLight border border-gray-200">
        <h3 className="text-base mt-0 mb-2 text-gray-700">{dayName}</h3>
        <div className="flex justify-center">
          {day.weather[0]?.icon && (
            <img
              src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@2x.png`}
              alt={day.weather[0]?.description}
              width={60}
              height={60}
              className="block mx-auto"
            />
          )}
        </div>
        <p className="text-2xl font-bold my-1 text-primaryBlue">
          {formatTemperature(day.temp.day)}
        </p>
        <p className="text-sm text-gray-600 capitalize mb-2">{day.weather[0]?.description}</p>
        <div className="text-xs text-gray-700 flex justify-around mt-2">
          <span className="whitespace-nowrap">Min: {formatTemperature(day.temp.min)}</span>
          <span className="whitespace-nowrap">Max: {formatTemperature(day.temp.max)}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="p-4 min-w-[280px] text-gray-800">
      <h4 className="mt-0 mb-4 text-gray-800 text-lg text-center">Weather in {cityName}</h4>
      <div className="flex gap-4 justify-around">
        {renderDayForecast(today, 'Today')}
        {renderDayForecast(tomorrow, 'Tomorrow')}
      </div>
    </div>
  );
};

export default WeatherPopup;