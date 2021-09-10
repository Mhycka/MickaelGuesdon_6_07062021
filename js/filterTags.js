// Je vérifie la variable d'URL "tag"
// Si elle est vide rien faire
//     -Afficher tous les photographes
// Si il y en a une
//     Tag = portrait
//         -Afficher que les photographe  Tag = portrait
//             -Tableua de donné trié
//                 -Afficher en html
//         -Ajouter a touts les class portrait la class actived



/* exported filters*/

function filters () {
    let filters = document.querySelectorAll(' li a');
    let articles = document.querySelectorAll('.cardphotograph');
    // let filtersReturn = document.querySelectorAll('.ph-infos a');

    function filterTags (){
        
        this.filters.forEach(filter => {
            filter.addEventListener("click", event =>{
                let elt = event.target.dataset.filter;
                // console.log(elt)
                // console.log(event)
                // console.log(event.target)
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

    // function returnFilersPage() {
    //     this.filtersReturn.forEach(filter => {
    //         filter.addEventListener("click", event =>{
    //             let elt = event.target.dataset.filter;
    //             console.log(elt)
    //             let tags = document.querySelectorAll('[data-filter]');
    //             console.log(tags)

    //             tags.forEach(tag => { 
    //                 let tagAll = tag.dataset.filter;
    //                 console.log(tagAll.index)
    //      
    //             })

    //             this.filterTags();
    //         })
    //     });
    // }

    return {
        filters,
        articles,
        // filtersReturn,
        filterTags,
        domArticles,
        eachFilters,
        activeFilters,
        // returnFilersPage
    }
}