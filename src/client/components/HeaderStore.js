// ../components/HeaderHome.js
import mapboxgl from "mapbox-gl";
import MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import DineScreen from '../screens/DineScreen'
let lastSelectedResult = null;
var geocoder = new MapboxGeocoder({
  accessToken: mapboxgl.accessToken,
  mapboxgl: mapboxgl,
  placeholder: 'Location',
  flyTo: false
});
geocoder.on('result', function(e) {
  lastSelectedResult = e.result;
});
const HeaderStore = {
  render: async () => {
    return `
          <nav class="nav navigation container nav-top">
            <section class="grid base nav-main">
          
              <div class="nav-main-left left">
                  <div class="nav-main-logo">
                      <!-- hamburger -->  
                      <img class="img-logo" src="./_assets/_brand/logo/logo-neustar-Dark.svg" alt="">
                  </div>
              </div>
              <div class="nav-main-center search-container">
              
                <div class="search-input">
                <div class="search">

                 <!--CATEGORY-->
                  <div class="searchBar-categoryType">
                    <div class="searchBar-categoryType-container category">
                        <div class="categoryType-text">
                            <span class="text03">
                                <input type="text" id="category" placeholder="Category" />
                            </span>
                        </div>

                    </div>
                  </div>

                  <!--FILLER-->
                  <div class="search-filler">
                    <div class="filler">
                      <div class="cta-input">
                        <span class="field-text">
                          in
                        </span>
                      </div>
                    </div>
                  </div>
                  <!--FILLER-->

                  <!--LOCATION-->
                  <div class="searchBar-location">
                    <div id='geocoder' class='geocoder text03'></div>
                      <!--<div class="text03" id="geocoder"></div>-->
                      <pre id="result"></pre>
                    </div>
                  </div>
                  <!--LOCATION-->

                  <!--CTA-->
                  <div class="searchBar-cta">
                    <div class="searchBar-cta-container">
                      <button id="search-btn"><i class="cta menu-icon icon-Search-21px"></i></button>
                    </div>
                  </div>
                  <!--CTA-->

                </div>
              </div>
              <div class="nav-main-right right">
                <div class="nav-main-right-container">
                  <a href="/Map">
                    <div class="section-tag" id="Location">
                      <div class="section-tag-container">
                        <i class="section-tag-icon icon-Map"></i>
                        <span class="section-tag-text bold03">
                        Map View
                        </span>
                      </div>
                    </div>
                  </a>
                  <div class="section-tag" id="Location">
                    <div class="section-tag-icon hamburger">
                      <i class="icon-hamburger">
                      </i>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </nav>
         


<!--
      <div id="search-bar">
        <input type="text" id="category" placeholder="Category" />
        <div id='geocoder' class='geocoder'></div>
        <button id="search-btn">Search</button>
      </div>
-->
    `;
  },
after_render: async (map) => {
    document.getElementById('geocoder').appendChild(geocoder.onAdd(map));
    document.getElementById('search-btn').addEventListener('click', function() {
      // Your search button click handler code here...
    });
  },
  getLastSelectedResult: () => lastSelectedResult
};
export default HeaderStore;