// src/screens/User.js
import mapboxgl from "mapbox-gl";
import { initMap } from "../components/MapApi.js";
import { geojsonStore } from "../components/GeojsonStores.js";
import { createMapMarker } from "../components/MapMarker.js";
import { createGeojsonListing } from "../components/GeojsonListing.js";
import { createGeojsonStoreListing } from "../components/GeojsonStoreListing.js";
import { createGeojsonReviewListing } from "../components/GeojsonReviewListing.js";
import { createGeojsonArticleListing } from "../components/GeojsonArticleListing.js";
import { createGeojsonBlogListing } from "../components/GeojsonBlogListing.js";
import { createGeocoderInput } from "../components/GeocoderInput.js";
import AllBlog from "../components/AllBlog.js";
import storeSelectedLocation from "../components/Header.js";
import mapRoute from "../components/mapRoute.js";
import polyline from '@mapbox/polyline';
import HeaderHome from "../components/HeaderHome.js";
import { createAuth0Client } from '@auth0/auth0-spa-js';


const UserScreen = {
  render: async () => {
    const response = await fetch('http://localhost:4000/user', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    });

    const user = await response.json();
    return `
    <!------ USER SCREEN ------> 
    <div class="main">
      <!------ USER CONTENT ------> 
      <div class="auth-container signup-detail">
          <div class="signup-container">
            <!------ HERO ------> 
            <section class="signup-hero">
            
                <!---- HEADLINE ----> 
                <div class="signup-headline">

                    <!------ USER HEADER ------>
                    <div class="signup-header">

                        <!------ HEADLINE ------>
                        <div class="signup-headline">

                        
                         
                           
                              <div class="title">
                                <span class="header06">
                                  Welcome Neumad
                                </span>
                              </div>
                              <div class="form-container">
                                <span class="text02 medium">
                                 User details
                                </span>
                                <div id="user-info" class="details">
                                ${user.firstName && user.lastName && user.birthdate ? `
                                  <p>First Name: ${user.firstName}</p>
                                  <p>Last Name: ${user.lastName}</p>
                                  <p>Birthdate: ${user.birthdate}</p>
                                ` : `
                                  <a href="/profile" class="finish-profile-button">Finish Profile</a>
                                `}
                              </div>
                                <a href="/profile" class="text02 medium">Finish Profile
                                <!--<button type="submit">Login</button>-->
                              </div>
              

                            
                           
                

                        </div>
                        <!------ HEADLINE ------>

                    </div>
                    <!------ USER HEADER ------>

                </div>
                <!---- HEADLINE ---->

            </section>
            <!------ HERO ------>

          </div>
      </div>
      <!------ USER CONTENT ------> 

    </div>
    <!------ USER SCREEN ------> 
    `;
  },
  after_render: async () => {
    
  } 
  // after_render: async () => {
  //   const signupForm = document.getElementById('signup-form');
  //   signupForm.addEventListener('submit', async (e) => {
  //     e.preventDefault();

  //     const email = document.getElementById('email').value;
  //     const password = document.getElementById('password').value;

  //     const response = await fetch('http://localhost:4000/signup', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ email: email, password: password })
  //     });

  //     const data = await response.json();
  //     if (response.ok) {
  //       // Handle successful signup (e.g., show a success message, redirect to login page, etc.)
  //     } else {
  //       // Handle error (e.g., show an error message)
  //       console.error(data);
  //     }
  //   });
  // }
};
export default UserScreen;