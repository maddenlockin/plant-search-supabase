/* Imports */
import { getPlants } from './fetch-utils.js';
import { renderPlant } from './render-utils.js';
/* Get DOM Elements */
const plantList = document.getElementById('plant-list');
const searchForm = document.getElementById('search-form');
const typeSelect = document.getElementById('type-select');

/* State */
let plants = [];

/* Events */
window.addEventListener('load', async () => {
    const response = await getPlants();
    plants = response.data;
    displayPlants();
});
/* Display Functions */
function displayPlants() {
    plantList.innerHTML = '';
    for (let plant of plants) {
        const plantEl = renderPlant(plant);
        plantList.append(plantEl);
    }
}
// (don't forget to call any display functions you want to run on page load!)
