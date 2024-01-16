// EXO 3 - COURS (5 points)

// Définition de la classe Rectangle
class Rectangle {
    constructor(largeur, hauteur) {
        this.largeur = largeur;
        this.hauteur = hauteur;
    }

    get périmètre() {
        return 2 * (this.largeur + this.hauteur);
    }

    get isValid() {
        return this.largeur > 0 && this.hauteur > 0;
    }

    isBiggerThan(otherShape) {
        return this.périmètre > otherShape.périmètre;
    }
}

// Définition de la classe Carré qui hérite de Rectangle
class Carré extends Rectangle {
    constructor(côté) {
        super(côté, côté);
    }
}

// Utilisation des classes définies dans shapes.js

const rectangle1 = new Rectangle(10, 20);
console.log(rectangle1.périmètre);  // 60
console.log(rectangle1.isValid);  // vrai

const rectangle2 = new Rectangle(-10, 20);
console.log(rectangle2.isValid);  // FAUX

const carre1 = new Carré(10);
console.log(carre1.périmètre);  // 40
console.log(rectangle1.isBiggerThan(carre1));  // vrai
