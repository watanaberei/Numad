const SearchFunction = {
    displayLocation: (visibility, color) => {
      const locationResults = document.getElementById('search-location-results');
      const cta = document.getElementById('location');
      if(locationResults) locationResults.style.display = visibility;
      if(cta) cta.style.backgroundColor = color;
    },
  
    displayCategory: (visibility, color) => {
      const categoryResults = document.getElementById("search-category-results");
      const cta = document.getElementById('category');
      if(categoryResults) categoryResults.style.display = visibility;
      if(cta) cta.style.backgroundColor = color;
    }
  };
  
  export default SearchFunction;


// document.getElementById("category").onmouseover = function() {displayCategory("grid", '#FF5361')};
// document.getElementById("search-category-results").onmouseover = function() {displayCategory("grid", '#FF0000')};
// document.getElementById("category").onmouseout = function() {displayCategory("none", '')};
// document.getElementById("search-category-results").onmouseout = function() {displayCategory("none", '')};
// document.getElementById("search-category-results").click = function() {displayCategory("none", '')};


// document.getElementById("location").onmouseover = function() {displayLocation("grid", '#FF0000')};
// document.getElementById("search-location-results").onmouseover = function() {displayLocation("grid", '#FF5361')};
// document.getElementById("location").onmouseout = function() {displayLocation("none", '')};
// document.getElementById("search-location-results").onmouseout = function() {displayLocation("none", '')};
// document.getElementById("search-location-results").click = function() {displayLocation("none", '')};


// function displayLocation(visibility, color) {
//   const location = document.getElementById('search-location-results');
//   const cta = document.getElementById('location');
//   const locationButton = document.getElementById("search-location");
// 	location.style.display = visibility;
//   cta.style.backgroundColor = color;
// }


// function displayCategory(visibility, color) {
//   const category = document.getElementById("search-category-results");
//   const cta = document.getElementById('category');
//   const categoryButton = document.getElementById("search-category");
// 	category.style.display = visibility;
//   cta.style.backgroundColor = color;
// }

