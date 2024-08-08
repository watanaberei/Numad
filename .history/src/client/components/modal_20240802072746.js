// src/client/components/modal.js
// src/client/components/modal.js
import { format, parseISO } from "date-fns";
import * as element from "./elements.js";
import axios from 'axios'; // Add this line

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
      const accountBtn = document.getElementById("account-btn");

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
        console.log("Button accountBtn found, attaching click event");
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
  const modalAccountHTML = () => `
    <div class="account-header">
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
              <button type="next" id="next" name="next">Next</button>
            </form>
          </div>
        </fieldset>
      </div>
    </div>
  `;

  const modalAccountDom = modalAccountHTML();

  const modalAccount = `
  <button id="account-btn">Account</button>
  <div id="myModalAccount" class="modal">
    <div class="modal-content">
      <span class="modal-close">&times;</span>
      <div class="gallery mediaGallery">
        ${modalAccountDom}
      </div>
    </div>
  </div>
`;

  const after_render = async () => {
    window.onload = function() {
      
      const emailInput = document.getElementById('email');
      const nextButton = document.getElementById('next');
      const accountForm = document.getElementById('account-form');
      if (accountForm) {
        console.log('account-form element found');
        
        nextButton.addEventListener('click', async (event) => {
          event.preventDefault();
          const email = emailInput.value;

 
          axios.get('http://localhost:3000/email', {
              params: {
                  email: 'watanaberay@gmail.com'
              }
          })
          .then(function (response) {
              console.log('Success:', response);
          })
          .catch(function (error) {
              console.log('Error:', error);
          })
          .finally(function () {
              console.log('Request completed.');
          });
        
          try {
            const response = await axios.get(`/email?email=${encodeURIComponent(email)}`);
        
            if (!response.ok) throw new Error('Check email failed');
        
            const { emailExists } = response.data;
        
        
          if (emailExists) {
            accountForm.innerHTML = `
              <p>Email already taken</p>
              <button id="edit-email-btn">Edit Email</button>
              <form id="login-form">
                <input type="password" id="password" placeholder="Password" required />
                <button type="submit">Login</button>
              </form>
            `;
          } else {
            accountForm.innerHTML = `
              <button id="edit-email-btn">Edit Email</button>
              <form id="signup-form">
                <input type="password" id="password" placeholder="Password" required />
                <button type="submit">Sign Up</button>
              </form>
            `;
          }
        } catch (error) {
          console.error('Error:', error);
        }
      });

        accountForm.addEventListener('submit', async (event) => {
          event.preventDefault();
          console.log('submit pressed');
          const email = emailInput.value;
          const passwordInput = document.getElementById('password');
          const password = passwordInput.value;
          const type = accountForm.id === 'login-form' ? 'login' : 'signup';
    
          const response = await fetch('http://localhost:3000/account', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password, type })
          });
    
          if (!response.ok) throw new Error('Check user failed');
    
          const data = await response.json();
          console.log(data.message);
        });
      } else {
        console.log('account-form element not found');
      }
    
      document.addEventListener('click', (event) => {
        if (event.target.matches('.modal-close') || event.target.matches('.modal')) {
          document.getElementById('myModalAccount').style.display = 'none';
        } else if (event.target.matches('#account-btn')) {
          document.getElementById('myModalAccount').style.display = 'block';
        }
      });
    };
  }

  return {
    modalAccount: modalAccount,
    after_render: after_render
  };
}



// export const modalAccount = () => {
//   const modalAccountHTML = () => `
//     <div class="account-header">
//       <div class="account-headline">
//         <fieldset class="step-hide">
//           <div class="title">
//             <span class="header06">
//               Log in or create an account
//             </span>
//           </div>
//           <div class="form-container">
//             <span class="text02 medium">
//               Enter your email
//             </span>
//              <form id="account-form">
             
