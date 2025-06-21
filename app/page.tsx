'use client'; 

import React, { useState } from 'react';
import dynamic from 'next/dynamic'; 
import Sidebar from "./Components/Sidebar";
import { City } from './lib/types';
import { CITIES } from './lib/constants';


const Map = dynamic(() => import('./Components/Map'), {
  ssr: false, 
  loading: () => <p className="text-center p-4">Loading map...</p>, // Optional loading state
});

const HomePage: React.FC = () => {
  
  const [selectedCity, setSelectedCity] = useState<City | null>(CITIES.length > 0 ? CITIES[0] : null);

  const handleSelectCity = (city: City) => {
    setSelectedCity(city);
  };

  return (
    <div className="flex h-screen overflow-hidden flex-col md:flex-row">
      <Sidebar onSelectCity={handleSelectCity} selectedCity={selectedCity} />
      <main className="relative flex-grow h-[calc(100vh-350px)] md:h-full order-1 md:order-none">
        <Map selectedCity={selectedCity} />
      </main>
    </div>
  );
}

export default HomePage;