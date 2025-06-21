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
git clone [https://github.com/victot0121/My-Weather-Map-App.git](https://github.com/victot0121/My-Weather-Map-App.git)
cd My-Weather-Map-App