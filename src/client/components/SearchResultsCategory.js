// ..components/Search.js
import SearchFunction from './SearchFunction.js';

const SearchResultsCategory = {
  render: (searchResultsCategory) => {
  return `

                  <div class="search-category" id="search-category"> 
                  <!--    
                    <a class="search-field search-fieldPlace" id="category" href="#" >
                    <div class="cta">            
                      <div class="cta-icon">
                        <i class="icon-category-Work20px">
                        </i>
                      </div>
                      <div class="cta-input field">
                        <span class="ink field-text">
                          Work
                        </span>
                      </div>        
                    </div>
                  </a>
                  -->

                  <div class="search-category-results" id="search-category-results">
                    <div class="search-category-results-split" >
                      <div class="search-category-results-list">
                        <div class="list-item-title">
                          Categories
                        </div>
                        <div class="search-location-results-list-item">
                          <div class="list-item-img-container">
                            <img class="list-item-img">
                            </img>
                          </div>
                          <div class="list-item-text">
                            Long Beach
                          </div>
                        </div>
                        <div class="search-category-results-list-item">
                          <div class="list-item-img-container">
                            <img class="list-item-img">
                          </img>
                          </div>
                          <div class="list-item-text">
                            Torrance
                          </div>
                        </div>
                        <div class="search-category-results-list-item">
                          <div class="list-item-img-container">
                            <img class="list-item-img">
                            </img>
                          </div>
                          <div class="list-item-text">
                            Cerritos
                          </div>
                        </div>
                      </div>
                      <div class="search-category-results-card">
                        <div class="list-item-title">
                          Categories
                        </div>
                        <div class="search-location-results-card-item">
                          <div class="card-item">
                            <img class="card-item-img">
                            </img>
                          </div>
                          <div class="card-item-text">
                            img item
                          </div>
                        </div>
                        <div class="search-category-results-card-item">
                          <div class="card-item">
                            <img class="card-item-img">
                          </img>
                          </div>
                          <div class="card-item-text">
                            img item
                          </div>
                        </div>
                        <div class="search-category-results-card-item">
                          <div class="card-item">
                            <img class="card-item-img">
                            </img>
                          </div>
                          <div class="card-item-text">
                            img item
                          </div>
                        </div>
                        <div class="search-category-results-card-item">
                          <div class="card-item">
                            <img class="card-item-img">
                            </img>
                          </div>
                          <div class="card-item-text">
                            img item
                          </div>
                        </div>
                        <div class="search-category-results-card-item">
                          <div class="card-item">
                            <img class="card-item-img">
                          </img>
                          </div>
                          <div class="card-item-text">
                            img item
                          </div>
                        </div>
                        <div class="search-category-results-card-item">
                          <div class="card-item">
                            <img class="card-item-img">
                            </img>
                          </div>
                          <div class="card-item-text">
                            img item
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
            </div>
          
      `;
    },
    attachEvents: () => {
      const category = document.getElementById("category");
      const searchCategoryResults = document.getElementById("search-category-results");
      const locationElement = document.getElementById("location");
      const searchLocationResults = document.getElementById("search-location-results");
  
      // Since the functions will be in another file, you'll call them like this:
      if(category) {
        category.addEventListener('mouseover', () => SearchFunction.displayCategory("grid", '#FF5361'));
        category.addEventListener('mouseout', () => SearchFunction.displayCategory("none", ''));
      }
      
     // similar for other event listeners
    }
  };
  
  export default SearchResultsCategory;