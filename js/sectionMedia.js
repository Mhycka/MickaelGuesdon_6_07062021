
function Media () {
    let eltImage = document.createElement('img');
    let eltVideo = document.createElement('video');
    console.log(eltImage)
    console.log(eltVideo)

    function createHTML(element) {
        eltImage.setAttribute('src', element.image);
        eltImage.setAttribute('alt', element.alt);
        eltImage.setAttribute('role', 'button');
        eltImage.className = 'ph-media';

        eltVideo.setAttribute("controls", "controls")
        eltVideo.setAttribute('src', element.video);
        eltVideo.setAttribute('role', 'button');
        eltVideo.className = 'ph-media';

        return createHTML;
    }

    /*function createimgHTML(element) {
        eltImage.setAttribute('src', element.image);
        eltImage.setAttribute('alt', element.alt);
        eltImage.setAttribute('role', 'button');
        eltImage.className = 'ph-media';

        return eltImage;
    }

    function createvidHTML(element) {
        eltVideo.setAttribute("controls", "controls")
        eltVideo.setAttribute('src', element.video);
        eltVideo.setAttribute('role', 'button');
        eltVideo.className = 'ph-media';

        return eltVideo;
    }*/

    function renderMedia(element) {
        console.log(element.hasOwnProperty('image'))
        let factory = null;
        if (element.hasOwnProperty('image')) {
            factory = new eltImage();
        } else if (element.hasOwnProperty('video')) {
            factory = new eltVideo();
        }
        return createHTML(element);
    }

    function builder(dataMedias) {
        console.log(dataMedias)
        const id = window.location.search.split('id=')[1];
        let mediaFactory = new renderMedia();
        let currentMedia = [];
        let currentMediaName = [];

        dataMedias.forEach(element => {
            console.log(element)
            if (id == element.photographerId) {
                let sectionPhWorks = document.getElementById('ph-works');
                let articlePhWork = document.createElement("article");
                let mediaHTML = mediaFactory.renderMedia(element);
                let workTemplate = `
                <a href='#' title=${element.photoName}>
                ${mediaHTML.outerHTML}
                </a>
                <div class="ph-work-elt-text">
                    <h2 class="ph-work-title">${element.photoName}</h2>
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
                currentMedia.push(mediaHTML.outerHTML);
                currentMediaName.push(element.photoName);
                (new Lightbox())
                .init(currentMedia, currentMediaName)
            }
        })
    }
    
    return {
        eltImage,
        eltVideo,
        createHTML,
        //createimgHTML,
        //createvidHTML,
        renderMedia,
        builder,
        
    }
}