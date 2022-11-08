/* Imports */
import { getPlants, getPlantTypes } from './fetch-utils.js';
import { renderPlant, renderPlantType } from './render-utils.js';
/* Get DOM Elements */
const plantList = document.getElementById('plant-list');
const searchForm = document.getElementById('search-form');
const typeSelect = document.getElementById('type-select');

/* State */
let plants = [];
let types = [];

/* Events */
window.addEventListener('load', async () => {
    findPlants();
    const response = await getPlantTypes();
    types = response.data;
    displayPlantTypes();
});

async function findPlants() {
    const response = await getPlants();
    plants = response.data;
    displayPlants();
}

/* Display Functions */
function displayPlants() {
    plantList.innerHTML = '';
    for (let plant of plants) {
        const plantEl = renderPlant(plant);
        plantList.append(plantEl);
    }
}

function displayPlantTypes() {
    for (let type of types) {
        const option = renderPlantType(type);
        typeSelect.append(option);
    }
}
// (don't forget to call any display functions you want to run on page load!)
