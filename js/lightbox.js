function LightboxParam() {

    const currentIndex = 0;
    let getMedias = Array.from(document.getElementsByClassName('ph-media'));
    //console.log(getMedias)
        
    function init() {

        //cliquer ppour verifier si c'est une video ou une image et creer le html  correspondant.

        getMedias.forEach((mediaWorks, index) => mediaWorks.addEventListener("click", () => {

            let lightBoxMedia = document.getElementById('lightbox_media');
            let src = mediaWorks.childNodes[1].src;
            let nameSrc =  mediaWorks.title;
            //console.log(mediaWorks)
            let dataType = mediaWorks.childNodes[1].getAttribute('data-type');
            //console.log(dataType , nameSrc)
            let elt = null ;
            if( dataType == 'image' ) {
                // console.log('ok img')
                let eltImage = document.createElement('img');
                elt = eltImage ;
            } else if( dataType == 'video' ) {
                // console.log('ok video')
                let eltVideo = document.createElement('video');
                eltVideo.setAttribute("controls", "controls");
                elt = eltVideo ;
            }
            
            elt.setAttribute('src', src);
            elt.setAttribute('alt', mediaWorks.title);
            elt.setAttribute('id' , 'works_lightbox_media');

            //console.log(elt)

            let lightBoxName = document.getElementById('works_lightbox_name');

            this.currentIndex = index;

           
            console.log(this.currentIndex)

            document.getElementById('works-lightbox').style.display = 'block';

            lightBoxMedia.innerHTML = '';
            lightBoxMedia.append(elt);
            lightBoxName.innerHTML = nameSrc;
            this.currentIndex= index;

        }))

        this.previous(document.querySelector('.left-arrow-lightbox'), getMedias);
        this.next(document.querySelector('.right-arrow-lightbox'), getMedias);
        this.close();
        this.keyboard(getMedias);
    };

    function previous(elt, media) {
        elt.addEventListener('click', () => {
            this.currentIndex -= 1;
            let currentMedia = document.getElementById('lightbox_media').childNodes[0];
            let lightBoxMedia = document.getElementById('works_lightbox_media');
            let lightBoxName = document.getElementById('works_lightbox_name');
            let src = media[this.currentIndex].childNodes[1].src;
            let nameSrc = media[this.currentIndex].title;
            // let dataType = media[this.currentIndex].childNodes[1].getAttribute('data-type');

            // console.log(this.currentIndex)
            // console.log(dataType)
            // console.log(nameSrc)

            if (this.currentIndex <= 0 ) {
                this.currentIndex = media.length - 1;
                let eltImage = document.createElement('img');
                elt = eltImage ;
                console.log(this.currentIndex)
              }
            // elt.setAttribute('src', src);
            // elt.setAttribute('alt', media.title);
            // elt.setAttribute('id' , 'works_lightbox_media');

            
            // console.log(src, nameSrc)
            currentMedia.setAttribute('alt', nameSrc);

            lightBoxMedia.src = src;
            lightBoxName.innerHTML = nameSrc;
        })
    };


    function next(elt, media) {
        elt.addEventListener('click', () => {
            this.currentIndex += 1;
            let currentMedia = document.getElementById('lightbox_media').childNodes[0];
            let lightBoxMedia = document.getElementById('works_lightbox_media');
            let lightBoxName = document.getElementById('works_lightbox_name');
            let src = media[this.currentIndex].childNodes[1].src;
            let nameSrc = media[this.currentIndex].title;

            if (this.currentIndex > media.length - 1) {
                this.currentIndex = 0;
            }

            currentMedia.setAttribute('alt', nameSrc);

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