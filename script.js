const ecran = document.getElementById("ecran");

// Ajouter une valeur
function ajouter(valeur) {
    ecran.value += valeur;
}

// Effacer tout
function effacer() {
    ecran.value = "";
}

// Supprimer le dernier caractère
function supprimer() {
    ecran.value = ecran.value.slice(0, -1);
}

// Calculer
function calculer() {
    try {
        let expression = ecran.value;

        expression = expression.replace(
            /(\d+(?:\.\d+)?)%/g,
            "($1/100)"
        );

        ecran.value = eval(expression);
    } catch (erreur) {
        ecran.value = "Erreur";
    }
}

// Utiliser le clavier
ecran.addEventListener("keydown", function(event) {

    const touche = event.key;

    if (
        (touche >= "0" && touche <= "9") ||
        touche === "+" ||
        touche === "-" ||
        touche === "*" ||
        touche === "/" ||
        touche === "."
    ) {
        return;
    }

    if (touche === "Enter") {
        event.preventDefault();
        calculer();
    }

    if (touche === "Backspace") {
        return;
    }

    if (touche === "Escape") {
        effacer();
    }
});