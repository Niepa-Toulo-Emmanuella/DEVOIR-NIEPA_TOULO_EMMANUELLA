// EXERCICE 1 - LES BOUCLES (5 points)

let nombreUtilisateur;

// Demander à l'utilisateur un nombre entre 0 et 10
do {
    nombreUtilisateur = prompt("Veuillez entrer un nombre entre 0 et 10:");

    // Vérifier si le nombre est valide
    if (isNaN(nombreUtilisateur) || nombreUtilisateur < 0 || nombreUtilisateur > 10) {
        alert("Erreur : Veuillez entrer un nombre valide entre 0 et 10.");
    }

} while (isNaN(nombreUtilisateur) || nombreUtilisateur < 0 || nombreUtilisateur > 10);

// Afficher les nombres inférieurs ou égaux au nombre entré par l'utilisateur
nombreUtilisateur = parseInt(nombreUtilisateur);

for (let i = nombreUtilisateur; i >= 0; i--) {
    console.log(i);
}
