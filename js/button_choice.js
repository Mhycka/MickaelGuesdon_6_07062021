function buttonChoice() {
    
    let data = [];
    let photographe = [];
    let photographeID = [];
    let MediaFactory = null;

    function init(data, photographe, photographeID , MediaFactory){
        this.data = data
        this.photographe = photographe
        this.photographeID = photographeID
        this.MediaFactory = MediaFactory
    }
    

    // Events, open/close the dropDownMenu
    function dropDown(datas) {
        //console.log(datas)
        let arrowOpen = document.getElementsByClassName('sort-btn');
        let arrowClose = document.getElementsByClassName('arrow-up-close');
        let hiddenSort = document.getElementsByClassName('hidden-sort');

        if (arrowOpen) {
            arrowOpen[0].addEventListener('click', () => {
                hiddenSort[0].style.display = 'block';
            });
            this.sortMedias(datas);
        }
        if (arrowClose) {
            arrowClose[0].addEventListener('click', () => {
                hiddenSort[0].style.display = "none";
            });
        }
    };

    // SORT MEDIAS (POPULARITY, DATA, TITLE)
    function sortMedias(datas) {
        let media = datas.media;
        let mediaArraySort = [];

        //console.log(datas.media)
        
        let btnSort = document.querySelector('.sort-btn');
        let hiddenSort = document.getElementsByClassName('hidden-sort');
        let sortBtn = Array.from(document.getElementsByClassName('sort'));

        sortBtn.forEach((btn, index) => btn.addEventListener('click', () => {
            hiddenSort[0].style.display = "none";
            if (index == 0) {
                btnSort.innerHTML = `Popularité`;

                mediaArraySort = media.sort((a, b) => { // SORT BY POPULARITY  
                    return b.likes - a.likes
                })

            } else if (index == 1) {
                btnSort.innerHTML = `Date`;

                mediaArraySort = media.sort((a, b) => { // SORT BY DATE 
                    return new Date(a.date).valueOf() - new Date(b.date).valueOf();
                })

            } else if (index == 2) {
                btnSort.innerHTML = `Titre`;

                mediaArraySort = media.sort((a, b) => { // SORT BY TITLE
                    if (a.title.toLowerCase() < b.title.toLowerCase()) {
                        return -1;
                    } else if (a.title.toLowerCase() > b.title.toLowerCase()) {
                        return 1;
                    }
                })
            }
            console.log(mediaArraySort);

            this.displaySortMedia(mediaArraySort);
        }));
    };

    function displaySortMedia(mediaArraySort) {
        // DISPLAY PHOTOGRAPHERS WORKS WITH SORT
        document.getElementById("ph-works").innerHTML = "";
       
        // const SectionMediaInClass = Media();
        // SectionMediaInClass.builder(mediaArraySort, this.photographe , this.photographeID);
        this.MediaFactory.builder(mediaArraySort, this.photographe , this.photographeID);
    }

    return {
        //mediaArraySort,
        photographe,
        photographeID,
        init,
        dropDown,
        sortMedias,
        displaySortMedia,
    }
}