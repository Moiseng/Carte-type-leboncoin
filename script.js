class Map{
    constructor(map,paths,links){
        this.map = map;
        this.paths = paths;
        this.links = links;

        this.test(this.map, this.paths, this.links);
    }

    test(map,paths,links){
        this.map = document.querySelectorAll(map)
        this.paths = document.querySelectorAll(paths);
        this.links = document.querySelectorAll(links);

        this.paths.forEach((path) => {
            path.addEventListener("mouseenter", function(){
                let id = this.id.replace("region-", '');
                this.map.querySelectorAll(".is-active").forEach((item) => {
                    item.classList.remove('is-active');
                });
                document.querySelector('#list-'+ id).classList.add("is-active"); // permet de désigner le lien actif
                document.querySelector('#region-'+ id).classList.add("is-active");
            })
        })

        this.links.forEach((link) => {
            link.addEventListener("mouseenter", function(){
                let id = this.id.replace("list-", "");
                this.map.querySelectorAll(".is-active").forEach((item) => {
                    item.classList.remove('is-active');
                });
                document.querySelector('#list-'+ id).classList.add("is-active"); // permet de désigner le lien actif
                document.querySelector('#region-'+ id).classList.add("is-active");
            })
        })
    }
}

let onReady = () => {
    new Map("#map",".map__image a", ".map__list a");
};


/**
 * Gere le chargement de script async
 */
if (document.readyState !== "loading"){
    onReady();
}

document.addEventListener("DOMContentLoaded", onReady);