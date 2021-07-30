function LightboxParam() {
    const currentIndex = 0;
    

    function init() {

        let getMedias = Array.from(document.getElementsByClassName('ph-media'));
        console.log(getMedias)

        getMedias.forEach((mediaWorks, index) => mediaWorks.addEventListener("click", () => {
           
            // console.log(mediaWorks , index , mediaWorks.src ,  mediaWorks.alt)
           
            let lightBoxMedia = document.getElementById('works-lightbox-media');
            let lightBoxName = document.getElementById('works-lightbox-name');
            let src = mediaWorks.src;
            let nameSrc =  mediaWorks.alt;
            this.currentIndex = index;

            // console.log(this.currentIndex)

            document.getElementById('works-lightbox').style.display = 'block';
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
            let lightBoxMedia = document.getElementById('works-lightbox-media');
            let lightBoxName = document.getElementById('works-lightbox-name');

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
            let lightBoxMedia = document.getElementById('works-lightbox-media');
            let lightBoxName = document.getElementById('works-lightbox-name');

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
        currentIndex,
        init,
        next,
        previous,
        close,
        keyboard
    }
}