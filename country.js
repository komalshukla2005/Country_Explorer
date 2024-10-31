// Function to display country details
function displayCountryDetails(country) {
    const countryDetailsContainer = document.getElementById("country-details");
  
    // Clear existing details
    countryDetailsContainer.innerHTML = "";
  
    const countryName = document.createElement("h2");
    countryName.textContent = country.name.common;
  
    const flag = document.createElement("img");
    flag.src = country.flags.png;
    flag.alt = `${country.name.common} flag`;
    flag.width = 150;
  
    const region = document.createElement("p");
    region.textContent = `Region: ${country.region}`;
  
    const population = document.createElement("p");
    population.textContent = `Population: ${country.population.toLocaleString()}`;
  
    const capital = document.createElement("p");
    capital.textContent = `Capital: ${country.capital ? country.capital[0] : "N/A"}`;
  
    // Append elements to the container
    countryDetailsContainer.appendChild(flag);
    countryDetailsContainer.appendChild(countryName);
    countryDetailsContainer.appendChild(region);
    countryDetailsContainer.appendChild(population);
    countryDetailsContainer.appendChild(capital);
  }
  
  // Event listener for the back button
  document.getElementById("back-button").addEventListener("click", () => {
    window.history.back(); 
    // Go back to the previous page
  });
  
  // Retrieve country data on page load
  document.addEventListener("DOMContentLoaded", () => {
    const countryData = JSON.parse(localStorage.getItem("selectedCountry")); // Retrieve country data
    if (countryData) {
      displayCountryDetails(countryData); 
      // Display details for the selected country
    } else {
      console.error("No country data found in localStorage.");
    }
  });
  