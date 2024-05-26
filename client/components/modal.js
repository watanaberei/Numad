import { format, parseISO } from "date-fns";
import * as element from "./elements.js";

export const modals = {
  init: function() {
    document.addEventListener('DOMContentLoaded', () => {
      console.log("DOMContentLoaded - Modals are being initialized");

      const bindModal = (targetModel) => {
        let modal = document.getElementById(targetModel);
        console.log(`Attempting to bind model: ${targetModel}`);

        if (modal) {
          console.log(`Modal found: ${targetModel}`);
          document.getElementById(`${targetModel}-close`).onclick = function() {
            modal.style.display = "none";
            console.log(`Closing modal: ${targetModel}`);
          };
          modal.style.display = "block";
          window.onclick = function(event) {
            if (event.target === modal) {
              modal.style.display = "none";
              console.log(`Clicked outside to close modal: ${targetModel}`);
            }
          };
        } else {
          console.log(`Modal not found: ${targetModel}`);
        }
      };

      const myBtn = document.getElementById("myBtn");
      const myBtn1 = document.getElementById("myBtn1");
      const accountBtn = document.getElementById("btn-account");

      if (myBtn) {
        console.log("Button myBtn found, attaching click event");
        myBtn.onclick = function() {
          console.log("myBtn clicked");
          bindModal("myModal");
        };
      } else {
        console.log("Button myBtn not found");

      }

      if (myBtn1) {
        console.log("Button myBtn1 found, attaching click event");
        myBtn1.onclick = function() {
          console.log("myBtn1 clicked");
          bindModal("myModal1");
        };
      } else {
        console.log("Button myBtn1 not found");
      }
      
      if (accountBtn) {
        console.log("Button myBtn1 found, attaching click event");
        accountBtn.onclick = function() {
          console.log("accountBtn clicked");
          bindModal("myModalAccount");
        };
      } else {
        console.log("Button myBtn1 not found");
      }
      
    });
  }
};









// export const modalAccount = {
//   init: function() {
//     document.addEventListener('DOMContentLoaded', () => {
//       console.log("DOMContentLoaded - Modals are being initialized");

//       const bindModal = (targetModel) => {
//         let modal = document.getElementById(targetModel);
//         console.log(`Attempting to bind model: ${targetModel}`);

//         if (modal) {
//           console.log(`Modal found: ${targetModel}`);
//           document.getElementById(`${targetModel}-close`).onclick = function() {
//             modal.style.display = "none";
//             console.log(`Closing modal: ${targetModel}`);
//           };
//           modal.style.display = "block";
//           window.onclick = function(event) {
//             if (event.target === modal) {
//               modal.style.display = "none";
//               console.log(`Clicked outside to close modal: ${targetModel}`);
//             }
//           };
//         } else {
//           console.log(`Modal not found: ${targetModel}`);
//         }
//       };

//       const btnAccount = document.getElementById('btn-account');
      
//       if (btnAccount) {
//         btnAccount.onclick = function() {
//           bindModal('myModal');
//         };
//       } else {
//         console.log("Button btn-account not found");
//       }

//       if (myBtn1) {
//         console.log("Button myBtn1 found, attaching click event");
//         myBtn1.onclick = function() {
//           console.log("myBtn1 clicked");
//           bindModal("myModal1");
//         };
//       } else {
//         console.log("Button myBtn1 not found");
//       }
//     });
//   }
// };



// const AccountScreen = {
//   render: async () => {
//     return `
//     <!------ SIGNUP SCREEN ------> 
//     <div class="main">
//       <!------ SIGNUP CONTENT ------> 
//       <div class="auth-container account-detail">
//           <div class="account-container">
//             <!------ HERO ------> 
//             <section class="account-hero">
            
//                 <!---- HEADLINE ----> 
//                 <div class="account-headline">

//                     <!------ SIGNUP HEADER ------>
//                     <div class="account-header">

//                         <!------ HEADLINE ------>
//                         <div class="account-headline">

//                           <fieldset class="step-hide">
//                             <div class="title">
//                               <span class="header06">
//                                   Log in or create an account
//                               </span>
//                             </div>
//                             <div class="form-container">
//                               <span class="text02 medium">
//                                 Enter your email
//                               </span>
//                               <form id="account-form">
//                                 <input type="email" id="email" name="email" placeholder="Email" required>
//                                 <button type="submit">Submit</button>
//                               </form>
//                             </div>
//                           </fieldset>

//                         </div>
//                         <!------ HEADLINE ------>

//                     </div>
//                     <!------ SIGNUP HEADER ------>

//                 </div>
//                 <!---- HEADLINE ---->

//             </section>
//             <!------ HERO ------>

//           </div>
//       </div>
//       <!------ SIGNUP CONTENT ------> 

//     </div>
//     <!------ SIGNUP SCREEN ------> 
//     `;
//   },

//   after_render: async () => {
//     document.getElementById('account-form').addEventListener('submit', async (event) => {
//         event.preventDefault();
    
