var joueur = {
  nom: "Rahan",
  description: "Le meilleur des guerriers",
  caracteres: {
    force: 5,
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
      for (var subPropriete in j[propriete]) {
        console.log(subPropriete + " : " + j[propriete][subPropriete]);
      }
    }
  }
}
