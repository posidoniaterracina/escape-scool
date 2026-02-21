const ambienti = [
    { id: "aula1", tipo: "materia", materia: "informatica" },
    { id: "aula2", tipo: "materia", materia: "economia" },
    { id: "aula3", tipo: "materia", materia: "diritto" },
    { id: "aula4", tipo: "materia", materia: "inglese" },
    { id: "bagno1", tipo: "neutro" },
    { id: "presidenza", tipo: "speciale" }
];

const domande = {
    informatica: [
        {
            testo: "Quale linguaggio struttura una pagina web?",
            opzioni: ["CSS", "HTML", "Python", "Java"],
            corretta: 1
        }
    ],
    economia: [
        {
            testo: "Il bilancio comprende:",
            opzioni: [
                "Stato Patrimoniale e Conto Economico",
                "Solo fatture",
                "Registro IVA",
                "Libro paga"
            ],
            corretta: 0
        }
    ],
    diritto: [
        {
            testo: "Il GDPR tutela:",
            opzioni: [
                "Scuola privata",
                "Dati personali",
                "Reati penali",
                "Contratti pubblici"
            ],
            corretta: 1
        }
    ],
    inglese: [
        {
            testo: "Invoice significa:",
            opzioni: ["Fattura", "Pagamento", "Scadenza", "Contratto"],
            corretta: 0
        }
    ]
};
