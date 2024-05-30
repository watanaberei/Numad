// src/screens/Header.js
import allTags from "./DataTags.js";
import {
  getArticleNeumadsTrail,
  getStoresNeumadsReview,
  getArticlePost,
} from "../api.js";
import { weatherData, fetchCityWeatherData } from "./weatherReport.js";
// import LocationInput from "../components/locationInput.js";
import fetchDateTime from "./timeApi.js";
// import { createGeocoderInput } from "../components/GeocoderInput";
import { geojsonStore } from "./GeojsonStores.js";
import { sortByDistance } from "../utils.js";
import DataPost from "./DataPost.js";
import DataFilter from "./DataFilter.js";
import Search from "./Search.js";


let dataPost = new DataPost();

function getTopTags(PostData, limit = 10) {
  const tagCounts = {};
//   console.log("Header tagCounts",tagCounts);
  PostData.forEach((post) => {
    const tags = post.tag && post.tag.length ? post.tag[0].tags : [];
    // console.log("Header tags",tags);
    tags.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  const sortedTags = Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1])
    .map((entry) => entry[0]);
    // console.log("Header sortedTags",sortedTags);
  return sortedTags.slice(0, limit);
}

export function storeSelectedLocation(result) {
  if (result && result.result && result.result.geometry) {
    localStorage.setItem(
      "selectedLocation",
      JSON.stringify(result.result.geometry.coordinates)
    );
  }
}
const HeaderMap = {
  render: async () => {
    const PostData = await dataPost.getData();
    const allTags = PostData.reduce((tags, post) => {
      const postTags = post.tag && post.tag.length ? post.tag[0].tags : [];
      return [...tags, ...postTags];
    }, []);
    const topTags = allTags.slice(0, 10);
    
    const dataFilter = new DataFilter(topTags, dataPost.activeTags, dataPost.setActiveTags.bind(dataPost));

    const primaryFeaturedPosts = PostData.slice(0, 1);
    const featuredPosts = PostData.slice(2, 5);
    const allPosts = PostData.slice(3);

    const selectedLocation = JSON.parse(localStorage.getItem('selectedLocation') || 'null');
    const sortedPostData = sortByDistance(selectedLocation, PostData);

    const createListing = (store) => {
      const onClick = () => {}; // Define the onClick behavior if needed
      return createGeojsonListing(store, onClick).outerHTML;
    };


    // const articleData = await getArticleNeumadsTrail(9, 0);
    // const storeData = await getStoresNeumadsReview(9, 0);
    // const postData = await getArticlePost(9, 0);
    // const PostData = [...articleData, ...storeData, ...postData];
    // console.log("Header PostData",PostData);
    // const topTags = getTopTags(PostData, 10);
    // const tagsHTML = allTags(topTags);

    const newLocal = `
        <nav class="navigation container nav-top">

            <!--<section class="nav-reportBar">
                <div class="nav-reportBar-content">
                    <div class="nav-reportBar-content-container">
                        <div class="nav-reportBar-content-wrapper">
                            <span class="text01">Report Bar Content 01</span>
                            <span class="text01">Data 01</span>
                            <span class="text01">Data 02</span>
                        </div>
                        <div class="nav-reportBar-content-wrapper">
                            <span class="text01">Report Bar Content 01</span>
                            <span class="text01">Data 01</span>
                            <span class="text01">Data 02</span>
                        </div>
                    </div>
                </div>
            </section>-->




            <section class="grid base nav-main">
                
                    <div class="nav-main-left left">
                        <div class="nav-main-logo">
                            <!-- hamburger -->  
                            <img class="img-logo" src="./_assets/_brand/logo/theNeumad-logo-18px.svg" alt="">
                        </div>
                    </div>
                    <div class="nav-main-center">
                        <div class="searchBar">
                            <div class="searchBar-categoryType">
                                <div class="searchBar-categoryType-container">
                                    <div class="categoryType-text">
                                        <span class="text03">
                                            Work
                                        </span>
                                    </div>
                                    <div class="categoryType-icon">
                                        <i class="icon-DropDown-21px"></i>
                                    </div>
                                </div>
                                <div class="searchBar-categoryType-dropDown">
                                    <div class="dropDown-item">
                                        <i class="section-tag-icon icon-Work"></i>
                                        <span class="metadata-tag-divider">
                                            <div class="lineV"></div>
                                        </span>
                                        <span class="metadata-tag-text medium00">
                                            Work
                                        </span>
                                    </div>
                                    <div class="dropDown-item">
                                        <i class="section-tag-icon icon-Dine"></i>
                                        <span class="metadata-tag-divider">
                                            <div class="lineV"></div>
                                        </span>
                                        <span class="metadata-tag-text medium00">
                                            Work
                                        </span>
                                    </div>
                                    <div class="dropDown-item">
                                        <i class="section-tag-icon icon-Unwind"></i>
                                        <span class="metadata-tag-divider">
                                            <div class="lineV"></div>
                                        </span>
                                        <span class="metadata-tag-text medium00">
                                            Work
                                        </span>
                                    </div>
                                </div>
                            </div>
                             ${Search.render()}
                            <!--
                            <div class="searchBar-location">
                                <div class="text03" id="geocoder"></div>
                                <pre id="result"></pre>
                            </div>
                            <div class="searchBar-cta">
                                <div class="searchBar-cta-container">
                                    <i class="cta icon-Search-21px"></i>
                                </div>
                            </div>
                            -->
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




    
            <section class="grid base nav-secondary">
                <div class="full nav-tags">
                    <div class="nav-tags-container">
                    <div class="nav-tags-menu"> 
                    
                        <!-- menu -->  
                        <!-- <ul class="nav-tags-list nav-tags-flex"> 
                        
                            <li>
                                <a href="/work">
                                    <div class="metadata-tag-icon" id="Work">
                                        <i class="section-tag-icon icon-Work"></i>
                                        <span class="metadata-tag-divider">
                                            <div class="lineV"></div>
                                        </span>
                                        <span class="metadata-tag-text medium00">
                                            Work
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="/dine">
                                    <div class="metadata-tag-icon" id="Dine">
                                        <i class="section-tag-icon icon-Dine"></i>
                                        <span class="metadata-tag-divider">
                                            <div class="lineV"></div>
                                        </span>
                                        <span class="metadata-tag-text medium00">
                                            Work
                                        </span>
                                    </div>
                                </a>
                            </li>
                            <li>
                                <a href="/unwind">
                                    <div class="metadata-tag-icon" id="Unwind">
                                        <i class="section-tag-icon icon-Unwind"></i>
                                        <span class="metadata-tag-divider">
                                            <div class="lineV"></div>
                                        </span>
                                        <span class="metadata-tag-text medium00">
                                            Work
                                        </span>
                                    </div>
                                </a>
                            </li>
                        </ul>
                        
                        <div class="nav-list-divider">
                            <div class="lineV"></div>
                        </div> 

                        </ul>-->
                    
                        <div class="data">
                            <div id="post-filter post-data" class="text01 bold">${dataFilter.element.outerHTML}</div>
                        </div>
                    </div>  
                </div>   
            </section>
            
            <!-- DATA
            <section class="data">
            <div id="post-filter post-data">${dataFilter.element.outerHTML}</div>
            </section> -->


            <!--SIDEBAR-->
            <!-- menu -->  
            <section class="nav-menu">
                <div class="nav-menu-container">
                
            
                    <ul class="nav-menu-list nav-menu-flex"> 

                    <li>
                        <div class="nav-main-right">
                            <!-- search -->
                            <div class="search-wrapper">
                                <header class="main-search clearfix">
                                <button type="button" class="btn pull-right" id="search-toggle">
                                    <span class="fa fa-search icon-search"></i>
                                </button>
                                <div class="form-search stretch-to-fit">
                                    <label for="search" class="btn pull-left">
                                    <span class="btn fa fa-search icon-search"></i>
                                    </label>
                                    <div class="search-control stretch-to-fit">
                                    <input type="text" id="search" placeholder="Search...">
                                    </div>
                                </div>
                                </header>
                            </div>
                        </div>
                    </li>

                    <li>
                    <div class="navWork-list-divider">
                        <div class="lineV"></div>
                    </div>
                    <li>
                        <a href="/work">
                        <span class="display06">Work</span>
                        </a>
                    </li>
                    <div class="navWork-list-divider">
                        <div class="lineV"></div>
                    </div>
                    <li>
                        <a href="/dine">
                        <span class="display06">Dine</span>
                        </a>
                    </li>
                    <div class="navWork-list-divider">
                        <div class="lineV"></div>
                    </div> 
                    <li>
                        <a href="/unwind"> 
                        <span class="display06">Unwind</span>
                        </a>
                    </li>
                    <div class="navWork-list-divider">
                        <div class="lineV"></div>
                    </div>
                    <li>
                        <a href="/shorts"> 
                        <span class="display06">Shorts</span>
                        </a> 
                    </li>
                    <div class="navWork-list-divider">
                        <div class="lineV"></div> 
                    </div> 
                    </ul>
                <div class="lineH"></div>
                    <ul class="nav-menu-list nav-menu-flex">
                    <li>
                        <a href="/about">
                        <span class="display03">About</span>
                        </a>
                    </li>
                    <div class="navWork-list-divider">
                        <div class="lineV"></div>
                    </div> 
                    <li>
                        <a href="/contact"> 
                        <span class="display03">Contact</span>
                        </a>
                    </li>
                    <div class="navWork-list-divider">
                        <div class="lineV"></div>
                    </div>
                    </ul>
                </div> 
            

                
                </div>   
            </section>            
        </nav>`;
    return newLocal;
  },
  after_render: async () => {
    // const features = await geojsonStore();
    // const geocoder = createGeocoderInput(features);
    // document.getElementById('geocoder').appendChild(geocoder.onAdd(window.map));
    const geocoder = createGeocoderInput(features);
    console.log("About to initialize geocoder...");
    debugger;
    geocoder.on('result', function (result) {
      window.handleGeocoderResult(result);
    });
    console.log("Initialized geocoder..."); 
    // const geocoder = createGeocoderInput(features);

    // geocoder.on("result", storeSelectedLocation);

    const navList = document.querySelector(".nav-list");
    const header = document.querySelector(".header");
    const headerMid = document.querySelector(".nav-mid");
    const utilityLogo = document.querySelector(".nav-utility-mid-logo");
    const search = document.querySelector("#search-toggle");


    // const navHeight = header.getBoundingClientRect().height;
    // window.addEventListener("scroll", () => {
    //   const scrollHeight = window.pageYOffset;
    //   if (scrollHeight > navHeight) {
    //     header.classList.add("fix");
    //     headerMid.classList.add("hide");
    //     utilityLogo.classList.add("show");
    //   } else {
    //     header.classList.remove("fix");
    //     headerMid.classList.remove("hide");
    //     utilityLogo.classList.remove("show");
    //   }
    // });

    // const geocoderContainer = document.getElementById("geocoder");
    // document
    //   .getElementById("geocoder")
    //   .appendChild(geocoder.onAdd(window.map));

    // Removed geocoder.on('result', ...) event listener


    // const links = [...document.querySelectorAll(".nav-list a")];
    // links.map((link) => {
    //   link.addEventListener("click", () => {
    //     window.scrollTo({
    //       top: 0,
    //       left: 0,
    //       behavior: "smooth",
    //     });
    //   });
    // });
    document.querySelectorAll('.tag').forEach(tagElement => {
        tagElement.addEventListener('click', async () => {
          const tag = tagElement.dataset.tag;
          const newActiveTags = dataPost.activeTags.includes(tag)
                ? dataPost.activeTags.filter(activeTag => activeTag !== tag)
                : [...dataPost.activeTags, tag];
  
          dataPost.setActiveTags(newActiveTags);
  
          // Then render your content as needed...
          // For example:
          document.querySelector('#post-layout').innerHTML = await this.render();
          this.after_render();
        });
      });


    const hamburger = document.querySelector(".hamburger");

    hamburger.addEventListener("click", () => {
      navList.classList.toggle("show");
    });
    const navHeight = header.getBoundingClientRect().height;
        window.addEventListener("scroll", () => {
        const scrollHeight = window.pageYOffset;
        if (scrollHeight > navHeight) {
            header.classList.add("fix"); 
            headerMid.classList.add("hide");
            utilityLogo.classList.add("show");

        } else {
            header.classList.remove("fix");
            headerMid.classList.remove("hide");
            utilityLogo.classList.remove("show");
        }
    });
    const links = [...document.querySelectorAll(".nav-menu a")];
      links.map((link) => {
        link.addEventListener("click", () => {
          window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth",
          });
        });
      });
    },
};
export default HeaderMap;
