
function filterTags (){
    let filtres = document.querySelector('ul');
    let articles = document.querySelectorAll('.cardphotograph');

   
    filtres.addEventListener('click', event => {
        let classValue = event.target.classList.value;
        console.log(event)
        if (-1 ===classValue.indexOf('actived')) {
            event.target.classList.add('actived')
        } else {
            event.target.classList.remove('actived')
        }
        
        this.domArticles(articles);
    });
};

function getActiveFilters() {
    let currentFilters = document.querySelectorAll('ul li.actived');
    let filterSelected = [];

    currentFilters.forEach(function(currentFilters) {
        filterSelected.push(currentFilter.getAttribute("data-filter"))
    })

    return filterSelected;
}

function ownAllFilters(article) {
    let filters = this.getActiveFilters();
    let classValue = article.classList.value;
    let classes = classValue.split(' ');
    let intersection = filters.filter(
        x => classes.includes(x)
    );

    return filters.length == intersection.length;
}

function domArticles() {
    articles.forEach(article => {
        if (this.ownAllFilter(article)) {
            article.style.display= 'block';
        } else {
            article.style.display= 'none';
        }
    });
};