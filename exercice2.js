// EXERCICE 2 - FONCTIONS (5 points)

// Fonction pour vérifier si un nombre est premier
function isPremier(nombre) {
    if (nombre < 2) {
        return false;
    }

    for (let i = 2; i < nombre; i++) {
        if (nombre % i === 0) {
            return false;
        }
    }

    return true;
}

// Tester la fonction avec différents nombres
console.log("0", isPremier(0));  // FAUX
console.log("1", isPremier(1));  // FAUX
console.log("2", isPremier(2));  // vrai
console.log("3", isPremier(3));  // vrai
console.log("11", isPremier(11));  // vrai
console.log("12", isPremier(12));  // FAUX