//               <input type="email" id="email" name="email" placeholder="Email" required>
//               <button type="check" id="check" name="check">Next</button>
//               <!--<button type="next" id="next" name="next">Next</button>-->
//             </form>
//           </div>
//         </fieldset>

//         <!--Existing User-->
//         <!--
//         <fieldset class="step-hide">
//           <div class="title">
//             <span class="header06">
//               Welcome Back
//             </span>
//           </div>
//           <div class="form-container">
//             <span class="text02 medium">
//               Login
//             </span>
//             <button id="edit-email-btn">Edit Email</button>
//             <form id="login-form">
//               <input type="password" id="password" placeholder="Password" required />
//               <button type="submit">Login</button>
//             </form>
//           </div>
//         </fieldset>
//         -->

//         <!--New User-->
//         <1--
//         <fieldset class="step-hide">
//           <div class="title">
//             <span class="header06">
//               Welcome Numad!
//             </span>
//           </div>
//           <div class="form-container">
//             <span class="text02 medium">
//               Create Account
//             </span>
//             <button id="edit-email-btn">Edit Email</button>
//             <form id="signup-form">
//               <input type="password" id="password" placeholder="Password" required />
//               <button type="submit">Sign Up</button>
//             </form>
//           </div>
//         </fieldset>
//         -->

//       </div>
//     </div>
//   `;

//   const modalAccountDom = modalAccountHTML();

//   const modalAccount = `
//   <button id="account-btn">Account</button>
//   <div id="myModalAccount" class="modal">
//     <div class="modal-content">
//       <span class="modal-close">&times;</span>
//       <div class="gallery mediaGallery">
//         ${modalAccountDom}
//       </div>
//     </div>
//   </div>
// `;
// const after_render = async () => {
//   const accountForm = document.getElementById('account-form');
//   const emailInput = document.getElementById('email');
//   const nextButton = document.getElementById('next');
//   if (accountForm) {
//     console.log('account-form element found');

//     nextButton.addEventListener('click', async (event) => {
//       event.preventDefault();
    
//       const email = emailInput.value;
//       try {
//         const userExists = await User.findOne({ email: email });
    
//         if (userExists) {
//           // Implement the logic from loginscreen file here
//           accountForm.innerHTML = `
//             <p>Email already taken</p>
//             <button id="edit-email-btn">Edit Email</button>
//             <form id="login-form">
//               <input type="password" id="password" placeholder="Password" required />
//               <button type="submit">Login</button>
//             </form>
//           `;
//         } else {
//           // Implement the logic from signupscreen file here
//           accountForm.innerHTML = `
//             <button id="edit-email-btn">Edit Email</button>
//             <form id="signup-form">
//               <input type="password" id="password" placeholder="Password" required />
//               <button type="submit">Sign Up</button>
//             </form>
//           `;
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     });
//   // const after_render = async () => {
//   //   const accountForm = document.getElementById('account-form');
//   //   const emailInput = document.getElementById('email');
//   //   const nextButton = document.getElementById('next');
//   //   if (accountForm) {
//   //     console.log('account-form element found');

//   //     nextButton.addEventListener('click', async (event) => {
//   //       event.preventDefault();
      
//   //       const email = emailInput.value;
//   //       try {
//   //         const response = await fetch('http://localhost:6000/check-email', {
//   //           method: 'GET', // Change this to a GET request
//   //           headers: {
//   //             'Content-Type': 'application/json'
//   //           },
//   //           body: JSON.stringify({ email })
//   //         });
      
//   //         if (!response.ok) throw new Error('Check email failed');
      
//   //         const { emailExists } = await response.json();
      
