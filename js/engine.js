let statoGioco = {
    punti: 0,
    debiti: 4,
    aulaCorrente: null,
    domandaCorrente: 0,
    corretteAula: 0
};

function aggiornaStatus() {
    document.getElementById("punti").textContent = statoGioco.punti;
    document.getElementById("debiti").textContent = statoGioco.debiti;
}

function entraInAula(nomeAula) {
    statoGioco.aulaCorrente = nomeAula;
    statoGioco.domandaCorrente = 0;
    statoGioco.corretteAula = 0;

    document.getElementById("map-view").classList.add("hidden");
    document.getElementById("room-view").classList.remove("hidden");

    document.getElementById("room-title").textContent =
        "Aula di " + nomeAula.toUpperCase();

    mostraDomanda();
}

function mostraDomanda() {
    let aula = domande[statoGioco.aulaCorrente];
    let domandaObj = aula[statoGioco.domandaCorrente];

    let container = document.getElementById("question-container");
    container.innerHTML = "";

    let domanda = document.createElement("h3");
    domanda.textContent = domandaObj.testo;
    container.appendChild(domanda);

    domandaObj.opzioni.forEach((opzione, index) => {
        let btn = document.createElement("button");
        btn.textContent = opzione;
        btn.onclick = () => verificaRisposta(index);
        container.appendChild(btn);
    });
}

function verificaRisposta(indiceScelto) {
    let aula = domande[statoGioco.aulaCorrente];
    let domandaObj = aula[statoGioco.domandaCorrente];

    if (indiceScelto === domandaObj.corretta) {
        statoGioco.punti += 10;
        statoGioco.corretteAula++;
        alert("Risposta corretta!");
    } else {
        statoGioco.punti -= 5;
        alert("Risposta sbagliata!");
    }

    statoGioco.domandaCorrente++;

    if (statoGioco.domandaCorrente < aula.length) {
        mostraDomanda();
    } else {
        fineAula();
    }

    aggiornaStatus();
}

function fineAula() {
    if (statoGioco.corretteAula >= 1) {
        statoGioco.debiti--;
        alert("Debito recuperato!");
    } else {
        alert("Debito NON recuperato.");
    }

    document.getElementById("room-view").classList.add("hidden");
    document.getElementById("map-view").classList.remove("hidden");

    controllaFineGioco();
}

function controllaFineGioco() {
    if (statoGioco.debiti <= 0) {
        document.getElementById("map-view").classList.add("hidden");
        document.getElementById("result-view").classList.remove("hidden");

        document.getElementById("final-message").textContent =
            "🎉 Complimenti! Sei stato promosso!";
    }
}