//         const email = document.getElementById('email').value;

//     // Store the entered email in localStorage
//     localStorage.setItem('email', email);

//       const response = await fetch('http://localhost:5000/account', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify({ email })
//       });

//       if (response.ok) {
//         const data = await response.json();

//         if (data.userExists) {
//           // Redirect to the login page
//           window.location.href = '/login';
//         } else {
//           // Redirect to the signup page
//           window.location.href = '/signup';
//         }
//       } else {
//         console.error('Account check failed');
//       }
//     });
//   }
// };

// export default AccountScreen;










  ///////////////////////////////////////////////////////
  //////////////////////// MODAL ////////////////////////
  ///////////////////////////////////////////////////////
  export const modalGallery = (modalGalleryData) => {
    const gallery = modalGalleryData.gallery || [];
    const area = modalGalleryData.area || [];

    function modalGalleryHTML(gallery) {
      console.log('gallery', gallery);
      // Generate the HTML
      let mediaGalleryHTML = "";
      gallery.forEach((array) => {
        mediaGalleryHTML += `
        <div class="media-img-m">
            <div class="media-img">
                <img src="${array.url}" class="gallery-item-img media-img-1-x-1-x-m" alt="" />
            </div>
            <!--
            <div class="text2">
                <span class="caption">
                    <span class="icon">
                        <i class="icon-container2"></i>
                    </span>
                    <span class="text03 bold">
                        ${array.description}
                    </span>
                </span>
            </div>
            -->
        </div>
              `;
      });
      return mediaGalleryHTML; // Add this line
    }

    function modalAreaHTML(area) {
      console.log('area', area);
      // Generate the HTML
      let mediaAreaHTML = "";
      area.forEach((array) => {
        mediaAreaHTML += `
              <div class="media-img-m">
                  <div class="media-img">
                      <img src="${array.url}" class="gallery-item-img media-img-1-x-1-x-m" alt="" />
                  </div>
                  <div class="text2">
                      <span class="caption">
                          <span class="icon">
                              <i class="icon-container2"></i>
                          </span>
                          <span class="text03 bold">
                              ${array.description}
                          </span>
                      </span>
                  </div>
              </div>
              `;
      });
      return mediaAreaHTML; // Add this line
    }

    const mediaGallery = modalGalleryHTML(gallery);
    const mediaArea = modalAreaHTML(area);

    
    
    const modalHTML = `
      <button id="myBtn">Open Modal</button>
      <div id="myModal" class="modal">
        <div class="modal-content">
          <span class="modal-close">&times;</span>
          
          <span class="header03">Gallery</p>
          <div class="gallery mediaGallery">
            ${mediaGallery}
          </div>
          
          <span class="header03">Area</p>
          <div class="gallery mediaArea">
            ${mediaArea}
          </div>
        </div>
      </div>
      
    `;
  
    document.addEventListener('click', (event) => {
      if (event.target.matches('.modal-close') || event.target.matches('.modal')) {
        document.getElementById('myModal').style.display = 'none';
      } else if (event.target.matches('#myBtn')) {
        document.getElementById('myModal').style.display = 'block';
      }
    });
  
    return modalHTML;
  };
  ///////////////////////////////////////////////////////
  //////////////////////// MODAL ////////////////////////
  ///////////////////////////////////////////////////////










  //////////////////////////////////////////////////////
  //////////////////// MODALACCOUNT ////////////////////
  //////////////////////////////////////////////////////
  export const modalAccount = () => {
    const modalAccountHTML = `
      <!------ MODALACCOUNT ------>
      <div class="account-header">
        <!------ HEADLINE ------>
        <div class="account-headline">
          <fieldset class="step-hide">
            <div class="title">
              <span class="header06">
                  Log in or create an account
              </span>
            </div>
            <div class="form-container">
              <span class="text02 medium">
                Enter your email
              </span>
              <form id="account-form">
                <input type="email" id="email" name="email" placeholder="Email" required>
                <button type="submit">Submit</button>
              </form>
            </div>
          </fieldset>
        </div>
        <!------ HEADLINE ------>
      </div>
      <!------ SIGNUP HEADER ------>
    `;
  
    const modalAccountButton = `
      <button id="account-btn">Open Modal</button>
      <div id="myModalAccount" class="modal">
        <div class="modal-content">
          <span class="modal-close">&times;</span>
          <div class="gallery mediaGallery">
            ${modalAccountHTML}
          </div>
        </div>
      </div>
    `;
  
    document.addEventListener('click', (event) => {
      if (event.target.matches('.modal-close') || event.target.matches('.modal')) {
        document.getElementById('myModalAccount').style.display = 'none';
      } else if (event.target.matches('#account-btn')) {
        document.getElementById('myModalAccount').style.display = 'block';
      }
    });
  
    // Add event listener for form submission
    document.addEventListener('submit', (event) => {
      if (event.target.matches('#account-form')) {
        event.preventDefault();
        // Add your authentication code here
      }
    });
  
    return modalAccountButton;
  };


  
    // function modalAreaHTML(area) {
    //   console.log('area', area);
    //   // Generate the HTML
    //   let mediaAreaHTML = "";
    //   area.forEach((array) => {
    //     mediaAreaHTML += `
    //           <div class="media-img-m">
    //               <div class="media-img">
    //                   <img src="${array.url}" class="gallery-item-img media-img-1-x-1-x-m" alt="" />
    //               </div>
    //               <div class="text2">
    //                   <span class="caption">
    //                       <span class="icon">
    //                           <i class="icon-container2"></i>
    //                       </span>
    //                       <span class="text03 bold">
    //                           ${array.description}
    //                       </span>
    //                   </span>
    //               </div>
    //           </div>
    //           `;
    //   });
    //   return mediaAreaHTML; // Add this line
    // }

    // const mediaGallery = modalGalleryHTML(gallery);
    // const mediaArea = modalAreaHTML(area);

    
    
  //   const modalAccont = `
  //     <button id="myBtn">Open Modal</button>
  //     <div id="myModal" class="modal">
  //       <div class="modal-content">
  //         <span class="modal-close">&times;</span>
          
  //         <span class="header03">Gallery</p>
  //         <div class="gallery mediaGallery">
  //           ${modalAccontHTML}
  //         </div>
          
  //       </div>
  //     </div>
      
  //   `;
  
  //   document.addEventListener('click', (event) => {
  //     if (event.target.matches('.modal-close') || event.target.matches('.modal')) {
  //       document.getElementById('myModal').style.display = 'none';
  //     } else if (event.target.matches('#myBtn')) {
  //       document.getElementById('myModal').style.display = 'block';
  //     }
  //   });
  
  //   return modalAccont;
  // };
  //////////////////////////////////////////////////////
  //////////////////// MODALACCOUNT ////////////////////
  //////////////////////////////////////////////////////











  










