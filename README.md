# Country Explorer

A web application that allows users to search for and explore information about countries around the world. Built with a focus on clean design, usability, and responsiveness.

## Description

Country Explorer is designed to provide an interactive experience for users to discover country information, including population, area, languages, and more. Users can favorite their top countries and filter results by language and region, making it a comprehensive tool for country exploration.

## Usage

Upon opening the application, users will be presented with a landing page featuring a list of countries represented as interactive cards. Users can:

- Search for countries using the search bar at the top.
- Click on country cards to view detailed information on a dedicated details page.
- Filter countries by language or region.
- Favorite countries to save them in local storage.

## Features

- **Country Cards**: Interactive cards displaying the name and flag of each country.
- **Pagination**: Load more countries with a "Show more" button.
- **Dynamic Search**: Search results update in real-time with dropdown suggestions.
- **Details Page**: A dedicated page showing comprehensive information about each country.
- **Filtering**: Filter countries by name and region.
- **Favorites**: Users can favorite up to 5 countries, tracked in local storage.
- **Responsive Design**: The application is fully responsive and works on all device sizes.

## Design Decisions

- **User Experience**: Focused on a clean, intuitive layout to enhance user navigation and experience.
- **Responsiveness**: Used CSS media queries to ensure a seamless experience across devices.
- **Code Structure**: Organized the code into reusable functions and modules for clarity and maintainability.
- **Error Handling**: Implemented meaningful error messages for failed API requests and empty search results.



## Known Issues

During the development of the Country Explorer application, I encountered an issue where the data was not displaying correctly on the next page of results when using pagination. 

### Issue Details
- **Description**: When attempting to view additional data, the next page of countries was not loading as expected.
- **Cause**: The issue was identified as a problem with the API call not properly fetching the next set of results due to incorrect pagination parameters.

### Solution
To resolve this issue, I made the following changes:
1. **Corrected Pagination Logic**: Adjusted the logic in the code to ensure that the API call included the correct parameters for pagination.
2. **Improved State Management**: Ensured that the application correctly tracked the current page state and updated it after each API call.
3. **Added Error Handling**: Implemented error handling to display meaningful messages when data could not be loaded, providing a better user experience.

After these adjustments, the pagination feature now works as intended, allowing users to load and view the next set of countries seamlessly.