//   //         if (emailExists) {
//   //           // Implement the logic from loginscreen file here
//   //           accountForm.innerHTML = `
//   //             <p>Email already taken</p>
//   //             <button id="edit-email-btn">Edit Email</button>
//   //             <form id="login-form">
//   //               <input type="password" id="password" placeholder="Password" required />
//   //               <button type="submit">Login</button>
//   //             </form>
//   //           `;
//   //         } else {
//   //           // Implement the logic from signupscreen file here
//   //           accountForm.innerHTML = `
//   //             <button id="edit-email-btn">Edit Email</button>
//   //             <form id="signup-form">
//   //               <input type="password" id="password" placeholder="Password" required />
//   //               <button type="submit">Sign Up</button>
//   //             </form>
//   //           `;
//   //         }
//   //       } catch (error) {
//   //         console.error(error);
//   //       }
//   //     });
      
//       accountForm.addEventListener('submit', async (event) => {
//         event.preventDefault();
      
//         const passwordInput = document.getElementById('password');
//         const password = passwordInput.value;
      
//         // Only submit the data here
//         const response = await fetch('http://localhost:6000/account', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ email, password })
//         });
      
//         if (!response.ok) throw new Error('Check user failed');
      
//         const data = await response.json();
//         console.log(data);
//       });
//     } else {
//       console.log('account-form element not found');
//     }

//     document.addEventListener('click', (event) => {
//       if (event.target.matches('.modal-close') || event.target.matches('.modal')) {
//         document.getElementById('myModalAccount').style.display = 'none';
//       } else if (event.target.matches('#account-btn')) {
//         document.getElementById('myModalAccount').style.display = 'block';
//       }
//     });
//   };

//   return {
//     modalAccount: modalAccount,
//     after_render: after_render
//   };
// };









// const after_render = async () => {
//   const accountForm = document.getElementById('account-form');
//   const emailInput = document.getElementById('email');
//   const nextButton = document.getElementById('next');
//   if (accountForm) {
//     console.log('account-form element found');

//     nextButton.addEventListener('click', async (event) => {
//     event.preventDefault();

//     const email = emailInput.value;
//       try {
//         // const usernameExists = await User.findOne({username: req.body.username});
//         const emailExists = await User.findOne({email: req.body.email});
//         // if (usernameExists && emailExists) return res.status(400).send("Username and email already taken");
//         if (emailExists) return res.status(400).send("Email already taken");
//         // if (usernameExists) return res.status(400).send("Username already taken");
  
//         const response = await fetch('http://localhost:6000/account', {
//           method: 'POST',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ email })
//         });

//         if (!response.ok) throw new Error('Check user failed');

//         const data = await response.json();

//         if (data.userExists) {
//           accountForm.innerHTML = `
//             <button id="edit-email-btn">Edit Email</button>
//             <form id="login-form">
//               <input type="password" id="password" placeholder="Password" required />
//               <button type="submit">Login</button>
//             </form>
//           `;
//         } else {
//           accountForm.innerHTML = `
//             <button id="edit-email-btn">Edit Email</button>
//             <form id="signup-form">
//               <input type="password" id="password" placeholder="Password" required />
//               <button type="submit">Sign Up</button>
//             </form>
//           `;
//         }
//       } catch (error) {
//         console.error(error);
//       }
//     });
//   } else {
//     console.log('account-form element not found');
//   }

//   document.addEventListener('click', (event) => {
//     if (event.target.matches('.modal-close') || event.target.matches('.modal')) {
//       document.getElementById('myModalAccount').style.display = 'none';
//     } else if (event.target.matches('#account-btn')) {
//       document.getElementById('myModalAccount').style.display = 'block';
//     }
//   });
// };

// return {
//   modalAccount: modalAccount,
//   after_render: after_render
// };
// };




//   const after_render = async () => {
//     const accountForm = document.getElementById('account-form');
//     if (accountForm) {
//       console.log('account-form element found');
//       accountForm.addEventListener('next', async (event) => {
//         event.preventDefault(); // This will prevent the form from submitting normally

//         const email = document.getElementById('email').value;

//         try {
//           const response = await fetch('http://localhost:6000/account', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ email })
//           });

