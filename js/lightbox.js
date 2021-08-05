function LightboxParam() {

    const currentIndex = 0;
    let getMedias = Array.from(document.getElementsByClassName('ph-media'));
    let lightBoxDiv= document.createElement("div");

    console.log(getMedias)
        
    // function builder() {
    //     getMedias.forEach((mediaWorks, index) => {
    //         let lightboxParam = document.getElementById('lightbox-body');
    //         let factory = null;
    //         // console.log(element)
    //         //console.log(mediaWorks , index ,  mediaWorks.alt)


    //         mediaWorks.addEventListener("click", () => {
    //             //console.log(mediaWorks.src)
    //             let lightBoxMedia = document.getElementById('works_lightbox_media');
    //             let lightBoxName = document.getElementById('works_lightbox_name');
    //             let src = mediaWorks.src;
    //             let nameSrc =  mediaWorks.alt;
    //             this.currentIndex = index;

    //             console.log(mediaWorks)

    //             if (mediaWorks.getAttribute('image')) {                   
    //                 factory = this.createimgHTML(mediaWorks , alt);
    //                 document.getElementById('works-lightbox').style.display = 'block';
    //                 lightBoxMedia.src = src;
    //                 lightBoxName.innerHTML = nameSrc;
    //             } else {
    //                 factory = this.createvidHTML(mediaWorks);
    //                 document.getElementById('works-lightbox').style.display = 'block';
    //                 lightBoxMedia.src = src;
    //                 lightBoxName.innerHTML = nameSrc;
    //             }
    //         })
            
    //     lightboxParam.appendChild(lightBoxDiv);

    //     this.previous(document.querySelector('.left-arrow-lightbox'), getMedias);
    //     this.next(document.querySelector('.right-arrow-lightbox'), getMedias);
    //     this.close();
    //     this.keyboard(getMedias);
    //     return factory;
    //     })
    // };

    // function createimgHTML(getMedias) {
    //     let eltImage = document.createElement('img');
    //     eltImage.setAttribute('src', `medias/${alt}/${getMedias.image}`);
    //     eltImage.setAttribute('alt', getMedias.alt);
    //     eltImage.setAttribute('id' , 'works_lightbox_media');

    //     return eltImage;
    // };

    // function createvidHTML(getMedias , alt) {
    //     let eltVideo = document.createElement('video');
    //     eltVideo.setAttribute("controls", "controls");
    //     eltVideo.setAttribute('src', `medias/${alt}/${getMedias.video}`);
    //     eltVideo.setAttribute('alt', getMedias.alt);
    //     eltVideo.setAttribute('id', 'works_lightbox_media');

    //     return eltVideo;
    // };

    // function renderMedia(getMedias , alt) {
    //     // console.log(element.hasOwnProperty('image'))
    //     // console.log(element)
    //     let factory = null;
    //     if (getMedias.hasOwnProperty('image')) {
    //         factory = this.createimgHTML(getMedias, alt);
    //     } else if (getMedias.hasOwnProperty('video')) {
    //         factory = this.createvidHTML(getMedias , alt);
    //     }
    //     return factory;
    // };


    function init() {

        //cliquer verifier si c'est une video ou une image et creer le html  correspondant.

        getMedias.forEach((mediaWorks, index) => mediaWorks.addEventListener("click", () => {

            console.log(mediaWorks , index ,  mediaWorks.alt)

           
            let lightBoxMedia = document.getElementById('works_lightbox_media');
            let lightBoxName = document.getElementById('works_lightbox_name');
            let src = mediaWorks.src;
            let nameSrc =  mediaWorks.alt;
            this.currentIndex = index;

            console.log(this.currentIndex)

            document.getElementById('works-lightbox').style.display = 'block';

            //Ajouter l'image (Vidéo ou Image ?)
            lightBoxMedia.src = src;
            lightBoxName.innerHTML = nameSrc;
        }))

        this.previous(document.querySelector('.left-arrow-lightbox'), getMedias);
        this.next(document.querySelector('.right-arrow-lightbox'), getMedias);
        this.close();
        this.keyboard(getMedias);
    };

    function previous(elt, media) {
        elt.addEventListener('click', () => {
            this.currentIndex -= 1;
            let lightBoxMedia = document.getElementById('works_lightbox_media');
            let lightBoxName = document.getElementById('works_lightbox_name');

            if (this.currentIndex < 0) {
                this.currentIndex = media.length - 1;
            }

            let src = media[this.currentIndex].src;
            let nameSrc = media[this.currentIndex].alt;

            console.log(media[this.currentIndex] , this.currentIndex )

            lightBoxMedia.src = src;
            lightBoxName.innerHTML = nameSrc;
        })
    };


    function next(elt, media) {
        elt.addEventListener('click', () => {
            this.currentIndex += 1;
            let lightBoxMedia = document.getElementById('works_lightbox_media');
            let lightBoxName = document.getElementById('works_lightbox_name');

            if (this.currentIndex > media.length - 1) {
                this.currentIndex = 0;
            }

            let src = media[this.currentIndex].src;
            let nameSrc = media[this.currentIndex].alt;

            lightBoxMedia.src = src;
            lightBoxName.innerHTML = nameSrc;
        })
    };

    function close() {
        document.querySelector('.close-lightbox-icon').addEventListener('click', () => {
            let lightbox = document.getElementById('works-lightbox');

            lightbox.style.display = 'none';
        })
    };

    function keyboard(currentMedia, currentMediaName) {
        document.addEventListener('keydown', (key) => {
            let lightBoxMedia = document.getElementById('works-lightbox-media');
            let lightBoxName = document.getElementById('works-lightbox-name');

            if (key.code == "Escape") {
                let lightBox = document.getElementById('works-lightbox');
                lightBox.style.display = 'none';
            }

            else if (key.code == "ArrowRight") {
                this.currentIndex += 1;

                if (this.currentIndex > currentMediaName.length - 1) {
                    this.currentIndex = 0;
                }

                let src = currentMedia[this.currentIndex];
                let nameSrc = currentMediaName[this.currentIndex];

                lightBoxMedia.innerHTML = `${src}`;
                lightBoxName.innerHTML = `${nameSrc}`;
            }

            else if (key.code == "ArrowLeft") {
                this.currentIndex -= 1;

                if (this.currentIndex < 0) {
                    this.currentIndex = currentMedia.length - 1;
                    this.currentIndex = currentMediaName.length - 1;
                }

                let src = currentMedia[this.currentIndex];
                let nameSrc = currentMediaName[this.currentIndex];

                lightBoxMedia.innerHTML = `${src}`;
                lightBoxName.innerHTML = `${nameSrc}`;
            }
        });
    };

    return {
        getMedias,
        lightBoxDiv,
        currentIndex,
        // builder,
        // createimgHTML,
        // createvidHTML,
        // renderMedia,
        init,
        next,
        previous,
        close,
        keyboard
    }
}