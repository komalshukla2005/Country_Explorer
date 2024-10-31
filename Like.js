// Function to display a single country's details
function displayCountryDetails(country) {
    const allitemsContainer = document.getElementById("allitems");
    
    const countryCard = document.createElement("div");
    countryCard.classList.add("country-card");
  
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
  
    // Create a delete button
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      deleteCountry(country.name.common);
    });
  
    // Append elements to the country card
    countryCard.appendChild(flag);
    countryCard.appendChild(countryName);
    countryCard.appendChild(region);
    countryCard.appendChild(population);
    countryCard.appendChild(capital);
    countryCard.appendChild(deleteButton); 
    // Append the delete button
  
    // Append the country card to the allitems container
    allitemsContainer.appendChild(countryCard);
  }
  
  // Function to delete a country from the liked countries
  function deleteCountry(countryName) {
    // Retrieve existing liked countries
    let likedCountries = JSON.parse(localStorage.getItem("likedCountries")) || [];
    
    // Filter out the country to be deleted
    likedCountries = likedCountries.filter(c => c.name.common !== countryName);
  
    // Update local storage
    localStorage.setItem("likedCountries", JSON.stringify(likedCountries));
    
    // Refresh the displayed list
    refreshCountryList();
  }
  
  // Function to refresh the displayed list of liked countries
  function refreshCountryList() {
    const allitemsContainer = document.getElementById("allitems");
    allitemsContainer.innerHTML = ""; 
    // Clear existing list
  
    const likedCountries = JSON.parse(localStorage.getItem("likedCountries")) || []; // Retrieve liked countries
  
    likedCountries.forEach(country => {
      displayCountryDetails(country); 
      // Display details for each liked country
    });
  }
  
  // Event listener for the back button
  document.getElementById("back-button").addEventListener("click", () => {
    window.history.back(); 
    // Go back to the previous page
  });
  
  // Retrieve country data on page load
  document.addEventListener("DOMContentLoaded", () => {
    refreshCountryList(); 
    // Display the liked countries when the page loads
  });
  