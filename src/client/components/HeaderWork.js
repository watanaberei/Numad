// src/components/HeaderWork.js
const HeaderWork = {
    render: () => {
      const newLocal=`<nav class="navigation container navSecondary-top">
  
        <section class="nav-reportBar #Work">
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
            <div class="nav-utility-container">
                <div class="nav-utility-left">
                    <!-- hamburger --> 
                    <div class="nav-hamburger">
                        <span class="nav-hamburger-container">
                            <i class="icon-hamburger"></i>
                            <span class="display02">Work</span>
                        </span>
                    </div>
                </div>
                
                <div class="nav-utility-right">
                    <!-- search -->
                    <div class="navSecondary-utility-mid-logo">
                        <!-- logo -->
                        <a class="navSecondary-utility-mid-logo-container" href="/"> 
                            <i class="brand-logo-18px"></i>
                        </a>
                    </div>
                </div>
            </div>
        </section>


        <!-- menu -->  
        <section class="nav-menu">
            <div class="nav-menu-container">
            
        
                <ul class="nav-menu-list nav-menu-flex"> 

                <li>
                    <div class="nav-utility-right">
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
    after_render: () => {
      const navSecondaryList = document.querySelector(".nav-menu");
      const navSecondaryHamburger = document.querySelector(".nav-hamburger");
      const navSecondaryHeader = document.querySelector(".navSecondary-header");
  
      navSecondaryHamburger.addEventListener("click", () => {
        navSecondaryList.classList.toggle("show");
      });
  
      const navSecondaryHeight = header.getBoundingClientRect().height;
      window.addEventListener("scroll", () => {
        const navSecondaryScrollHeight = window.pageYOffset;
        if (navSecondaryScrollHeight > navSecondaryHeight) {
          navSecondaryHeader.classList.add("fix"); 
        } else {
          navSecondaryHeader.classList.remove("fix");
        }
      });


      // Search

    const searchToggle = document.querySelector("#search-toggle");
    searchToggle.addEventListener("click", function () {
      const searchInput = document.querySelector("#search");
      const searchIcon = this.querySelector("span");

      searchInput.value = "";
      if (searchIcon.classList.contains("fa-search")) {
        searchInput.focus();
      }

      document.querySelector(".main-search").classList.toggle("active");
      searchIcon.classList.toggle("icon-search");
      searchIcon.classList.toggle("icon-close");
    });



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
  
  export default HeaderWork;
  