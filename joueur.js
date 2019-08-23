var joueur = {
  nom: "Rahan",
  description: "Le meilleur des guerriers",
  force: 5,
  agilite: 3,
  intell: 2
};

afficherInformationJoueur(joueur);

function afficherInformationJoueur(j) {
  for (var propriete in j) {
    console.log(propriete + " : " + j[propriete]);
  }
}
