var joueur = require("./joueur");
var templateEnnemi = require("./ennemi");

joueur.afficherMonJoueur();
joueur.levelUp();
joueur.afficherMonJoueur();

var lesEnnemis = [];

var turtle1 = templateEnnemi.creerTurtle();
lesEnnemis.push(turtle1);
var turtle2 = templateEnnemi.creerTurtle();
lesEnnemis.push(turtle2);
var turtle3 = templateEnnemi.creerTurtle();
lesEnnemis.push(turtle3);

var ninja1 = templateEnnemi.creerNinja();
var ninja2 = templateEnnemi.creerNinja();
lesEnnemis.push(ninja1, ninja2);

// console.log(lesEnnemis);
afficherLesEnnemis();

function afficherLesEnnemis() {
  for (var i = 0; i < lesEnnemis.length; i++) {
    lesEnnemis[i].afficherEnnemi(); //function créée dans fichier ennemi.js
  }
}
