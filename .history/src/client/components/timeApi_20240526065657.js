// src/component/timeApi.js
import axios from 'axios';

async function fetchDateTime(location) {
    console.log('fetchDateTime called with location:', location);
    try {
        
      const url = `http://worldtimeapi.org/api/timezone/${encodeURIComponent(location)}`;
      console.log(url);  // Print URL to console
      const response = await axios.get(`http://worldtimeapi.org/api/timezone/${location}`);
      return response.data.datetime;
      return response.data;  // Make sure to return the data from the function
    } catch (error) {
        console.error(error);
        return {};  // Return an empty object in case of error
      }
    }
  
export default fetchDateTime;
// async function fetchDateTime(location) {
//     console.log('fetchDateTime called with location:', location);
//     try {
//       // Use encodeURIComponent to ensure location is correctly formatted for a URL
//       const url = `http://worldtimeapi.org/api/timezone/${encodeURIComponent(location)}`;
//       console.log(url);  // Print URL to console
//       const response = await axios.get(url);
      
//       if (response.data && response.data.datetime) {
//         const dateTime = new Date(response.data.datetime);

//         const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
//         const formattedDateTime = new Intl.DateTimeFormat('en-US', options).format(dateTime);
    
//         console.log(formattedDateTime);
//       }
      
//     } catch (error) {
//       console.error(error);
//     }
// }

// module.exports = fetchDateTime;




// const axios = require('axios');

// async function fetchDateTime(location) {
//   try {
//     const response = await axios.get(`http://worldtimeapi.org/api/timezone/${location}`);
//     const dateTime = new Date(response.data.datetime);
    
//     const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', timeZoneName: 'short' };
//     const formattedDateTime = new Intl.DateTimeFormat('en-US', options).format(dateTime);
    
//     console.log(formattedDateTime);
//   } catch (error) {
//     console.error(error);
//   }
// }

// fetchDateTime('Europe/London');




// const moment = require('moment-timezone');

// function getCurrentDateTime(location) {
//   const date = moment().tz(location);
//   console.log(`Current date and time in ${location}: `, date.format());
//   return date;
// }

// // Example usage
// getCurrentDateTime("America/Los_Angeles");
 