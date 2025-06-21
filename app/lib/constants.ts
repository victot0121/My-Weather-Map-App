import { City } from './types';

export const CITIES: City[] = [
  // --- Existing Global Cities ---
  { id: '1', name: 'New York', latitude: 40.7128, longitude: -74.0060, country: 'USA' },
  { id: '2', name: 'London', latitude: 51.5074, longitude: -0.1278, country: 'UK' },
  { id: '3', name: 'Paris', latitude: 48.8566, longitude: 2.3522, country: 'France' },
  { id: '4', name: 'Tokyo', latitude: 35.6895, longitude: 139.6917, country: 'Japan' },
  { id: '5', name: 'Sydney', latitude: -33.8688, longitude: 151.2093, country: 'Australia' },
  { id: '6', name: 'Rio de Janeiro', latitude: -22.9068, longitude: -43.1729, country: 'Brazil' },
  { id: '7', name: 'Cairo', latitude: 30.0444, longitude: 31.2357, country: 'Egypt' },
  { id: '8', name: 'Dubai', latitude: 25.276987, longitude: 55.296249, country: 'UAE' },
  { id: '9', name: 'Rome', latitude: 41.9028, longitude: 12.4964, country: 'Italy' },
  { id: '10', name: 'Berlin', latitude: 52.5200, longitude: 13.4050, country: 'Germany' },
  { id: '11', name: 'Moscow', latitude: 55.7558, longitude: 37.6173, country: 'Russia' },
  { id: '12', name: 'Beijing', latitude: 39.9042, longitude: 116.4074, country: 'China' },
  { id: '13', name: 'Cape Town', latitude: -33.9249, longitude: 18.4241, country: 'South Africa' },
  { id: '14', name: 'Mexico City', latitude: 19.4326, longitude: -99.1332, country: 'Mexico' },
  { id: '15', name: 'Toronto', latitude: 43.6532, longitude: -79.3832, country: 'Canada' },
  { id: '16', name: 'Amsterdam', latitude: 52.3676, longitude: 4.9041, country: 'Netherlands' },
  { id: '17', name: 'Barcelona', latitude: 41.3851, longitude: 2.1734, country: 'Spain' },
  { id: '18', name: 'Seoul', latitude: 37.5665, longitude: 126.9780, country: 'South Korea' },
  { id: '19', name: 'Mumbai', latitude: 19.0760, longitude: 72.8777, country: 'India' },
  { id: '20', name: 'Istanbul', latitude: 41.0082, longitude: 28.9784, country: 'Turkey' },

  // --- Nigerian States (ordered alphabetically by state name for convenience) ---
  { id: '21', name: 'Abia State', latitude: 5.5392, longitude: 7.5027, country: 'Nigeria' }, // Capital: Umuahia
  { id: '22', name: 'Adamawa State', latitude: 9.3333, longitude: 12.4667, country: 'Nigeria' }, // Capital: Yola
  { id: '23', name: 'Akwa Ibom State', latitude: 5.0333, longitude: 7.8333, country: 'Nigeria' }, // Capital: Uyo
  { id: '24', name: 'Anambra State', latitude: 6.2000, longitude: 6.9667, country: 'Nigeria' }, // Capital: Awka
  { id: '25', name: 'Bauchi State', latitude: 10.3167, longitude: 9.8333, country: 'Nigeria' }, // Capital: Bauchi
  { id: '26', name: 'Bayelsa State', latitude: 4.9333, longitude: 6.2667, country: 'Nigeria' }, // Capital: Yenagoa
  { id: '27', name: 'Benue State', latitude: 7.7333, longitude: 8.5333, country: 'Nigeria' }, // Capital: Makurdi
  { id: '28', name: 'Borno State', latitude: 11.8333, longitude: 13.1500, country: 'Nigeria' }, // Capital: Maiduguri
  { id: '29', name: 'Cross River State', latitude: 5.0000, longitude: 8.3500, country: 'Nigeria' }, // Capital: Calabar
  { id: '30', name: 'Delta State', latitude: 5.5167, longitude: 5.7500, country: 'Nigeria' }, // Capital: Asaba
  { id: '31', name: 'Ebonyi State', latitude: 6.3333, longitude: 8.1000, country: 'Nigeria' }, // Capital: Abakaliki
  { id: '32', name: 'Edo State', latitude: 6.6667, longitude: 6.0000, country: 'Nigeria' }, // Capital: Benin City
  { id: '33', name: 'Ekiti State', latitude: 7.6667, longitude: 5.2500, country: 'Nigeria' }, // Capital: Ado Ekiti
  { id: '34', name: 'Enugu State', latitude: 6.4333, longitude: 7.5000, country: 'Nigeria' }, // Capital: Enugu
  { id: '35', name: 'FCT (Abuja)', latitude: 9.0765, longitude: 7.3986, country: 'Nigeria' }, // Capital: Abuja (Federal Capital Territory)
  { id: '36', name: 'Gombe State', latitude: 10.2500, longitude: 11.1667, country: 'Nigeria' }, // Capital: Gombe
  { id: '37', name: 'Imo State', latitude: 5.4833, longitude: 7.0333, country: 'Nigeria' }, // Capital: Owerri
  { id: '38', name: 'Jigawa State', latitude: 12.0000, longitude: 9.7500, country: 'Nigeria' }, // Capital: Dutse
  { id: '39', name: 'Kaduna State', latitude: 10.5167, longitude: 7.4333, country: 'Nigeria' }, // Capital: Kaduna
  { id: '40', name: 'Kano State', latitude: 11.9967, longitude: 8.5186, country: 'Nigeria' }, // Capital: Kano
  { id: '41', name: 'Katsina State', latitude: 12.9833, longitude: 7.6167, country: 'Nigeria' }, // Capital: Katsina
  { id: '42', name: 'Kebbi State', latitude: 11.5000, longitude: 4.0000, country: 'Nigeria' }, // Capital: Birnin Kebbi
  { id: '43', name: 'Kogi State', latitude: 7.8000, longitude: 6.7333, country: 'Nigeria' }, // Capital: Lokoja
  { id: '44', name: 'Kwara State', latitude: 8.5000, longitude: 4.5500, country: 'Nigeria' }, // Capital: Ilorin
  { id: '45', name: 'Lagos State', latitude: 6.5244, longitude: 3.3792, country: 'Nigeria' }, // Capital: Ikeja (Lagos City)
  { id: '46', name: 'Nasarawa State', latitude: 8.5333, longitude: 8.0000, country: 'Nigeria' }, // Capital: Lafia
  { id: '47', name: 'Niger State', latitude: 10.0000, longitude: 5.7500, country: 'Nigeria' }, // Capital: Minna
  { id: '48', name: 'Ogun State', latitude: 7.0000, longitude: 3.4667, country: 'Nigeria' }, // Capital: Abeokuta
  { id: '49', name: 'Ondo State', latitude: 6.9167, longitude: 5.1833, country: 'Nigeria' }, // Capital: Akure
  { id: '50', name: 'Osun State', latitude: 7.5000, longitude: 4.5000, country: 'Nigeria' }, // Capital: Osogbo
  { id: '51', name: 'Oyo State', latitude: 7.8333, longitude: 3.9167, country: 'Nigeria' }, // Capital: Ibadan
  { id: '52', name: 'Plateau State', latitude: 9.5000, longitude: 9.1500, country: 'Nigeria' }, // Capital: Jos
  { id: '53', name: 'Rivers State', latitude: 4.7500, longitude: 6.8333, country: 'Nigeria' }, // Capital: Port Harcourt
  { id: '54', name: 'Sokoto State', latitude: 13.0667, longitude: 5.2333, country: 'Nigeria' }, // Capital: Sokoto
  { id: '55', name: 'Taraba State', latitude: 8.0000, longitude: 10.5000, country: 'Nigeria' }, // Capital: Jalingo
  { id: '56', name: 'Yobe State', latitude: 12.0000, longitude: 11.5000, country: 'Nigeria' }, // Capital: Damaturu
  { id: '57', name: 'Zamfara State', latitude: 12.1667, longitude: 6.2000, country: 'Nigeria' }, // Capital: Gusau
];

export const OPENWEATHER_API_KEY = process.env.NEXT_PUBLIC_OPENWEATHER_API_KEY!;