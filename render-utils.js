export function renderPlant(plant) {
    const li = document.createElement('li');
    const p = document.createElement('p');

    li.classList.add('card');
    li.textContent = plant.Common_Name;

    p.textContent = `Light needs: ${plant.Suitable_Site_Conditions}`;

    li.append(p);

    return li;
}
