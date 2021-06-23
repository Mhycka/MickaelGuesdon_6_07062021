
let myUrl = 'Data/FisheyeData.json';
fetch(myUrl , {method : "GET"})
.then(data => {
    return data.json()
}).then(datas =>{

    let dataPhotographers = datas.photographers
//    console.log(datas)
//    console.log(dataPhotographers)

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
                `<li data-filter="${tag}">#${tag}</li>`).join("")}</ul>`

        sectionPhotographers.appendChild(cardPhotographers);
        cardPhotographers.innerHTML = templateCardPhotographer;
    })
})