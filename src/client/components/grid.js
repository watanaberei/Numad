// src/components/grid.js
// import $ from 'jquery';

// export function setupGrid() {
//     $('.outer-grid').each(function() {
//         var $outerGrid = $(this);
//         var $innerContainer = $outerGrid.children('.inner-container');

//         // Create a new div with class 'inner-grid'
//         var $innerGrid = $('<div />', {
//             'class': 'inner-grid',
//             'html': $innerContainer.html()
//         });

//         // Replace inner container's contents with the new grid
//         $innerContainer.empty().append($innerGrid);
//     });
// }














// document.addEventListener('DOMContentLoaded', (event) => {
//     const grids = document.querySelectorAll('.grid');
//     grids.forEach(grid => {
//         const gridItems = grid.querySelectorAll('.m, .c1-c3, .c2, .c3, .c4, .c5, .c6'); // Include all your grid item classes here
//         gridItems.forEach(gridItem => {
//             if (gridItem.parentElement !== grid) {
//                 gridItem.parentElement.removeChild(gridItem);
//                 grid.appendChild(gridItem);
//             }
//         });
//     });
// });














// export default class Grid {
//     constructor(gridType) {
//       this.gridType = gridType;
//       this.gridElement = this.createGrid();
//       this.applyToGridElements();
//     }
  
//     createGrid() {
//       const grid = document.createElement('div');
//       grid.className = `grid ${this.gridType}`;
//       return grid;
//     }
  
//     createDivWithClass(className) {
//       const div = document.createElement('div');
//       div.className = className;   
//       return div;
//     }
  
//     applyToGridElements() {
//       const gridElements = document.querySelectorAll('.grid');
//       gridElements.forEach((gridElement) => {
//         if (gridElement.classList.contains(this.gridType)) {
//           const mainElement = this.createDivWithClass('m');
//           const secondaryElement = this.createDivWithClass('s');
//           gridElement.appendChild(mainElement);
//           gridElement.appendChild(secondaryElement);
//         }
//       });
//     }
  
//     addRowToMain(rowClass) {
//         const mainElement = this.gridElement.querySelector('.m');
//         if (mainElement) {
//           const rowElement = this.createDivWithClass(`r ${rowClass}`);
//           mainElement.appendChild(rowElement);
//         } else {
//           console.error('No main element found');
//         }
//       }
  
//     addRowToSecondary(rowClass) {
//       const secondaryElement = this.gridElement.querySelector('.s');
//       const rowElement = this.createDivWithClass(`r ${rowClass}`);
//       secondaryElement.appendChild(rowElement);
//     }

// // var NUM_COLS = 5;
// // var NUM_ROWS = 4;
// // for (var i = 0; i < NUM_COLS; i++) {
// //   for (var j = 0; j < NUM_ROWS; j++) {
// //     var tileX = i * 54 + 5;
// //     var tileY = j * 54 + 40;
// //     tiles.push(new Tile(tileX, tileY));
// //   }
// // }
  
//     applyRules(element, rule) {
//         // Define necessary elements
//         const colCount = 9;
//         const colWidth = 3.333;
//         const gap = colWidth * 0.17148;
//         const cCount = colCount;
//         const pWidth = colWidth;
//         const pCount = 4;
//         const oCount = 2;
//         const oWidth = colWidth;
//         const mCount = 1;
//         const sCount = 1;
//         const mWidth = (colCount - pCount) * colWidth + (pCount - 1) * gap;
//         const sWidth = (colCount - pCount) * colWidth + (pCount - 1) * gap;

//       switch (rule) {
//         case 'c1-c2':
//           element.style.gridColumn = '1 / 3';
//           break;
//         case 'c2-c4':
//           element.style.gridColumn = '2 / 5';
//           break;
//         case 'c6':
//           element.style.gridColumn = '6';
//           break;
//         case 'c1':
//           element.style.gridColumn = '1';
//           break;
//         case 'c5-col2':
//           element.style.gridColumn = '5 / span 2';
//           break;
//         case 'max':
//           element.style.gridColumn = '1 / -1';
//           break;
//         case 'full':
//           element.style.gridColumn = '1 / -1';
//           break;
//         case 'half':
//           element.style.gridColumn = '1 / span 6';
//           break;
//         default:
//           throw new Error(`Unknown rule: ${rule}`);
//       }
//     }
//   }





















//   // grid.js
// $(document).ready(function() {
//     // Select all divs that have a class like c1-c2
//     $('div').each(function() {
//       var classList = $(this).attr('class').split(/\s+/);
//       for (var i = 0; i < classList.length; i++) {
//         if (classList[i].indexOf('-') >= 0) {
//           var classes = classList[i].split('-');
//           var startClass = classes[0];
//           var endClass = classes[1];
          
//           var startIndex = getClusterIndex(startClass);
//           var endIndex = getClusterIndex(endClass);
          
//           // Skip if the classes are not correctly formatted
//           if (startIndex === -1 || endIndex === -1) {
//             continue;
//           }
          
//           var gridColumnValue = startIndex + " / " + (endIndex + 1);
//           $(this).css("grid-column", gridColumnValue);
//         }
//       }
//     });
//   });
  
//   function getClusterIndex(className) {
//     var classIndex = -1;
//     switch(className) {
//       case "c1": 
//         classIndex = 1;
//         break;
//       case "c2":
//         classIndex = 2;
//         break;
//       case "c3":
//         classIndex = 3;
//         break;
//       case "c4":
//         classIndex = 4;
//         break;
//       case "c5":
//         classIndex = 5;
//         break;
//       case "c6":
//         classIndex = 6;
//         break;
//     }
//     return classIndex;
//   }
  