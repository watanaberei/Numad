// src/screens/HeaderReview.js
import allTags from "../components/DataTags";
import {
  getReviewNeumadsTrail,
  getStoresNeumadsReview,
  getReviewPost,
} from "../api.js";
import { weatherData, fetchCityWeatherData } from "./weatherReport.js";
import LocationInput from "../components/locationInput.js";
import fetchDateTime from "../components/timeApi.js";
import { createGeocoderInput } from "../components/GeocoderInput";
import { geojsonStore } from "../components/GeojsonStores";
import { sortByDistance } from "../utils";
import DataBlog from "./DataPost";
import DataFilter from "../components/DataFilter";


let dataBlog = new DataBlog();

function getTopTags(BlogData, limit = 10) {
  const tagCounts = {};
  console.log("HeaderReview tagCounts",tagCounts);
  BlogData.forEach((blog) => {
    const tags = blog.tag && blog.tag.length ? blog.tag[0].tags : [];
    console.log("HeaderReview tags",tags);
    tags.forEach((tag) => {
      tagCounts[tag] = (tagCounts[tag] || 0) + 1;
    });
  });

  const sortedTags = Object.entries(tagCounts)
    .sort((a, b) => b[1] - a[1])
    .map((entry) => entry[0]);
    console.log("HeaderReview sortedTags",sortedTags);
  return sortedTags.slice(0, limit);
}

