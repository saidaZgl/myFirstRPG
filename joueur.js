var joueur = {
  nom: "Rahan",
  description: "Le meilleur des guerriers",
  level: 1,
  pv: 100,
  caracteres: {
    force: 5,
    agilite: 3,
    intell: 2
  },
  afficherMonJoueur: function() {
    console.log("Nom " + this.nom);
    console.log("Description " + this.description);
    console.log("Level " + this.level);
    console.log("Points de vie " + this.pv);
    console.log("Force " + this.caracteres.force);
    console.log("Agilité " + this.caracteres.agilite);
    console.log("Intelligence " + this.caracteres.intell);
  },
  levelUp: function() {
    this.level++;
    //this.level = this.level + 1;
    //this.level += 1;
    this.pv += 10;
    this.caracteres.force += 2;
    this.caracteres.agilite++;
  }
};
/* L'appel des fonctions se fait dans le fichier main.js */
// joueur.afficherMonJoueur();
// joueur.levelUp();
// joueur.afficherMonJoueur();

// afficherInformationJoueur(joueur);

// function afficherInformationJoueur(j) {
//   for (var propriete in j) {
//     if (typeof j[propriete] !== "object") {
//       console.log(propriete + " : " + j[propriete]);
//     } else {
//       afficherInformationJoueur(j[propriete]); //fonction de récursivité
//     }
//   }
// }

module.exports = joueur;
