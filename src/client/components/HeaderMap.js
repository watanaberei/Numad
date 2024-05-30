// src/components/HeaderMap_072623.js
// import { createGeocoderInput } from "../components/GeocoderInput";
import { geojsonStore } from "../components/GeojsonStores";

const HeaderMap = {
  render: () => {
    const newLocal = `
    <nav class="navigation container nav-map-top">

          <section class="nav-map-reportBar">
            <div class="nav-map-reportBar-content">
              <div class="nav-map-reportBar-content-container">
                <div class="nav-map-reportBar-content-wrapper">
                  <span class="text01">Report Bar Content 01</span>
                  <span class="text01">Data 01</span>
                  <span class="text01">Data 02</span>
                </div>
                <div class="nav-map-reportBar-content-wrapper">
                  <span class="text01">Report Bar Content 01</span>
                  <span class="text01">Data 01</span>
                  <span class="text01">Data 02</span>
                </div>
              </div>
            </div>
          </section>



          <section class="nav-map-utility">
          <div class="nav-map-utility-container">
            <div class="nav-map-utility-left">
              <div class="hamburger"><i class="icon-hamburger"></i></div>
            </div>
            <div class="nav-map-utility-mid">
              <div class="navSecondary-utility-mid-logo">
                <a class="navSecondary-utility-mid-logo-container" href="/"> 
                  <img src="./_assets/_brand/logo/neumad_brand_logo-H-med_v01.svg alt="">
                </a>
              </div>
            </div>
            <div class="nav-map-utility-right">
              <div class="search-wrapper" id="geocoder">
              </div>
            </div>
          </div>


  
          <section class="nav-tags">
            <div class="nav-tags-container">
              <!--
              <div class="nav-map-search">
                <fieldset class="nav-search-container" id="nav-search-container">
                    <i class="bx bx-search"></i>
                    <div class="nav-list-divider"> 
                        <div class="lineV"></div>
                    </div> 
                    <input class="nav-search-input" id="search-input" type="search" placeholder="Search" /></input>
                </fieldset>    
              </div>  
              -->
          
              <div class="nav-tags-menu"> 
                <!-- menu -->  
                <ul class="nav-tags-list nav-tags-flex"> 
              
                  <li>
                    <a href="/work">
                      <div class="section-tag" id="Work">
                        <i class="section-tag-icon icon-Work"></i>
                        <span class="section-tag-divider">
                          <div class="lineV"></div>
                        </span>
                        <span class="section-tag-text medium01">
                            Work
                        </span>
                      </div>
                    </a>
                  </li>
                  
                  <li>
                    <a href="/dine">
                      <div class="section-tag" id="Dine">
                        <i class="section-tag-icon icon-Dine"></i>
                        <span class="section-tag-divider">
                          <div class="lineV"></div>
                        </span>
                        <span class="section-tag-text medium00">
                            Dine
                        </span>
                      </div>
                    </a>
                  </li>
            
                  <li>
                    <a href="/unwind">
                      <div class="section-tag" id="Unwind">
                        <i class="section-tag-icon icon-Unwind"></i>
                        <span class="section-tag-divider">
                          <div class="lineV"></div>
                        </span>
                        <span class="section-tag-text medium01">
                            Unwind
                        </span>
                      </div>
                    </a>
                  </li>
                  
                  <a href="/shorts">
                    <div class="section-tag" id="Shorts">
                        <i class="section-tag-icon icon-Shorts"></i>
                        <span class="section-tag-divider">
                          <div class="lineV"></div>
                        </span>
                        <span class="section-tag-text medium01">
                            Shorts
                        </span>
                    </div>
                  </a>
                  <div class="nav-map-list-divider">
                    <div class="lineV"></div>
                  </div>

                  <!--
                  <li>
                    <a href="/about">
                      <span class="text01">Dine</span>
                    </a>
                  </li>
                  <div class="nav-map-list-divider">
                    <div class="lineV"></div>
                  </div> 
                  <li>
                    <a href="/contact"> 
                      <span class="text01">Unwind</span>
                    </a>
                  </li>
                  <div class="nav-map-list-divider">
                    <div class="lineV"></div>
                  </div>
                  <li>
                    <a href="/shorts"> 
                      <span class="text01">Shorts</span>
                    </a> 
                  </li>
                  <div class="nav-map-list-divider">
                    <div class="lineV"></div> 
                  </div> 
                  -->
                </ul>
              </div>  
 
            
            </div>   
          </section>  
             
        </nav>`;
    return newLocal;
  },
  after_render: async () => {
    const features = await geojsonStore();
    // const geocoder = createGeocoderInput(features);
    const navList = document.querySelector(".nav-map-list");
    const hamburger = document.querySelector(".hamburger");
    const header = document.querySelector(".header");
    const headerMid = document.querySelector(".nav-map-mid");
    const utilityLogo = document.querySelector(".nav-map-utility-mid-logo");
    const search = document.querySelector("#search-toggle");

    hamburger.addEventListener("click", () => {
      navList.classList.toggle("show");
    });

    const navHeight = header.getBoundingClientRect().height;
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

    const links = [...document.querySelectorAll(".nav-map-list a")];
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
