
export interface City {
  id: string;
  name: string;
  latitude: number;
  longitude: number;
  country: string;
}


export interface WeatherCondition {
  id: number;
  main: string;
  description: string;
  icon: string; 
}

export interface DailyWeather {
  dt: number; 
  temp: {
    day: number;
    min: number;
    max: number;
  };
  weather: WeatherCondition[];
  humidity: number;
  wind_speed: number;
}

export interface WeatherForecast {
  current?: DailyWeather; 
  daily: DailyWeather[];
  timezone_offset: number; 
}

// NEW: Enum for different POI types
export enum PoiType {
    Hotel = 'hotel',
    Church = 'church',
    Mosque = 'mosque',
    Food = 'food',
}

// NEW: Interface for a Point of Interest
export interface PointOfInterest {
    id: string;
    name: string;
    latitude: number;
    longitude: number;
    type: PoiType; 
    description?: string; 
}