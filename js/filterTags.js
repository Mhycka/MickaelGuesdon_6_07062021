function filtres() {

    let filtres = document.querySelector('ul');
    let articles = document.querySelectorAll('.cardphotograph');

    function filterTags (){
        filtres.addEventListener('click', event => {
            let elt = event.target.parentNode;
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
        filterTags,
        activeFilters,
        eachFilters,
        domArticles
    }
};