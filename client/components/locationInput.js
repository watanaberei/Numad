// // src/component/locationInput061223.js
// const fetchDateTime = require('./timeApi.js');

// class LocationInput {
//     constructor() {
//         this.inputElement = null;
//         this.submitButton = null;
//     }

//     create() {
//         this.inputElement = document.createElement('input');
//         this.inputElement.setAttribute('id', 'location-input');
//         this.inputElement.setAttribute('placeholder', 'Enter location...');

//         this.submitButton = document.createElement('button');
//         this.submitButton.setAttribute('class', 'btn pull-right')
//         this.submitButton.innerText = 'Get Current Day and Time';
//         this.submitButton.onclick = this.fetchTime.bind(this);

//         const locationInputContainer = document.createElement('div');
//         locationInputContainer.appendChild(this.inputElement);
//         locationInputContainer.appendChild(this.submitButton);

//         return locationInputContainer;
//     }

//     asyn  s c fetchTime() {
//         const location = this.inputElement.value;
//         if (!location) {
//             alert('Please enter a location');
//             return;
//         }

//         try {
//             await fetchDateTime(location);
//         } catch (error) {
//             console.error(error);
//             alert('Error fetching date and time. Please make sure the location is correct and try again.');
//         }
//     }
// }

// module.exports = LocationInput;







// // const fetchDateTime = require('./src/component/timeApi.js');

// // class LocationInput {
// //     constructor() {
// //         this.inputElement = null;
// //         this.submitButton = null;
// //     }

// //     create() {
// //         this.inputElement = document.createElement('input');
// //         this.inputElement.setAttribute('id', 'location-input');
// //         this.inputElement.setAttribute('placeholder', 'Enter location...');

// //         this.submitButton = document.createElement('button');
// //         this.submitButton.innerText = 'Get Current Day and Time';
// //         this.submitButton.onclick = this.fetchTime.bind(this);

// //         document.body.appendChild(this.inputElement);
// //         document.body.appendChild(this.submitButton);
// //     }

// //     async fetchTime() {
// //         const location = this.inputElement.value;
// //         if (!location) {
// //             alert('Please enter a location');
// //             return;
// //         }

// //         try {
// //             await fetchDateTime(location);
// //         } catch (error) {
// //             console.error(error);
// //             alert('Error fetching date and time. Please make sure the location is correct and try again.');
// //         }
// //     }
// // }

// // window.onload = () => {
// //     const locationInput = new LocationInput();
// //     locationInput.create();
// // };
