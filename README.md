````markdown
# My Weather Map App

A modern and responsive web application built with Next.js and Leaflet, displaying interactive maps and real-time weather forecasts for selected cities. Users can browse a list of popular cities, search for specific locations, and view detailed daily weather predictions upon clicking a city marker on the map.

## Table of Contents

-   [Features](#features)
-   [Technologies Used](#technologies-used)
-   [API Used](#api-used)
-   [Setup and Installation](#setup-and-installation)
    -   [Prerequisites](#prerequisites)
    -   [Cloning the Repository](#cloning-the-repository)
    -   [Environment Variables](#environment-variables)
    -   [Install Dependencies](#install-dependencies)
    -   [Run the Development Server](#run-the-development-server)
-   [Usage](#usage)
-   [Project Structure](#project-structure)
-   [Acknowledgements](#acknowledgements)
-   [License](#license)

## Features

* **Interactive Map Display**: Utilizes Leaflet and OpenStreetMap for a rich mapping experience.
* **City Selection**: Browse and select from a predefined list of popular cities.
* **City Search**: Filter cities by name using a debounced search input for efficient lookup.
* **Custom Map Markers**: Unique custom SVG markers for selected cities.
* **Dynamic Weather Forecast Popups**: Click on a city marker to view a popup with a 2-day weather forecast (Today and Tomorrow).
* **Loading and Error States**: User-friendly feedback for weather data fetching.
* **Responsive Design**: Optimized for both mobile and desktop screens using Tailwind CSS.
* **Fast & Performant**: Built with Next.js for efficient server-side rendering (SSR) and client-side hydration, with dynamic imports for map components to prevent `window is not defined` errors.

## Technologies Used

* **Next.js 15**: React framework for building server-rendered and statically generated web applications.
* **React 19**: JavaScript library for building user interfaces.
* **TypeScript 5**: Strongly typed superset of JavaScript.
* **Leaflet 1.x**: Open-source JavaScript library for interactive maps.
* **React-Leaflet 5.x**: React components for Leaflet maps.
* **Tailwind CSS 4**: A utility-first CSS framework for rapidly styling.
* **Geist Fonts**: Modern, open-source fonts for a sleek UI.
* **`react-dom/server`**: Used to render React SVG components to HTML strings for Leaflet custom icons.
* **`useDebounce` Hook**: Custom hook for debouncing search input.

## API Used

* **OpenWeatherMap API**: Fetches current and forecast weather data.

## Setup and Installation

Follow these steps to get the project up and running on your local machine.

### Prerequisites

* Node.js (v18 or higher recommended)
* npm or Yarn

### Cloning the Repository

```bash
git clone [https://github.com/your-username/my-weather-map-app.git](https://github.com/your-username/my-weather-map-app.git)
cd my-weather-map-app
````

### Environment Variables

You need an API key from OpenWeatherMap to fetch weather data.

1.  **Sign up** for a free account at [OpenWeatherMap](https://openweathermap.org/api).

2.  **Obtain your API key**.

3.  Create a file named `.env.local` in the root of your project:

    ```env
    NEXT_PUBLIC_OPENWEATHER_API_KEY=YOUR_OPENWEATHER_API_KEY
    ```

    Replace `YOUR_OPENWEATHER_API_KEY` with the key you obtained from OpenWeatherMap.

### Install Dependencies

```bash
npm install
# or
yarn install
```

### Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](https://www.google.com/search?q=http://localhost:3000) in your browser to see the application.

## Usage

1.  **Sidebar Navigation**: On the left (desktop) or top (mobile), you'll see a list of popular cities. Click on any city to center the map on that location and open its weather popup.
2.  **Search Cities**: Use the search bar in the sidebar to filter the list of cities.
3.  **Map Interaction**: Pan and zoom the map as you normally would.
4.  **Weather Popups**: Click on the custom marker for the selected city on the map to open a detailed weather forecast popup. The popup will display today's and tomorrow's forecast, including temperature range and weather description.

## Project Structure

```
my-weather-map-app/
├── public/                     # Static assets (images, etc.)
├── src/
│   ├── app/                    # Next.js App Router root
│   │   ├── Components/         # React components
│   │   │   ├── Map.tsx         # Main map component (Leaflet)
│   │   │   ├── Sidebar.tsx     # City list and search sidebar
│   │   │   ├── CityListItem.tsx# Individual city item in sidebar
│   │   │   ├── WeatherPopup.tsx# Weather forecast display in map popup
│   │   │   └── icons/          # SVG icon components
│   │   │       ├── InfoIcon.tsx
│   │   │       └── HospitalIcon.tsx (example)
│   │   ├── globals.css         # Global Tailwind CSS styles
│   │   ├── layout.tsx          # Root layout for Next.js app
│   │   └── page.tsx            # Main application page (HomePage)
│   ├── hooks/                  # Custom React hooks
│   │   └── useDebounce.ts
│   ├── lib/                    # Utility functions and types
│   │   ├── constants.ts        # City data
│   │   ├── types.ts            # TypeScript interfaces
│   │   └── weatherApi.ts       # Functions for fetching weather data
│   └── ...
├── .env.local                  # Environment variables (not committed)
├── next.config.mjs             # Next.js configuration
├── package.json                # Project dependencies and scripts
├── tsconfig.json               # TypeScript configuration
└── README.md                   # This file
```

## Acknowledgements

  * Map tiles provided by [OpenStreetMap](https://www.openstreetmap.org/copyright).
  * Weather data provided by [OpenWeatherMap](https://openweathermap.org/).
  * Map library [Leaflet](https://leafletjs.com/) and [React-Leaflet](https://react-leaflet.js.org/).

## License

[MIT License](https://www.google.com/search?q=LICENSE) (You might want to create a `LICENSE` file in the root if you choose an open-source license like MIT).

```
```