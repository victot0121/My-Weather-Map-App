
import { useState, useMemo } from 'react';
import { City } from '../lib/types';
import { CITIES } from '../lib/constants';
import CityListItem from './CityListItem';
import useDebounce from '../hooks/useDebounce';

interface SidebarProps {
  onSelectCity: (city: City) => void;
  selectedCity: City | null;
}

const Sidebar: React.FC<SidebarProps> = ({ onSelectCity, selectedCity }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 400);

  const filteredCities = useMemo(() => {
    if (!debouncedSearchTerm) {
      return CITIES;
    }
    const lowerCaseSearchTerm = debouncedSearchTerm.toLowerCase();
    return CITIES.filter(city =>
      city.name.toLowerCase().includes(lowerCaseSearchTerm)
    );
  }, [debouncedSearchTerm]);

  return (
    <aside className="w-full md:w-[300px] md:min-w-[250px] bg-lightGrayBg border-r md:border-r-borderColor border-b md:border-b-0 border-borderColor flex flex-col p-5 box-border overflow-y-auto shadow-md md:order-none order-2 h-[350px] md:h-full"> {/* Responsive width and order, fixed mobile height */}
      <div className="flex mb-5 gap-3">
        <input
          type="text"
          placeholder="Search for a city..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="flex-grow py-2.5 px-4 border border-gray-300 rounded-lg text-base outline-none focus:border-primaryBlue focus:ring-2 focus:ring-blue-200"
        />
        <button className="py-2.5 px-4 bg-primaryBlue text-white border-none rounded-lg cursor-pointer text-base transition-colors duration-200 hover:bg-blue-700">
          Search
        </button>
      </div>
      <div className="font-bold mb-4 text-gray-600 uppercase text-sm tracking-wider">POPULAR SIGHTS</div>
      <ul className="list-none p-0 m-0">
        {filteredCities.length > 0 ? (
          filteredCities.map((city) => (
            <CityListItem
              key={city.id}
              city={city}
              isSelected={selectedCity?.id === city.id}
              onClick={onSelectCity}
            />
          ))
        ) : (
          <li className="text-gray-600 py-2 text-center">No cities found.</li>
        )}
      </ul>
    </aside>
  );
};

export default Sidebar;
