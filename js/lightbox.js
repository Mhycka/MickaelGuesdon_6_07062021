function LightboxParam() {

    const currentIndex = 0;
    let getMedias = Array.from(document.getElementsByClassName('ph-media'));
    //console.log(getMedias)
        
    function init() {

        //cliquer ppour verifier si c'est une video ou une image et creer le html  correspondant.

        getMedias.forEach((mediaWorks, index) => mediaWorks.addEventListener("click", () => {
            let src = mediaWorks.childNodes[1].src;
            let nameSrc =  mediaWorks.title;
            let dataType = mediaWorks.childNodes[1].getAttribute('data-type');
            
            this.renderView(dataType , src , nameSrc);
            this.currentIndex = index;

            document.getElementById('works-lightbox').style.display = 'block';
            this.currentIndex= index;
        }))

        this.previous(document.querySelector('.left-arrow-lightbox'), getMedias);
        this.next(document.querySelector('.right-arrow-lightbox'), getMedias);
        this.close();
        this.keyboard(getMedias);
    };

    function renderView(dataType, src, nameSrc) {
        let lightBoxMedia = document.getElementById('lightbox_media');
        let lightBoxName = document.getElementById('works_lightbox_name');

        let elt = null ;
            if( dataType == 'image' ) {
                // console.log('ok img')
                let eltImage = document.createElement('img');
                eltImage.setAttribute('data-type', 'image');
                elt = eltImage ;
            } else if( dataType == 'video' ) {
                // console.log('ok video')
                let eltVideo = document.createElement('video');
                eltVideo.setAttribute("controls", "controls");
                eltVideo.setAttribute('data-type', 'video');
                elt = eltVideo ;
            }
            
            elt.setAttribute('src', src);
            elt.setAttribute('alt',nameSrc);
            elt.setAttribute('id' , 'works_lightbox_media');

            // console.log(elt);

            lightBoxMedia.innerHTML = '';
            lightBoxMedia.append(elt);
            lightBoxName.innerHTML = nameSrc;
    };

    function previous(elt, media) {
        elt.addEventListener('click', () => {
            this.currentIndex--;
            let dataType = media[this.currentIndex].childNodes[1].getAttribute('data-type');
            let src = media[this.currentIndex].childNodes[1].src;
            let nameSrc = media[this.currentIndex].title;

            this.renderView(dataType , src , nameSrc);

            if (this.currentIndex <= 0) {
                this.currentIndex = media.length - 1;
            }
        })
    };


    function next(elt, media) {
        elt.addEventListener('click', () => {
            this.currentIndex ++;
            let dataType = media[this.currentIndex].childNodes[1].getAttribute('data-type');
            let src = media[this.currentIndex].childNodes[1].src;
            let nameSrc = media[this.currentIndex].title;

            this.renderView(dataType , src , nameSrc);

            if (this.currentIndex >= media.length - 1) {
                this.currentIndex = 0;
            }
        })
    };

    function close() {
        document.querySelector('.close-lightbox-icon').addEventListener('click', () => {
            let lightbox = document.getElementById('works-lightbox');

            lightbox.style.display = 'none';
        })
    };

    function keyboard(media) {
        document.addEventListener('keydown', (key) => {
            let dataType = media[this.currentIndex].childNodes[1].getAttribute('data-type');
            let src = media[this.currentIndex].childNodes[1].src;
            let nameSrc = media[this.currentIndex].title;

            console.log(dataType,src,nameSrc)

            this.renderView(dataType , src , nameSrc);

            if (key.code == "Escape") {
                let lightBox = document.getElementById('works-lightbox');
                lightBox.style.display = 'none';
            }

            
            else if (key.code == "ArrowRight") {
                this.currentIndex ++;

                if (this.currentIndex >= media.length - 1) {
                    this.currentIndex = 0;
                }
            }

            else if (key.code == "ArrowLeft") {
                this.currentIndex --;

                if (this.currentIndex <= 0) {
                    this.currentIndex = media.length - 1;
                }
            }
        });
    };

    return {
        currentIndex,
        init,
        renderView,
        next,
        previous,
        close,
        keyboard
    }
}