  // ..components/Search.js
  import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
  import SearchFunction from './SearchFunction.js';
  import mapboxgl from "mapbox-gl";

  const Search = {
    render: () => {
      return `
        <!-- Ensure your elements are defined here -->
        <div id="category"></div>
        <div id="location"></div>
        <div id="search-category-results"></div>
        <div id="search-location-results"></div>
        <!-- ... more elements ... -->
      `;
    },
    attachEvents: () => {
      const category = document.getElementById("category");
      const searchCategoryResults = document.getElementById("search-category-results");
      const locationElement = document.getElementById("location");
      const searchLocationResults = document.getElementById("search-location-results");
  
      if(category) {
        category.addEventListener('mouseover', () => displayCategory("grid", '#FF5361'));
        category.addEventListener('mouseout', () => displayCategory("none", ''));
      }
  
      if(searchCategoryResults) {
        searchCategoryResults.addEventListener('mouseover', () => displayCategory("grid", '#FF0000'));
        searchCategoryResults.addEventListener('mouseout', () => displayCategory("none", ''));
        searchCategoryResults.addEventListener('click', () => displayCategory("none", ''));
      }
  
      if(locationElement) {
        locationElement.addEventListener('mouseover', () => displayLocation("grid", '#FF0000'));
        locationElement.addEventListener('mouseout', () => displayLocation("none", ''));
      }
  
      if(searchLocationResults) {
        searchLocationResults.addEventListener('mouseover', () => displayLocation("grid", '#FF5361'));
        searchLocationResults.addEventListener('mouseout', () => displayLocation("none", ''));
        searchLocationResults.addEventListener('click', () => displayLocation("none", ''));
      }
    },
  };
  
  function displayLocation(visibility, color) {
    const locationResults = document.getElementById('search-location-results');
    const cta = document.getElementById('location');
    if(locationResults) locationResults.style.display = visibility;
    if(cta) cta.style.backgroundColor = color;
  }
  
  function displayCategory(visibility, color) {
    const categoryResults = document.getElementById("search-category-results");
    const cta = document.getElementById('category');
    if(categoryResults) categoryResults.style.display = visibility;
    if(cta) cta.style.backgroundColor = color;
  }
  
  export default Search;
  