//           if (!response.ok) throw new Error('Check user failed');

//           const data = await response.json();

//           if (data.userExists) {
//             accountForm.innerHTML = `
//               <button id="edit-email-btn">Edit Email</button>
//               <form id="login-form">
//                 <input type="password" id="password" placeholder="Password" required />
//                 <button type="submit">Login</button>
//               </form>
//             `;
//           } else {
//             accountForm.innerHTML = `
//               <button id="edit-email-btn">Edit Email</button>
//               <form id="signup-form">
//                 <input type="password" id="password" placeholder="Password" required />
//                 <button type="submit">Sign Up</button>
//               </form>
//             `;
//           }
//         } catch (error) {
//           console.error(error);
//         }
//       });
//     } else {
//       console.log('account-form element not found');
//     }

//     document.addEventListener('click', (event) => {
//       if (event.target.matches('.modal-close') || event.target.matches('.modal')) {
//         document.getElementById('myModalAccount').style.display = 'none';
//       } else if (event.target.matches('#account-btn')) {
//         document.getElementById('myModalAccount').style.display = 'block';
//       }
//     });
//   };

//   return {
//     modalAccount: modalAccount,
//     after_render: after_render
//   };
// };







// export const modalAccount = () => {
//   const modalAccountHTML = () => `
//     <div class="account-header">
//       <div class="account-headline">
//         <fieldset class="step-hide">
//           <div class="title">
//             <span class="header06">
//               Log in or create an account
//             </span>
//           </div>
//           <div class="form-container">
//             <span class="text02 medium">
//               Enter your email
//             </span>
//             <form id="account-form">
//               <input type="email" id="email" name="email" placeholder="Email" required>
//               <button type="submit">Submit</button>
//             </form>
//           </div>
//         </fieldset>
//       </div>
//     </div>
//   `;

//   const modalAccountDom = modalAccountHTML();

//   const modalAccount = `
//   <button id="account-btn">Account</button>
//   <div id="myModalAccount" class="modal">
//     <div class="modal-content">
//       <span class="modal-close">&times;</span>
//       <div class="gallery mediaGallery">
//         ${modalAccountDom}
//       </div>
//     </div>
//   </div>
// `;

// const after_render = async () => {
//   const accountForm = document.getElementById('account-form');
//   if (accountForm) {
//     console.log('account-form element found');
//     accountForm.addEventListener('submit', async (event) => {
//       event.preventDefault(); // Add this line

//         const email = document.getElementById('email').value;

//         try {
//           const response = await fetch('http://localhost:6000/account', {
//             method: 'POST',
//             headers: {
//               'Content-Type': 'application/json'
//             },
//             body: JSON.stringify({ email })
//           });

//           if (!response.ok) throw new Error('Check user failed');

//           const data = await response.json();

//           if (data.userExists) {
//             accountForm.innerHTML = `
//               <button id="edit-email-btn">Edit Email</button>
//               <form id="login-form">
//                 <input type="password" id="password" placeholder="Password" required />
//                 <button type="submit">Login</button>
//               </form>
//             `;
//           } else {
//             accountForm.innerHTML = `
//               <button id="edit-email-btn">Edit Email</button>
//               <form id="signup-form">
//                 <input type="password" id="password" placeholder="Password" required />
//                 <button type="submit">Sign Up</button>
//               </form>
//             `;
//           }
//         } catch (error) {
//           console.error(error);
//         }
//       });
//     } else {
//       console.log('account-form element not found');
//     }

//     document.addEventListener('click', (event) => {
//       if (event.target.matches('.modal-close') || event.target.matches('.modal')) {
//         document.getElementById('myModalAccount').style.display = 'none';
//       } else if (event.target.matches('#account-btn')) {
//         document.getElementById('myModalAccount').style.display = 'block';
//       }
//     });
//   };

//   return {
//     modalAccount: modalAccount,
//     after_render: after_render
//   };
// };