// export const modals = {
//   init: function() {
//     document.addEventListener('DOMContentLoaded', () => {
//       const bindModel = (targetModel) => {
//         let modal = document.getElementById(targetModel);

//         if (modal) {
//           modal.style.display = "block";

//           document.getElementById(targetModel + "-close").onclick = function() {
//             modal.style.display = "none";
//           };

//           window.onclick = function(event) {
//             if (event.target === modal) {
//               modal.style.display = "none";
//             }
//           };
//         }
//       };

//       const myBtn = document.getElementById("myBtn");
//       const myBtn1 = document.getElementById("myBtn1");

//       if (myBtn) {
//         myBtn.onclick = function() {
//           bindModel("myModal");
//         };
//       }

//       if (myBtn1) {
//         myBtn1.onclick = function() {
//           bindModel("myModal1");
//         };
//       }
//     });
//   }
// };












//   // Ensure the DOM is fully loaded before attaching event listeners
//   const modal = {
//     init: function() {
//       document.addEventListener('DOMContentLoaded', (event) => {
//         const bindModel = (targetModel) => {
//           var modal = document.getElementById(targetModel);
  
//           if (modal) {
//             modal.style.display = "block";
  
//             document.getElementById(targetModel + "-close").onclick = function () {
//               modal.style.display = "none";
//             };
  
//             window.onclick = function (event) {
//               if (event.target == modal) {
//                 modal.style.display = "none";
//               }
//             };
//           }
//         };
  
//         const myBtn = document.getElementById("myBtn");
//         const myBtn1 = document.getElementById("myBtn1");
  
//         if (myBtn) {
//           myBtn.onclick = function () {
//             bindModel("myModal");
//           };
//         }
  
//         if (myBtn1) {
//           myBtn1.onclick = function () {
//             bindModel("myModal1");
//           };
//         }
//       });
//     }
//   };
  
//   // Export the modal object
//   export { modal };





// Assuming `format` and `parseISO` from `date-fns` are available globally,
// perhaps through a script inclusion in your HTML.

// If `createSanitizingProxy` is defined in another script, ensure that script
// is included before this one in your HTML.

// modals object definition remains mostly the same, but don't use export.
// const modals = {
//   render: () => {
//     return `
//     <button id="myBtn">Open Modal</button>
//             `;
//   },
// };

// // The rest of the script remains largely unchanged.
// function bindModel(targetModel) {
//     var modal = document.getElementById(targetModel);
  
//     modal.style.display = "block";
  
//     document.getElementById(targetModel + "-close").onclick = function () {
//       modal.style.display = "none";
//     };
  
//     window.onclick = function (event) {
//       if (event.target == modal) {
//         modal.style.display = "none";
//       }
//     };
//   }
  
// document.getElementById("myBtn").onclick = function () {
//   bindModel("myModal");
// };

// document.getElementById("myBtn1").onclick = function () {
//   bindModel("myModal1");
// };

// // If this script needs to be used in a context where its functionality is required elsewhere,
// // consider attaching necessary functions or objects to the `window` object for global accessibility.
