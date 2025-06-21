'use client';

import React, { useState, useEffect, useCallback, useRef } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import ReactDOMServer from 'react-dom/server';

// NEW: Import react-icons
import { FaInfoCircle, FaHotel, FaChurch, FaMosque, FaUtensils } from 'react-icons/fa';
// You can explore other icon sets from react-icons (e.g., Io5 for Ionicons, Md for Material Design)
// import { IoRestaurantSharp } from 'react-icons/io5';
// import { MdHotel } from 'react-icons/md';


// Fix for default marker icon issue in Leaflet with Webpack/Next.js
delete (L.Icon.Default.prototype as { _getIconUrl?: unknown })._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

import { City, WeatherForecast, PointOfInterest, PoiType } from '../lib/types';
import WeatherPopup from './WeatherPopup';
import { fetchWeatherForecast } from '../lib/weatherApi';
import { POIS } from '../lib/constants';

interface MapProps {
  selectedCity: City | null;
}

// Updated createReactDivIcon to be more flexible with icon components
const createReactDivIcon = (
  IconComponent: React.ElementType, // Now directly takes the React icon component (e.g., FaInfoCircle)
  iconProps: { size?: number; className?: string }, // Props for the icon component itself
  divIconOptions?: L.DivIconOptions // Options for the Leaflet L.divIcon
) => {
  // `react-icons` components will inherit `currentColor` by default from the parent div.
  // We pass `size` directly to the `react-icon` component.
  const iconHtml = ReactDOMServer.renderToString(
    <IconComponent size={iconProps.size} className={iconProps.className} />
  );

  return L.divIcon({
    html: iconHtml,
    // The className for the divIcon's wrapper div. Use this for setting color via Tailwind.
    className: divIconOptions?.className || 'custom-marker-icon flex items-center justify-center',
    iconSize: divIconOptions?.iconSize || [30, 30],
    iconAnchor: divIconOptions?.iconAnchor || [15, 30],
    popupAnchor: divIconOptions?.popupAnchor || [0, -25],
  });
};

// Function to get the correct icon based on POI type
const getPoiLeafletIcon = (poiType: PoiType) => {
  let IconComponent: React.ElementType;
  const iconBaseSize = 28; // Base size for react-icons
  const divIconSize: [number, number] = [40, 40]; // Size of the divIcon container
  let colorClass = '';

  switch (poiType) {
    case PoiType.Hotel:
      IconComponent = FaHotel;
      colorClass = 'text-yellow-600';
      break;
    case PoiType.Church:
      IconComponent = FaChurch;
      colorClass = 'text-purple-600';
      break;
    case PoiType.Mosque:
      IconComponent = FaMosque;
      colorClass = 'text-green-600';
      break;
    case PoiType.Food:
      IconComponent = FaUtensils; // Using FaUtensils for food/restaurant
      colorClass = 'text-red-600';
      break;
    default:
      IconComponent = FaInfoCircle; // Fallback
      colorClass = 'text-gray-500';
  }

  return createReactDivIcon(
    IconComponent,
    { size: iconBaseSize }, // Props for the react-icon component
    {
      className: `custom-poi-marker custom-poi-marker-${poiType} ${colorClass} rounded-full bg-white bg-opacity-80 shadow-md flex items-center justify-center`, // Added background for better visibility
      iconSize: divIconSize,
      iconAnchor: [divIconSize[0] / 2, divIconSize[1]],
      popupAnchor: [0, -divIconSize[1] / 2 + 5] // Adjusted popup anchor
    }
  );
};


