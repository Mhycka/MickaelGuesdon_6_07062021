// function filtres() {

//     let filtres = document.querySelector('ul');
//     let articles = document.querySelectorAll('.cardphotograph');
    
//     // function ArrayPh(photographes){
//     //     let Afficher = []
//     //     //const array1 = ['travel','portrait','events','animals','sports','architecture','fasshion', 'art'];
//     //     photographes.forEach( (photographe) =>{
//     //         if(photographe.tags.filter(photographe => photographe.tags == tags)){
//     //             //console.log(photographe)
//     //             Afficher.push(photographe)
//     //             //console.log(photographe.tags)
//     //         }
//     //         this.domArticles(articles)
//     //     })
//     //     //console.log(Afficher)
//     //     //CreateHTML(Afficher);
//     // };
    
//     //Créer HTML en fonction d'un tableau de donnée

//     function filterTags (){
//         filtres.addEventListener('click', event => {
//             //console.log(event)
//             let elt = event.target.parentNode;
//             //console.log(event.target.parentNode)
//             let classValue = elt.classList.value;
//             if (-1 ===classValue.indexOf('actived')) {
//                 elt.classList.add('actived')
//             } else {
//                 elt.classList.remove('actived')
//             }    
//             this.domArticles(articles);
//         })
//     };

//     function activeFilters() {
//         let currentFilters = document.querySelectorAll('ul li.actived');
//         let filterSelect = [];

//         // console.log(currentFilters);
    
//         currentFilters.forEach(function(currentFilter) {
//             // console.log(currentFilter);
//             // console.log(currentFilter.querySelector('a').getAttribute("data-filter"));
//             filterSelect.push(currentFilter.querySelector('a').getAttribute("data-filter"))
//         })
//         return filterSelect;
//     }
    
//     function eachFilters(article) {
//         let filters = this.activeFilters();
//         // console.log(filters);
//         let classValue = article.classList.value;
//         let classes = classValue.split(' ');
//         let intersection = filters.filter(
//             x => classes.includes(x)
//         );
//         return filters.length == intersection.length;
//     };
    
//     function domArticles(articles) {
//         //console.log(articles)
//         articles.forEach(article => {
//             if (this.eachFilters(article)) {
//                 article.style.display= 'block';
//             } else {
//                 article.style.display= 'none';
//             }
//         });
//     };

//     return {
//         filtres,
//         articles,
//         ArrayPh,
//         filterTags,
//         activeFilters,
//         eachFilters,
//         domArticles
//     }
// };


// function filtresPh () {
//     let articles = document.querySelectorAll('.cardphotograph');
//     let filterPh = document.querySelectorAll('.filter li');
//         //console.log(filterPh)

//     function filtertagPh () {
//         filterPh.forEach( tag => {
//             tag.addEventListener("click", event => {
//             //console.log(event)
//             let elt = event.target;
//             console.log(event.target)
//             let classValue = elt.classList.value;
//             if (-1 ===classValue.indexOf('actived')) {
//                 elt.classList.add('actived')
//                     if (tags=== elt.classList){
                        
//                     }
//             } else {
//                 elt.classList.remove('actived')
//             }
//              this.domTagsPh(articles);
//              //console.log(articles)
//             });
//         });
//     };

//     function activeFilters() {
//         let currentFilters = document.querySelectorAll('ul li.actived');
//         let filterSelect = [];

//         // console.log(currentFilters);
    
//         currentFilters.forEach(function(currentFilter) {
//             // console.log(currentFilter);
//             // console.log(currentFilter..getAttribute("data-filter"));
//             filterSelect.push(currentFilter.getAttribute("data-filter"))
//         })    
//         return filterSelect;
//     };
    
//     function eachFilters(article) {
//         let filters = this.activeFilters();
//         // console.log(filters);
//         let classValue = article.classList.value;
//         let classes = classValue.split(' ');
//         let intersection = filters.filter(
//             x => classes.includes(x)
//         );
//         return filters.length == intersection.length;
//     };

//     function domTagsPh (articles) {
//         articles.forEach(article => {
//             if (this.eachFilters(article)) {
//                 article.style.display= 'block';
//             } else {
//                 article.style.display= 'none';
//             }
//         });
//     }
//     return {
//         filtertagPh,
//         activeFilters,
//         eachFilters,
//         domTagsPh
//     }
// };


