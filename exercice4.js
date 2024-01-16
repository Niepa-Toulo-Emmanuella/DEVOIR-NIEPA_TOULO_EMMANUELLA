// EXERCICE 4 - LES BOUCLES ET LES CONDITIONS (5 points)

// Demander à l'utilisateur de saisir une moyenne
let moyenne = prompt("Veuillez entrer votre moyenne (entre 0 et 20):");
moyenne = parseFloat(moyenne);

// Vérifier si la moyenne est valide
if (!isNaN(moyenne) && moyenne >= 0 && moyenne <= 20) {
    // Afficher la mention correspondante
    if (moyenne >= 18) {
        console.log("Excellent");
    } else if (moyenne >= 16) {
        console.log("Très bien");
    } else if (moyenne >= 14) {
        console.log("Bien");
    } else if (moyenne >= 12) {
        console.log("Assez Bien");
    } else if (moyenne >= 10) {
        console.log("Passable");
    } else if (moyenne >= 8) {
        console.log("Insuffisant");
    } else if (moyenne >= 6) {
        console.log("Faible");
    } else {
        console.log("Médiocre");
    }
} else {
    // Afficher un message d'erreur si la moyenne n'est pas valide
    console.log("Erreur : Veuillez entrer une moyenne valide entre 0 et 20.");
}