const Map: React.FC<MapProps> = ({ selectedCity }) => {
  const [mapCenter, setMapCenter] = useState<[number, number]>(
    selectedCity ? [selectedCity.latitude, selectedCity.longitude] : [9.0820, 8.6753]
  );
  const [mapZoom, setMapZoom] = useState<number>(selectedCity ? 10 : 6);

  const [weatherData, setWeatherData] = useState<WeatherForecast | null>(null);
  const [activeCityPopup, setActiveCityPopup] = useState<City | PointOfInterest | null>(null); // Allow active popup to be City or POI
  const [isLoadingWeather, setIsLoadingWeather] = useState(false);

  const markerRef = useRef<L.Marker | null>(null); // For selectedCity's marker

  useEffect(() => {
    if (selectedCity) {
      setMapCenter([selectedCity.latitude, selectedCity.longitude]);
      setMapZoom(10);
      setActiveCityPopup(null); // Close any open popup
      setWeatherData(null);
      setTimeout(() => {
        if (markerRef.current) {
          markerRef.current.openPopup();
          setActiveCityPopup(selectedCity);
        }
      }, 100);
    }
  }, [selectedCity]);

  // Info icon for selected city
  const infoLeafletIcon = React.useMemo(() => createReactDivIcon(
    FaInfoCircle, // Using FaInfoCircle from react-icons
    { size: 32 }, // Size for the react-icon
    {
      className: 'custom-info-marker text-primaryBlue rounded-full bg-white bg-opacity-80 shadow-lg flex items-center justify-center', // Added background for better visibility
      iconSize: [44, 44], // Size of the divIcon container
      iconAnchor: [22, 44],
      popupAnchor: [0, -40]
    }
  ), []);

  const handleCityMarkerClick = useCallback(async (city: City) => {
    if (activeCityPopup?.id === city.id) {
      if (markerRef.current) {
        markerRef.current.closePopup();
      }
      setActiveCityPopup(null);
      setWeatherData(null);
      return;
    }

    setActiveCityPopup(city);
    setIsLoadingWeather(true);
    setWeatherData(null);

    try {
      const forecast = await fetchWeatherForecast(city.latitude, city.longitude);
      setWeatherData(forecast);
    } catch (error) {
      console.error('Error fetching weather:', error);
      setWeatherData(null);
    } finally {
      setIsLoadingWeather(false);
    }
  }, [activeCityPopup]);

  const handlePoiMarkerClick = useCallback((poi: PointOfInterest) => {
    if (activeCityPopup?.id === poi.id) {
      setActiveCityPopup(null);
      return;
    }
    setActiveCityPopup(poi); // Now activeCityPopup can truly be a PointOfInterest
    setWeatherData(null);
  }, [activeCityPopup]);

  const handlePopupClose = useCallback(() => {
    setActiveCityPopup(null);
    setWeatherData(null);
  }, []);


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

      {/* Marker for the currently selected city (from sidebar) */}
      {selectedCity && (
        <Marker
          position={[selectedCity.latitude, selectedCity.longitude]}
          icon={infoLeafletIcon}
          ref={markerRef}
          eventHandlers={{
            click: () => handleCityMarkerClick(selectedCity),
            popupclose: handlePopupClose,
          }}
        >
          <Popup position={[selectedCity.latitude, selectedCity.longitude]}>
            {/* Type guard to check if activeCityPopup is a City */}
            {activeCityPopup && 'name' in activeCityPopup && (activeCityPopup as City).id === selectedCity.id && (
              isLoadingWeather ? (
                <div className="p-4 text-center">Loading weather...</div>
              ) : weatherData ? (
                <WeatherPopup forecast={weatherData} cityName={activeCityPopup.name} />
              ) : (
                <div className="p-4 text-center">Failed to load weather.</div>
              )
            )}
          </Popup>
        </Marker>
      )}

      {/* Markers for Points of Interest (POIs) */}
      {POIS.map(poi => (
        <Marker
          key={poi.id}
          position={[poi.latitude, poi.longitude]}
          icon={getPoiLeafletIcon(poi.type)}
          eventHandlers={{
            click: () => handlePoiMarkerClick(poi),
            popupclose: handlePopupClose,
          }}
        >
          <Popup position={[poi.latitude, poi.longitude]}>
            {/* Type guard to check if activeCityPopup is a PointOfInterest */}
            {activeCityPopup && 'type' in activeCityPopup && (activeCityPopup as PointOfInterest).id === poi.id && (
              <div className="p-3 text-gray-800">
                <h4 className="font-bold text-lg mb-1">{poi.name}</h4>
                <p className="text-sm text-gray-600 capitalize mb-2">Type: {poi.type}</p>
                {poi.description && <p className="text-sm">{poi.description}</p>}
              </div>
            )}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;