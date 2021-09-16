/* eslint-disable no-undef */
let myUrl = 'Data/FisheyeData.json';
fetch(myUrl , {method : "GET"})
.then(data => {
    return data.json()
}).then(datas =>{

    let dataPhotographers = datas.photographers
    let sectionPhotographers = document.getElementById('photographers');

    dataPhotographers.forEach((photographe) =>{
        let cardPhotographers = document.createElement('article');

        cardPhotographers.className = photographe.tags.join(' ') + ' cardphotograph';

        let templateCardPhotographer = `
            <a href="photographers.html?id=${photographe.id}" title="${photographe.name}">
                <img src="${photographe.portrait}" alt="${photographe.alt}">
                <h2 class="name">${photographe.name}</h2>
            </a>
            <p class="location">${photographe.city}, ${photographe.country}</p>
            <p class="tagline">${photographe.tagline}</p>
            <p class="price">${photographe.price}€/jour</p>
            <ul class="filter ph-tags">${photographe.tags.map(tag =>
                `<li>
                    <a href=#" class ="${tag}" title="${tag}" data-filter="${tag}">${tag}</a>
                </li>`).join("")}
            </ul>`

        sectionPhotographers.appendChild(cardPhotographers);
        cardPhotographers.innerHTML = templateCardPhotographer;
    })


    const myFilters = filters(); 
    myFilters.filterTags();

    const scroll = scrollElt();
    scroll.checkPage();
})