function filters () {
    let filters = document.querySelectorAll(' li');
    //let filtersTop = document.querySelector('ul');
    let articles = document.querySelectorAll('.cardphotograph');
    //let filterPh = document.querySelectorAll('.filter li');
    let filterselect = document.getElementsByClassName('actived');

    //let tagsActif = [];

    // function ArrayPh(photographes){
    //     let Afficher = []
    //     //console.log(photographes)

    //     const URLParam = new URLSearchParams(window.location.search)
    //     const tags = URLParam.get('tags');

    //     photographes.forEach( (photographe) =>{
    //         if(photographe.tags.filter(photographe => photographe.tags == tags)){
    //             Afficher.push(photographe)
    //             console.log(photographe.tags)
    //         }
    //         return Afficher;
    //     })
    //     //console.log(Afficher)
    // };


    // function addTagParamToURL (tagToAdd){
    //     if (tagToAdd == "") return;
    //     console.log(tagToAdd)
        
    //     let url = "#";
    //     let tagParams = getParamsFromURL("tag");
        
    //     if (tagParams.includes(tagToAdd))
    //         tagParams = tagParams.filter((tag) => tag !== tagToAdd);
    //     else tagParams.push(tagToAdd);
        
    //     tagParams.forEach((tag, index) => {
    //         if (index === 0) url += `?tag=${tag}`;
    //         else url += `&tag=${tag}`;
    //     });
    //     window.history.pushState({}, "", url);
    //     };

    // Si tag déffiné
        //Afficher toutes les tag de coucleur


    function filterTags (){
    //     this.filtersTop.addEventListener('click', event => {
    //         //console.log(dataPhotographers)
    //         let elt = event.target.parentNode;
    //         console.log(event.target.dataset.filter);
    //         let classValue = elt.classList.value;
    //         //console.log(filterPh.classList)
    //         if (-1 === classValue.indexOf('actived')) {
    //             elt.classList.add('actived');

    //             //Foreache sur tout les  tags profils pour mettre la class active

    //             //elt2.add('actived');
    //             console.log(filterselect)
    //         } else {
    //             elt.classList.remove('actived')

    //             // /Foreache sur tout les  tags profils pour REMOVE la class active
    //         }    
    //         this.domArticles(this.articles);
    //     });
        
        this.filters.forEach(filter => {
            filter.addEventListener("click", event =>{
                let  target= event.target.parentNode;
                let elt = event.target.dataset.filter;
                let classValue = target.classList.value;
                let tags = document.querySelectorAll('[data-filter]');
                
                tags.forEach(tag => { 
                    if (-1 === classValue.indexOf('actived')) {
                        tag.parentNode.classList.add('actived');
                    } else {
                        tag.parentNode.classList.remove('actived');
                    }
                })
            })
        });

        //Quand je clique sur un element
            //Récupére le DATA-filter
            //Récupére les élement HTML document.querySelectorAll('a.portrait')

            // document.querySelectorAll('a.portrait').forEach( tag => {
            //     tag.parentNode.classList.add('actived');
            //     console.log(tag)
            // });
                // Si pas de classe active
                    //Foreahce pour ajouter la classe ()
                //si déja active
                    //REmove les class


        // this.filterPh.forEach( tag => {
        //     tag.addEventListener("click", event => {
        //     // let elt = event.target.parentNode;
        //     // //console.log(elt)
        //     // let classValue = elt.classList.value;
        //     // if (-1 ===classValue.indexOf('actived')) {
        //     //     elt.classList.add('actived');
        //     //     console.log(filterselect)
        //     // } else {
        //     //     elt.classList.remove('actived')
        //     // }
            
        //      this.domArticles(this.articles);
        //     });
        // });
    };

    /*function builderTags(dataPhotographers) {
        dataPhotographers.forEach(element => {
            console.log(element.tags)
            
        })
    };*/
    
    //Active ou descativer tous mes filtres (Ajouter classe active au header + touts les portrait) 

    function activeFilters() {
        let currentFilters = document.querySelectorAll('ul li.actived');
        let filterSelect = [];

        currentFilters.forEach(function(currentFilter) {
            filterSelect.push(currentFilter.querySelector('a').getAttribute("data-filter"))
        })    
        return filterSelect;
    };


    function eachFilters(article) {
        let filters = this.activeFilters();
        let classValue = article.classList.value;
        let classes = classValue.split(' ');
        let intersection = filters.filter(
            x => classes.includes(x)
        );
        return filters.length == intersection.length;
    };


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
        filters,
        //filtersTop,
        articles,
        //filterPh,
        filterTags,
        //builderTags,
        //ArrayPh,
        domArticles,
        eachFilters,
        activeFilters
    }
}

//REndre HTML photographe (Tablea de data)
//Savoir les filtre actif
//update filtre active/Noactif
//Filtre les dataphotodra -> new array avec les photogrape a affiché -> renderPhotgrape