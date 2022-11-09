/* Imports */
import { getAllPlants, getPlantsbyType, getPlantTypes } from './fetch-utils.js';
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
    // fetch plants and set them to state & display on page load
    const plantsRes = await getAllPlants();
    console.log('plantsRes', plantsRes);
    plants = plantsRes.data;
    displayPlants();
    // fetch types and set them to state & display on page load
    const typesRes = await getPlantTypes();
    types = typesRes.data;
    displayPlantTypes();
});

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(searchForm);
    findPlants(formData.get('type'));
});

async function findPlants(type) {
    const response = await getPlantsbyType(type);
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
