function LightboxParam() {
    const currentIndex = 0;

    let getMedias = Array.from(document.getElementsByClassName('ph-media'));


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
            lightBoxMedia.src = src;
            lightBoxName.innerHTML = nameSrc;

        }))

        this.previous(document.querySelector('.left-arrow-lightbox'), getMedias);
        this.next(document.querySelector('.right-arrow-lightbox'), getMedias);
        this.close();
        this.keyboard(getMedias);
    };

    function createimgHTML(elt, media) {
        console.log(elt, media)
        let eltImage = document.createElement('img');
        eltImage.setAttribute('src', `medias/${name}/${getMedias.image}`);
        eltImage.setAttribute('alt', getMedias.title);
        eltImage.setAttribute('role', 'button');

        return eltImage;
    }

    function createvidHTML(elt, media) {
        console.log(getMedias)
        let eltVideo = document.createElement('video');
        eltVideo.setAttribute("controls", "controls")
        eltVideo.setAttribute('src', `medias/${name}/${getMedias.video}`);
        eltVideo.setAttribute('alt', element.title);
        eltVideo.setAttribute('role', 'button');

        return eltVideo;
    }

    function renderMedia(elt, media) {
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
        currentIndex,
        createimgHTML,
        createvidHTML,
        init,
        next,
        previous,
        close,
        keyboard
    }
}