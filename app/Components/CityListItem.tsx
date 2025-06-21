import React from 'react';
import { City } from '../lib/types';

interface CityListItemProps {
  city: City;
  isSelected: boolean;
  onClick: (city: City) => void;
}

const CityListItem: React.FC<CityListItemProps> = ({ city, isSelected, onClick }) => {
  return (
    <li
      className={`py-3 px-4 cursor-pointer border-b border-borderColor transition-colors duration-200 text-lg text-gray-800 flex items-center justify-between
        ${isSelected ? 'bg-selectedCityBg text-primaryBlue font-bold' : 'hover:bg-gray-100'}
        ${isSelected && 'last:border-b-0'} /* Remove bottom border for selected last item */
      `}
      onClick={() => onClick(city)}
      aria-current={isSelected ? 'page' : undefined}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          onClick(city);
        }
      }}
    >
      {city.name}
    </li>
  );
};

export default CityListItem;