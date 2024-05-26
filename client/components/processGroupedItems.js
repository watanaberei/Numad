import { createGeojsonListing } from './GeojsonListing.js';

export function processGroupedItems(groupedItems, map, userCoordinates) {
    const mainContainer = document.getElementById('mainContainer'); // Assuming you have a main container

    for (const variant in groupedItems) {
        const parentDiv = document.createElement('div');
        parentDiv.className = variant;

        groupedItems[variant].forEach(item => {
            const itemDiv = createGeojsonListing(item, map, userCoordinates);
            parentDiv.appendChild(itemDiv);
        });

        mainContainer.appendChild(parentDiv);
    }
}
