/* exported filters*/
function filters () {
    let filters = document.querySelectorAll(' li a');
    let articles = document.querySelectorAll('.cardphotograph');

    function filterTags (){
        
        this.filters.forEach(filter => {
            filter.addEventListener("click", event =>{
                let elt = event.target.dataset.filter;
                //console.log(elt)
                //console.log(event)
                //console.log(event.target)
                let tags = document.querySelectorAll('[data-filter]');

                tags.forEach(tag => { 
                    let tagAll = tag.dataset.filter;
                    if ( elt === tagAll) {
                        tag.parentNode.classList.add('actived');
                    } else {
                        tag.parentNode.classList.remove('actived');
                    }
                })
                this.domArticles(this.articles);
            })
        });
    }


    function activeFilters() {
        let currentFilters = document.querySelectorAll('ul li.actived');
        let filterSelect = [];

        currentFilters.forEach(function(currentFilter) {
                filterSelect.push(currentFilter.querySelector('a').getAttribute("data-filter"))
        })
        
        return filterSelect;
    }


    function eachFilters(article) {
        let filters = this.activeFilters();
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
    }

    return {
        filters,
        articles,
        filterTags,
        domArticles,
        eachFilters,
        activeFilters
    }
}