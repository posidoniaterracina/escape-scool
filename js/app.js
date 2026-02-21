document.addEventListener("DOMContentLoaded", function () {

    const floorPlan = document.getElementById("floor-plan");

    ambienti.forEach(function (ambiente) {

        const stanza = document.createElement("div");
        stanza.classList.add("room");
        stanza.classList.add(ambiente.tipo);

        stanza.textContent = ambiente.id.toUpperCase();

        if (ambiente.tipo === "materia") {
            stanza.addEventListener("click", function () {
                entraInAula(ambiente.materia);
            });
        }

        floorPlan.appendChild(stanza);

    });

});
