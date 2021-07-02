function filtres() {

    let filtres = document.querySelector('ul');
    let articles = document.querySelectorAll('.cardphotograph');
    let filterPh = document.querySelectorAll('.filter li');

    function test(photographes){ 
        console.log(photographes)

        let Afficher = []
        photographes.forEach( (photographe) =>{
            if(photographe.tags.includes('portrait')){
                console.log(photographe)
                Afficher.push(photographe)
            }
        })

        console.log(Afficher)
        //CreateHTML(Afficher)
        
    }
    
    //Créert HTML en fonction d'un tableau de donnée

    function filterTags (){
        filtres.addEventListener('click', event => {
            //console.log(event)
            let elt = event.target.parentNode;
            //console.log(event.target.parentNode)
            let classValue = elt.classList.value;
            if (-1 ===classValue.indexOf('actived')) {
                elt.classList.add('actived')
            } else {
                elt.classList.remove('actived')
            }
            this.domArticles(articles);
        });
    };

    function activeFilters() {
        let currentFilters = document.querySelectorAll('ul li.actived');
        let filterSelect = [];

        // console.log(currentFilters);
    
        currentFilters.forEach(function(currentFilter) {
            // console.log(currentFilter);
            // console.log(currentFilter.querySelector('a').getAttribute("data-filter"));
            filterSelect.push(currentFilter.querySelector('a').getAttribute("data-filter"))
        })
    
        return filterSelect;
    }
    
    function eachFilters(article) {
        let filters = this.activeFilters();
        // console.log(filters);
        let classValue = article.classList.value;
        let classes = classValue.split(' ');
        let intersection = filters.filter(
            x => classes.includes(x)
        );
        return filters.length == intersection.length;
    }
    
    function domArticles(articles) {
        //console.log(articles)
        articles.forEach(article => {
            if (this.eachFilters(article)) {
                article.style.display= 'block';
            } else {
                article.style.display= 'none';
            }
        });
    };

    return {
        filtres,
        articles,
        test,
        filterTags,
        activeFilters,
        eachFilters,
        domArticles
    }
};


function filtresPh () {
    let articles = document.querySelectorAll('.cardphotograph');
    let filterPh = document.querySelectorAll('.filter li');
        //console.log(filterPh)

    function filtertagPh () {
        filterPh.forEach( tag => {
            tag.addEventListener("click", event => {
            //console.log(event)
            let elt = event.target;
            console.log(event.target)
            let classValue = elt.classList.value;
            if (-1 ===classValue.indexOf('actived')) {
                elt.classList.add('actived')
                    if (tags=== elt.classList){
                        
                    }
            } else {
                elt.classList.remove('actived')
            }
             this.domTagsPh(articles);
             //console.log(articles)
            });
        });
    }

    function activeFilters() {
        let currentFilters = document.querySelectorAll('ul li.actived');
        let filterSelect = [];

        // console.log(currentFilters);
    
        currentFilters.forEach(function(currentFilter) {
            // console.log(currentFilter);
            // console.log(currentFilter..getAttribute("data-filter"));
            filterSelect.push(currentFilter.getAttribute("data-filter"))
        })
    
        return filterSelect;
    }
    
    function eachFilters(article) {
        let filters = this.activeFilters();
        // console.log(filters);
        let classValue = article.classList.value;
        let classes = classValue.split(' ');
        let intersection = filters.filter(
            x => classes.includes(x)
        );
        return filters.length == intersection.length;
    }

    function domTagsPh (articles) {
        articles.forEach(article => {
            if (this.eachFilters(article)) {
                article.style.display= 'block';
            } else {
                article.style.display= 'none';
            }
        });
    }
    return {
        filtertagPh,
        activeFilters,
        eachFilters,
        domTagsPh
    }
};