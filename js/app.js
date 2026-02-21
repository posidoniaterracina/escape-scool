document.addEventListener("DOMContentLoaded", function () {

    aggiornaStatus();

    const bottoniAule = document.querySelectorAll(".room");

    bottoniAule.forEach(bottone => {
        bottone.addEventListener("click", function () {
            const nomeAula = this.dataset.room;
            entraInAula(nomeAula);
        });
    });

    document.getElementById("back-to-map")
        .addEventListener("click", function () {
            document.getElementById("room-view").classList.add("hidden");
            document.getElementById("map-view").classList.remove("hidden");
        });

});
    }
}
