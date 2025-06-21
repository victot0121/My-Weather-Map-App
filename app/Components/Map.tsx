'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import ReactDOMServer from 'react-dom/server'; 

delete (L.Icon.Default.prototype as { _getIconUrl?: unknown })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

import { City, WeatherForecast } from '../lib/types';
import WeatherPopup from './WeatherPopup';
import { fetchWeatherForecast } from '../lib/weatherApi';
import InfoIcon from './icons/InfoIcon'; 

interface MapProps {
  selectedCity: City | null;
}


const createReactDivIcon = (
  Component: React.ElementType,
  componentProps: React.SVGProps<SVGSVGElement>, // Props to pass to your React SVG component
  divIconOptions?: L.DivIconOptions // Options for the Leaflet L.divIcon
) => {
  // Render the React component to an HTML string
  const iconHtml = ReactDOMServer.renderToString(<Component {...componentProps} />);

  return L.divIcon({
    html: iconHtml,
    className: divIconOptions?.className || 'custom-marker-icon', // Default class name for the div
    iconSize: divIconOptions?.iconSize || [50, 50],
    iconAnchor: divIconOptions?.iconAnchor || [15, 30],
    popupAnchor: divIconOptions?.popupAnchor || [0, -25],
  });
};


const Map: React.FC<MapProps> = ({ selectedCity }) => {
  const [mapCenter, setMapCenter] = useState<[number, number]>(
    selectedCity ? [selectedCity.latitude, selectedCity.longitude] : [9.0820, 8.6753] // Centered on Nigeria if no city selected
  );
  const [mapZoom, setMapZoom] = useState<number>(selectedCity ? 10 : 6); // Adjust default zoom for wider view

  const [weatherData, setWeatherData] = useState<WeatherForecast | null>(null);
  const [activeCityPopup, setActiveCityPopup] = useState<City | null>(null); // This state controls which popup is open
  const [isLoadingWeather, setIsLoadingWeather] = useState(false);

  // Effect to update map center and zoom when selectedCity changes
  useEffect(() => {
    if (selectedCity) {
      setMapCenter([selectedCity.latitude, selectedCity.longitude]);
      setMapZoom(10);
      setActiveCityPopup(null); // Close any open popup when a new city is selected from sidebar
      setWeatherData(null);
    }
  }, [selectedCity]);

 
  const infoLeafletIcon = React.useMemo(() => createReactDivIcon(
    InfoIcon,
    { className: 'text-primaryBlue drop-shadow-md w-full h-full' }, // Props for the SVG element. `w-full h-full` helps it fill the parent div.
    {
      className: 'custom-info-marker', // Class for the divIcon's outer div
      iconSize: [36, 36], // Size of the DIV wrapper
      iconAnchor: [18, 36], // Anchor point relative to iconSize [half_width, full_height]
      popupAnchor: [0, -30] // Position of the popup relative to the iconAnchor
    }
  ), []); 
  const handleMarkerClick = useCallback(async (city: City) => {
    // If the clicked city is already active, close the popup
    if (activeCityPopup?.id === city.id) {
      setActiveCityPopup(null);
      setWeatherData(null);
      return;
    }

    // Set the clicked city as active and fetch weather
    setActiveCityPopup(city);
    setIsLoadingWeather(true);
    setWeatherData(null); // Clear previous weather data

    try {
      const forecast = await fetchWeatherForecast(city.latitude, city.longitude);
      setWeatherData(forecast);
    } catch (error) {
      console.error('Error fetching weather:', error);
      setWeatherData(null); // Set to null on error to indicate failure
    } finally {
      setIsLoadingWeather(false);
    }
  }, [activeCityPopup]); // Re-create if activeCityPopup changes

  return (
    <MapContainer
      center={mapCenter}
      zoom={mapZoom}
      scrollWheelZoom={true}
      className="h-full w-full"
      key={selectedCity?.id || 'initial-map'}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {selectedCity && (
        <Marker
          position={[selectedCity.latitude, selectedCity.longitude]}
          icon={infoLeafletIcon} // Using the custom InfoIcon
          eventHandlers={{
            click: () => handleMarkerClick(selectedCity),
          }}
        >
          <Popup
            position={[selectedCity.latitude, selectedCity.longitude]}
            eventHandlers={{
              remove: () => {
                setActiveCityPopup(null); 
                setWeatherData(null);
              }
            }}
          >
            {/* Conditional rendering for WeatherPopup inside the Leaflet Popup */}
            {activeCityPopup?.id === selectedCity.id && (
              isLoadingWeather ? (
                <div className="p-4 text-center">Loading weather...</div>
              ) : weatherData ? (
                <WeatherPopup forecast={weatherData} cityName={activeCityPopup.name} />
              ) : (
                <div className="p-4 text-center">Failed to load weather. Please try again.</div>
              )
            )}
          </Popup>
        </Marker>
      )}
    </MapContainer>
  );
};

export default Map;