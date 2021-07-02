let myUrl = 'Data/FisheyeData.json';
fetch(myUrl , {method : "GET"})
.then(data => {
    return data.json()
}).then(datas =>{

    let dataPhotographers = datas.photographers;
    let dataMedias = datas.media;
    console.log(datas.media)

    const id = window.location.search.split('id=')[1];
        const photographers = !id ? dataPhotographers : dataPhotographers.filter(photographer => photographer.id == id);
        const PhotographerProfil = document.getElementById('ph-profil-header');
        const templatePhotographerProfil = `
            <article aria-label="Photographer Profil" class="ph-profil">
                <div class='ph-infos'>
                    <h2>${photographers[0].name}</h2>
                    <p class="ph-city">${photographers[0].city}, ${photographers[0].country}</p>
                    <p class="ph-tagline">${photographers[0].tagline}</p>
                    <p >${photographers[0].tags.map(tag => `<a class="tags-Phpage" href="index.html">#${tag}</a>`).join(" ")}</p>
                </div>
                <button id="ph-contact" title='Contact Me'>Contactez-moi</button>
                <a href='#' title='${photographers[0].alt}'><img src="${photographers[0].portrait}" alt="${photographers[0].alt}"></a>
            </article>
            `

        PhotographerProfil.innerHTML = templatePhotographerProfil;

        const SectionMedia = Media();
        SectionMedia.createimgHTML();

});

