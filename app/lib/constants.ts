// src/lib/constants.ts

import { City, PointOfInterest, PoiType } from './types';

// Existing CITIES array
export const CITIES: City[] = [
    { id: '1', name: 'Lagos', latitude: 6.5244, longitude: 3.3792, country: 'Nigeria' },
    { id: '2', name: 'Abuja', latitude: 9.0765, longitude: 7.3986, country: 'Nigeria' },
    { id: '3', name: 'Kano', latitude: 11.9961, longitude: 8.5186, country: 'Nigeria' },
    { id: '4', name: 'Ibadan', latitude: 7.3963, longitude: 3.9167, country: 'Nigeria' },
    { id: '5', name: 'Port Harcourt', latitude: 4.7793, longitude: 7.0156, country: 'Nigeria' },
    { id: '6', name: 'Kaduna', latitude: 10.5187, longitude: 7.4382, country: 'Nigeria' },
    { id: '7', name: 'Benin City', latitude: 6.3391, longitude: 5.6179, country: 'Nigeria' },
    { id: '8', name: 'Enugu', latitude: 6.4485, longitude: 7.501, country: 'Nigeria' },
    { id: '9', name: 'Abeokuta', latitude: 7.1539, longitude: 3.3486, country: 'Nigeria' },
    { id: '10', name: 'Onitsha', latitude: 6.1667, longitude: 6.7833, country: 'Nigeria' },
    { id: '11', name: 'Sokoto', latitude: 13.0628, longitude: 5.2345, country: 'Nigeria' },
    { id: '12', name: 'Maiduguri', latitude: 11.8385, longitude: 13.1508, country: 'Nigeria' },
    { id: '13', name: 'Zaria', latitude: 11.0886, longitude: 7.717, country: 'Nigeria' },
    { id: '14', name: 'Calabar', latitude: 4.9547, longitude: 8.3228, country: 'Nigeria' },
    { id: '15', name: 'Uyo', latitude: 5.05, longitude: 7.9167, country: 'Nigeria' },
    { id: '16', name: 'Akure', latitude: 7.25, longitude: 5.1953, country: 'Nigeria' },
    { id: '17', name: 'Owerri', latitude: 5.4833, longitude: 7.0333, country: 'Nigeria' },
    { id: '18', name: 'Ilorin', latitude: 8.5, longitude: 4.55, country: 'Nigeria' },
    { id: '19', name: 'Bauchi', latitude: 10.3167, longitude: 9.85, country: 'Nigeria' },
    { id: '20', name: 'Jos', latitude: 9.9238, longitude: 8.8953, country: 'Nigeria' },
    { id: '21', name: 'Warri', latitude: 5.5167, longitude: 5.75, country: 'Nigeria' },
    { id: '22', name: 'Makurdi', latitude: 7.7333, longitude: 8.5333, country: 'Nigeria' },
    { id: '23', name: 'Yola', latitude: 9.2045, longitude: 12.483, country: 'Nigeria' },
    { id: '24', name: 'Minna', latitude: 9.6167, longitude: 6.55, country: 'Nigeria' },
    { id: '25', name: 'Lokoja', latitude: 7.8028, longitude: 6.7333, country: 'Nigeria' },
    { id: '26', name: 'Gombe', latitude: 10.2833, longitude: 11.1667, country: 'Nigeria' },
    { id: '27', name: 'Umuahia', latitude: 5.5333, longitude: 7.5, country: 'Nigeria' },
    { id: '28', name: 'Awka', latitude: 6.2087, longitude: 7.0673, country: 'Nigeria' },
    { id: '29', name: 'Yenagoa', latitude: 4.9248, longitude: 6.2678, country: 'Nigeria' },
    { id: '30', name: 'Osogbo', latitude: 7.7667, longitude: 4.5667, country: 'Nigeria' },
];

// NEW: Array of Points of Interest
export const POIS: PointOfInterest[] = [
    { id: 'poi-1', name: 'Grand Hotel Lagos', latitude: 6.45, longitude: 3.39, type: PoiType.Hotel, description: 'A luxurious stay in the heart of Lagos.' },
    { id: 'poi-2', name: 'Central Mosque Abuja', latitude: 9.076, longitude: 7.48, type: PoiType.Mosque, description: 'A prominent religious site in Abuja.' },
    { id: 'poi-3', name: 'St. Peter\'s Church', latitude: 6.53, longitude: 3.35, type: PoiType.Church, description: 'Historic church in Lagos.' },
    { id: 'poi-4', name: 'The Local Eatery', latitude: 9.06, longitude: 7.40, type: PoiType.Food, description: 'Best local dishes in Abuja!' },
    { id: 'poi-5', name: 'Kano Grand Hotel', latitude: 12.00, longitude: 8.52, type: PoiType.Hotel, description: 'Comfortable accommodation in Kano.' },
    { id: 'poi-6', name: 'Food Paradise', latitude: 7.39, longitude: 3.90, type: PoiType.Food, description: 'Diverse menu for all tastes in Ibadan.' },
    { id: 'poi-7', name: 'National Mosque Abuja', latitude: 9.0833, longitude: 7.4833, type: PoiType.Mosque, description: 'One of Nigeria\'s most beautiful mosques.' },
    // Add more POIs as desired
];