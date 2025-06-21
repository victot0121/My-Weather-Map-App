import React from 'react';

const HospitalIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    width="24px" 
    height="24px" 
    {...props} 
  >
   
    <path d="M19 9h-4V5H9v4H5v6h4v4h6v-4h4V9zM15 13h-2v2h-2v-2H9v-2h2V9h2v2h2v2z" />
    <path d="M0 0h24v24H0z" fill="none" /> 
  </svg>
);

export default HospitalIcon;