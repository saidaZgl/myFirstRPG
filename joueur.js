var joueur = {
  nom: "Rahan",
  description: "Le meilleur des guerriers",
  caracteres: {
    force: {
      desc: {
        info: "test",
        valeur: "test2"
      },
      valeur: 25
    },
    agilite: 3,
    intell: 2
  }
};
// console.log(joueur.nom);
// console.log(joueur.description);
// console.log(joueur.caracteres.force);
// console.log(joueur.caracteres.agilite);
// console.log(joueur.caracteres.intell);

afficherInformationJoueur(joueur);

function afficherInformationJoueur(j) {
  for (var propriete in j) {
    if (typeof j[propriete] !== "object") {
      console.log(propriete + " : " + j[propriete]);
    } else {
      afficherInformationJoueur(j[propriete]); //fonction de récursivité
    }
  }
}
