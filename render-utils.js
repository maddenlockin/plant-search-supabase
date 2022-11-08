export function renderPlant(plant) {
    const li = document.createElement('li');
    li.classList.add('card');
    li.textContent = plant.Common_Name;

    const typeEl = document.createElement('p');
    typeEl.textContent = plant.Plant_Type;

    const p = document.createElement('p');
    p.textContent = `Light needs: ${plant.Suitable_Site_Conditions}`;

    li.append(typeEl, p);

    return li;
}

export function renderPlantType(type) {
    const option = document.createElement('option');
    option.value = type.name;
    option.textContent = type.name;
    return option;
}
