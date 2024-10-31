const countryList = document.getElementById("country-list");
const searchInput = document.getElementById("search");
const regionFilter = document.getElementById("region-filter");
const loadMoreButton = document.getElementById("load-more");

let countries = [];
let filteredCountries = [];
let displayedCountries = 0;
const countriesPerPage = 10;

// Fetch countries data from API
async function fetchCountries() {
    try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        countries = await response.json();
        filteredCountries = countries;
        displayCountries();
    } catch (error) {
        console.error("Error fetching countries:", error);
    }
}

// Display countries on the page
function displayCountries() {
    const countriesToDisplay = filteredCountries.slice(displayedCountries, displayedCountries + countriesPerPage);
    countriesToDisplay.forEach(country => {
        const countryCard = document.createElement("div");
        countryCard.className = "country-card";
        countryCard.innerHTML = `
      <img src="${country.flags.png}" alt="${country.name.common} flag" />
      <h2>${country.name.common}</h2>
      <div>
      <button onclick="viewCountryDetails('${country.name.common}')">View Details</button>
      <button onclick="Add('${country.name.common}')">Like</button>

      </div>
    `;
        countryList.appendChild(countryCard);
    });
    displayedCountries += countriesToDisplay.length;
}

// Filter countries based on search and region
function filterCountries() {
    const searchValue = searchInput.value.toLowerCase();
    const selectedRegion = regionFilter.value;

    filteredCountries = countries.filter(country => {
        const matchesSearch = country.name.common.toLowerCase().includes(searchValue);
        const matchesRegion = selectedRegion === "all" || country.region === selectedRegion;
        return matchesSearch && matchesRegion;
    });

    displayedCountries = 0; 
    // Reset displayed count
    countryList.innerHTML = "";
     // Clear previous countries
    displayCountries();
     // Display filtered countries
}

// View country details
function viewCountryDetails(countryName) {
    const country = countries.find(c => c.name.common === countryName);
    localStorage.setItem("selectedCountry", JSON.stringify(country)); 
    // Store selected country
    window.location.href = "country-details.html"; 
    // Navigate to details page
}  

function Add(countryName) {
    const country = countries.find(c => c.name.common === countryName);
    
    // Retrieve existing liked countries or initialize an empty array
    const likedCountries = JSON.parse(localStorage.getItem("likedCountries")) || [];
    
    // Check if the user has reached the limit of 5 favorites
    if (likedCountries.length >= 5) {
        alert("You can only favorite up to 5 countries. Redirecting to favorites page.");
        window.location.href = "Like.html"; 
        // Navigate to the favorites page
        return;
         // Exit without adding the new country
    }
    
    // Check if the country is already liked
    if (likedCountries.some(c => c.name.common === countryName)) {
        alert(`${countryName} is already in your favorites!`);
        return; // Exit if country is already a favorite
    }
    
    // Add the new country to the array
    likedCountries.push(country);
  
    // Save the updated list back to localStorage
    localStorage.setItem("likedCountries", JSON.stringify(likedCountries)); 
    
    window.location.href = "Like.html"; 
}

   

// Event listeners
searchInput.addEventListener("input", filterCountries);
regionFilter.addEventListener("change", filterCountries);
loadMoreButton.addEventListener("click", displayCountries);
// Fetch countries on page load
fetchCountries();


































