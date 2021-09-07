/* eslint-disable no-prototype-builtins */
/* exported Media */
function Media () {

    const totalLike = 0;

    function createimgHTML(element , name) {
        let eltImage = document.createElement('img');
        eltImage.setAttribute('src', `medias/${name}/${element.image}`);
        eltImage.setAttribute('alt', element.title);
        eltImage.setAttribute('role', 'button');
        eltImage.setAttribute('data-type','image');
       // eltImage.className = 'ph-media';

        return eltImage;
    }

    function createvidHTML(element , name) {
        let eltVideo = document.createElement('video');
        eltVideo.setAttribute("controls", "controls")
        eltVideo.setAttribute('src', `medias/${name}/${element.video}`);
        eltVideo.setAttribute('alt', element.title);
        eltVideo.setAttribute('role', 'button');
        eltVideo.setAttribute('data-type','video')
        //eltVideo.className = 'ph-media';

        return eltVideo;
    }

    function renderMedia(element , name) {
        // console.log(element.hasOwnProperty('image'))
        // console.log(element)
        //  console.log(name)
        let factory = null;
        if (element.hasOwnProperty('image')) {
            factory = this.createimgHTML(element , name);
        } else if (element.hasOwnProperty('video')) {
            factory = this.createvidHTML(element , name);
        }
        return factory;
    }

    function builder(dataMedias, photographe , id) {
        dataMedias.forEach(element => {
            if (id == element.photographerId) {
                let sectionPhWorks = document.getElementById('ph-works');
                let articlePhWork = document.createElement("article");
                let box = document.getElementById('box');

                let mediaFactory = this.renderMedia(element , photographe.name);
                // console.log(mediaFactory)

                let workTemplate = `
                <a href='#' class ='ph-media' title='${element.title}'>
                 ${mediaFactory.outerHTML} 
                </a>
                <div class="ph-work-elt-text">
                    <h2 class="ph-work-title">${element.title}</h2>
                    <span class="ph-work-price">${element.price} €</span>
                    <div class='ph-elt-like'>
                    <span class="ph-work-like">
                        <a class="like-counter">${element.likes}</a>
                    </span>
                    <i class="far fa-heart heart-btn" aria-label='likes' role="button" data-value="${element.likes}"></i>
                    </div>
                </div>                
                `
                let boxTemplate = `
                <span id="total-likes">${this.totalLike}</span>
                <i class="fas fa-heart" aria-label='likes'></i>
                <span>${element.price} €/ jour</span>
                `

                articlePhWork.innerHTML = workTemplate;
                sectionPhWorks.appendChild(articlePhWork);
                // console.log(this.totalLike, element)
                articlePhWork.classList.add("ph-work-elt");

                this.totalLike += parseInt(element.likes);                
                box.innerHTML = boxTemplate;
            }

        })
    }
    
    return {
        totalLike,
        createimgHTML,
        createvidHTML,
        renderMedia,
        builder,
    }
}