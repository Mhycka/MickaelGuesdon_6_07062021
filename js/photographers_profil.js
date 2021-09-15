/* eslint-disable no-undef */
// let myUrl = 'Data/FisheyeData.json';
// fetch(myUrl , {method : "GET"})
fetch('public/FisheyeData.json')
.then(data => {
    return data.json()
}).then(datas =>{

    let dataPhotographers = datas.photographers;
    let dataMedias = datas.media;
    //console.log(datas.media)

    const URLParam = new URLSearchParams(window.location.search)
    const id = URLParam.get('id');

    const photographers = !id ? dataPhotographers : dataPhotographers.filter(photographer => photographer.id == id);
    const PhotographerProfil = document.getElementById('ph-profil-header');
    const templatePhotographerProfil = `
        <article aria-label="Photographer Profil" class="ph-profil">
            <div class='ph-infos'>
                <h2>${photographers[0].name}</h2>
                <p class="ph-city">${photographers[0].city}, ${photographers[0].country}</p>
                <p class="ph-tagline">${photographers[0].tagline}</p>
                <p >${photographers[0].tags.map(tag => `<a class="tags-Phpage ${tag}" data-filter="${tag}" href="index.html">#${tag}</a>`).join(" ")}</p>
            </div>
            <button id="ph-contact" title='Contact Me'>Contactez-moi</button>
            <a href='#' title='${photographers[0].alt}'><img src="${photographers[0].portrait}" alt="${photographers[0].alt}"></a>
        </article>
        `

    PhotographerProfil.innerHTML = templatePhotographerProfil;

    const SectionMedia = Media();
    SectionMedia.builder(dataMedias, photographers[0] , id);

    const Modal = modalparam();
    Modal.modal(dataPhotographers);

    const FormData = Form();
    FormData.fields();

    // const myFilters = filters(); 
    // myFilters.returnFilersPage();

    const Lightbox = LightboxParam();
    Lightbox.init();
 
    const Likesetting =  likes();
    Likesetting.likesParam();

    const buttonChoiceSort = buttonChoice();
    buttonChoiceSort.init(datas, photographers[0] , id , SectionMedia);
    buttonChoiceSort.dropDown(datas);
});

