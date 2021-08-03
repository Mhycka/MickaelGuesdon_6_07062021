
function Media () {
    function createimgHTML(element , name) {
        let eltImage = document.createElement('img');
        eltImage.setAttribute('src', `medias/${name}/${element.image}`);
        eltImage.setAttribute('alt', element.title);
        eltImage.setAttribute('role', 'button');
        eltImage.className = 'ph-media';

        return eltImage;
    }

    function createvidHTML(element , name) {
        let eltVideo = document.createElement('video');
        eltVideo.setAttribute("controls", "controls")
        eltVideo.setAttribute('src', `medias/${name}/${element.video}`);
        eltVideo.setAttribute('alt', element.title);
        eltVideo.setAttribute('role', 'button');
        eltVideo.className = 'ph-media';

        return eltVideo;
    }

    function renderMedia(element , name) {
        // console.log(element.hasOwnProperty('image'))
        // console.log(element)
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
            // console.log(element)
            if (id == element.photographerId) {
                let sectionPhWorks = document.getElementById('ph-works');
                let articlePhWork = document.createElement("article");

                let mediaFactory = this.renderMedia(element , photographe.name);
                // console.log(mediaFactory)

                let workTemplate = `
                <a href='#' title=${element.title}>
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
                articlePhWork.innerHTML = workTemplate;
                sectionPhWorks.appendChild(articlePhWork);

                articlePhWork.classList.add("ph-work-elt");
            }
        })
    };
    
    return {
        createimgHTML,
        createvidHTML,
        renderMedia,
        builder,
    }
}