function storeSelectedLocation(result) {
  if (result && result.result && result.result.geometry) {
    localStorage.setItem(
      "selectedLocation",
      JSON.stringify(result.result.geometry.coordinates)
    );
  }
}
const HeaderReview = {
  render: async () => {
    const BlogData = await dataBlog.getData();
    const allTags = BlogData.reduce((tags, blog) => {
      const blogTags = blog.tag && blog.tag.length ? blog.tag[0].tags : [];
      return [...tags, ...blogTags];
    }, []);
    const topTags = allTags.slice(0, 10);
    
    const dataFilter = new DataFilter(topTags, dataBlog.activeTags, dataBlog.setActiveTags.bind(dataBlog));

    const primaryFeaturedBlogs = BlogData.slice(0, 1);
    const featuredBlogs = BlogData.slice(2, 5);
    const allBlogs = BlogData.slice(3);

    const selectedLocation = JSON.parse(localStorage.getItem('selectedLocation') || 'null');
    const sortedBlogData = sortByDistance(selectedLocation, BlogData);

    const createListing = (store) => {
      const onClick = () => {}; // Define the onClick behavior if needed
      return createGeojsonListing(store, onClick).outerHTML;
    };


    // const reviewData = await getReviewNeumadsTrail(9, 0);
    // const storeData = await getStoresNeumadsReview(9, 0);
    // const postData = await getReviewPost(9, 0);
    // const BlogData = [...reviewData, ...storeData, ...postData];
    // console.log("Header BlogData",BlogData);
    // const topTags = getTopTags(BlogData, 10);
    // const tagsHTML = allTags(topTags);

    const newLocal = `
        <nav class="navigation container nav-top">

            <section class="nav-reportBar">
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
            </section>




            <section class="nav-utility">
                <div class="nav-utility-container">x
                    <div class="nav-utility-left">
                        <!-- hamburger --> 
                        <div class="hamburger"><i class="icon-hamburger"></i></div>
                    </div>
                    <div class="nav-utility-mid">
                        <div class="nav-utility-mid-logo">
                            <!-- logo -->
                            <img src="./_assets/_brand/logo/neumad_brand_logo-H-med_v01.svg" alt="">
                        </div>
                    </div>
                    <!-- search -->
                    <div class="nav-utility-right">
                        <div class="search-wrapper" id="geocoder-container">
                    </div>
                    <li>
                        <a href="/Map">
                            <div class="section-tag" id="Location">
                                <i class="section-tag-icon icon-Places"></i>
                                <!--<span class="section-tag-divider">
                                <div class="lineV"></div>
                                </span>-->
                                <span class="section-tag-text bold01">
                                Places
                                </span>
                            </div>
                        </a>
                    </li>
                </div>
            </section>



            <section class="nav-mid">
                <div class="nav-mid-left"> 
                <div class="current-date current-data">
                    <span class="bold01" data-testid="current-date">
                    $ with {currentDate}
                    </span>
                </div> 
                <div class="current-location current-data">
                    <span class="text01" data-testid="current-location">
                    $ with {currentLocation}
                    </span>
                </div>
                </div> 
                <div class="nav-brand-logo">
                <!-- logo -->
                <a class="logo" href="/"> 
                <img src="./_assets/_brand/logo/neumad_brand_logo-H-med_v01.svg" alt="">
                </a>
                </div>
                <div class="nav-mid-right">
                <div class="current-temp current-data">
                    <i class="bx bx-cloud"></i>
                    <span class="bold01" data-testid="current-temp">
                    $ with {currentTemp}°F 
                    </span>
                </div>
                <div class="current-time current-data">
                    <span class="text01" data-testid="current-time">
                    $ with {datetime}
                    </span>
                </div>
                </div>
            </section>
    
            <section class="nav-tags">
                <div class="nav-tags-container">
                <div class="nav-tags-menu"> 
                    <!-- menu -->  
                    <ul class="nav-tags-list nav-tags-flex"> 
                
                    <li>
                        <a href="/work">
                        <div class="section-tag" id="Work">
                            <i class="section-tag-icon icon-Work"></i>
                            <!--<span class="section-tag-divider">
                            <div class="lineV"></div>
                            </span>-->
                            <span class="section-tag-text bold01">
                                Work
                            </span>
                        </div>
                        </a>
                    </li>
                    
                    <li>
                        <a href="/dine">
                        <div class="section-tag" id="Dine">
                            <i class="section-tag-icon icon-Dine"></i>
                            <!--<span class="section-tag-divider">
                            <div class="lineV"></div>
                            </span>-->
                            <span class="section-tag-text bold01">
                                Dine
                            </span>
                        </div>
                        </a>
                    </li>
                
                    <li>
                        <a href="/unwind">
                        <div class="section-tag" id="Unwind">
                            <i class="section-tag-icon icon-Unwind"></i>
                            <!--<span class="section-tag-divider">
                            <div class="lineV"></div>
                            </span>-->
                            <span class="section-tag-text bold01">
                                Unwind
                            </span>
                        </div>
                        </a>
                    </li>

                    
                    
                    <div class="nav-list-divider">
                        <div class="lineV"></div>
                    </div>

                    </ul>
                </div>  

                
                </div>   
            </section>
            
            <!-- DATA -->
            <section class="data">
            <div id="blog-filter blog-data">${dataFilter.element.outerHTML}</div>
            </section>


            <!--SIDEBAR-->
            <!-- menu -->  
            <section class="nav-menu">
                <div class="nav-menu-container">
            
                <ul class="nav-menu-list nav-menu-flex"> 
                    <li>
                        <div class="nav-utility-right">
                            <!-- search -->
                            <!-- <div class="search-wrapper">
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
                            </div>-->
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
    const features = await geojsonStore();
    const geocoder = createGeocoderInput(features);

    geocoder.on("result", storeSelectedLocation);

    const navList = document.querySelector(".nav-list");
    const hamburger = document.querySelector(".hamburger");
    const HeaderReview = document.querySelector(".header");
    const HeaderReviewMid = document.querySelector(".nav-mid");
    const utilityLogo = document.querySelector(".nav-utility-mid-logo");
    const search = document.querySelector("#search-toggle");

    hamburger.addEventListener("click", () => {
      navList.classList.toggle("show");
    });

    const navHeight = header.getBoundingClientRect().height;
    window.addEventListener("scroll", () => {
      const scrollHeight = window.pageYOffset;
      if (scrollHeight > navHeight) {
        HeaderReview.classList.add("fix");
        HeaderReviewMid.classList.add("hide");
        utilityLogo.classList.add("show");
      } else {
        HeaderReview.classList.remove("fix");
        HeaderReviewMid.classList.remove("hide");
        utilityLogo.classList.remove("show");
      }
    });

    const geocoderContainer = document.getElementById("geocoder-container");
    document
      .getElementById("geocoder-container")
      .appendChild(geocoder.onAdd(window.map));

    // Removed geocoder.on('result', ...) event listener

    const links = [...document.querySelectorAll(".nav-list a")];
    links.map((link) => {
      link.addEventListener("click", () => {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: "smooth",
        });
      });
    });
    document.querySelectorAll('.tag').forEach(tagElement => {
        tagElement.addEventListener('click', async () => {
          const tag = tagElement.dataset.tag;
          const newActiveTags = dataBlog.activeTags.includes(tag)
                ? dataBlog.activeTags.filter(activeTag => activeTag !== tag)
                : [...dataBlog.activeTags, tag];
  
          dataBlog.setActiveTags(newActiveTags);
  
          // Then render your content as needed...
          // For example:
          document.querySelector('#blog-layout').innerHTML = await this.render();
          this.after_render();
        });
      });
  },
};
export default HeaderReview;
