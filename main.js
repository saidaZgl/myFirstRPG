var joueur = require("./joueur");
var templateEnnemi = require("./ennemi");

var lesEnnemis = [];
var turtle1 = templateEnnemi.creerTurtle();
var turtle2 = templateEnnemi.creerTurtle();
var turtle3 = templateEnnemi.creerTurtle();
var ninja1 = templateEnnemi.creerNinja();
var ninja2 = templateEnnemi.creerNinja();
lesEnnemis.push(ninja1, ninja2, turtle1, turtle2, turtle3);

var ennemiAleatoire = retourneEnnemiAleatoire();
ennemiAleatoire.afficherEnnemi();

function afficherLesEnnemis() {
  for (var i = 0; i < lesEnnemis.length; i++) {
    lesEnnemis[i].afficherEnnemi(); //function créée dans fichier ennemi.js
  }
}

function retourneEnnemiAleatoire() {
  var numeroEnnemiAleatoire = Math.floor(Math.random() * lesEnnemis.length);
  return lesEnnemis[numeroEnnemiAleatoire];
}
