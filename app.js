const map = document.querySelector("#map"); // selection de l'element qui contient l'id map
const paths = document.querySelectorAll(".map__image a"); // selection des path
const links = document.querySelectorAll(".map__list a"); // selection tout les liens


const activeArea = (id) => {
    /* supprime la class "is-active" sur les elements qui ne sont pas survoler */
    map.querySelectorAll(".is-active").forEach((item) => {
        item.classList.remove("is-active");
    });
    /* si l'id est définie */
    if (id !== undefined){
        document.querySelector('#list-'+ id).classList.add("is-active"); // permet de désigner le lien actif
        document.querySelector('#region-'+ id).classList.add("is-active");
    }
};


/**
 * Au survole de la carte
 */
paths.forEach((path) => { // pour chaque lien, écoute l'event " mouseenter "
    path.addEventListener("mouseenter", function () {
        let id = this.id.replace('region-', ''); // enlève le "region-" de l'id et garde uniquement la lettre
        activeArea(id)
    })
});


links.forEach((link) => {
    link.addEventListener("mouseenter", function(){
        let id = this.id.replace("list-", '');
        activeArea(id);
    })
});

map.addEventListener("mouseover", function() {
    activeArea();
});