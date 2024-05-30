// import { format, parseISO } from "date-fns";
// import { createSanitizingProxy } from '../secure/secure.js';

// class Headline {
//     constructor(primary, secondary, tertiary, icon) {
//       return createSanitizingProxy({
//         primary: primary,
//         secondary: secondary,
//         tertiary: tertiary,
//         icon: icon,
//       });
//     }
  
//     render(...properties) {
//       let result = '';
//       properties.forEach(prop => {
//         if (this[prop] !== undefined) {
//           result += this[prop];
//         }
//       });
//       return result;
//     }
//   }
//   export { Headline };


//   export const headline = new Headline('primary', 'secondary', 'tertiary', 'icon-asset');
//     document.body.innerHTML += `
//     <h1>${headline.render('primary')}</h1>
//     `; // Securely renders "primary"
//     document.body.innerHTML += `<h2>${headline.render('primary', 'secondary')}</h2>`; // Securely renders "primarysecondary"
//     document.body.innerHTML += `<p>${headline.render('icon', 'primary', 'secondary')}</p>`; // Securely renders "icon-assetprimarysecondary"
//       // These would typically append to a specific element or be used in a more complex UI update logic
//     console.log(`Example 1: ${headline.render('primary')}`); // Securely renders "primary"
//     console.log(`Example 2: ${headline.render('primary', 'secondary')}`); // Securely renders "primarysecondary"
//     console.log(`Example 3: ${headline.render('icon', 'primary', 'secondary')}`); // Securely renders "icon-assetprimarysecondary"
// }
  

//   // Example usage (You might want to move this example to a more appropriate place, such as a main script file)
// // const headline = new Headline('primary', 'secondary', 'tertiary', 'icon-asset');
// // document.body.innerHTML += `<h1>${headline.render('primary')}</h1>`; // Securely renders "primary"
// // document.body.innerHTML += `<h2>${headline.render('primary', 'secondary')}</h2>`; // Securely renders "primarysecondary"
// // document.body.innerHTML += `<p>${headline.render('icon', 'primary', 'secondary')}</p>`; // Securely renders "icon-assetprimarysecondary"

// // Exporting Headline class for use in other files



// import * as headlines from "../components/headline.js";
// export const hero = {
//     render: (storeHero) => {

// return `
// ${headlines.headline("headline test"), headlines.secondary(storyHero.headlineSecondary)}
// `
// `;
// }
// }
// ${headline.render("Headline", "location" )}