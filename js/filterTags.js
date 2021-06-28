function filtres() {

    let filtres = document.querySelector('ul');
    let articles = document.querySelectorAll('.cardphotograph');
    let filterPh = document.querySelectorAll('.filter li');

    function filterTags (){
        filtres.addEventListener('click', event => {
            console.log(event)
            let elt = event.target.parentNode;
            console.log(event.target.parentNode)
            let classValue = elt.classList.value;
            if (-1 ===classValue.indexOf('actived')) {
                elt.classList.add('actived')
            } else {
                elt.classList.remove('actived')
            }
            this.domArticles(articles);
        });
    };

    function filterTagPh() {
        filterPh.addEventListener('click', event => {
            console.log(event)
            let elt2 = event.target;
            console.log(event.target)
            let classValue = elt2.classList.value;
            if (1 ===classValue.indexOf('actived')) {
                elt2.classList.add('actived')
            } else {
                elt2.classList.remove('actived')
            }
            this.domArticles(articles);
        });
    }

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
        filterPh,
        filterTags,
        filterTagPh,
        activeFilters,
        eachFilters,
        domArticles
    }
};