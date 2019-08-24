var readline = require("readline-sync");

var joueur = require("./joueur");
var templateEnnemi = require("./ennemi");

var lesEnnemis = [];
var turtle1 = templateEnnemi.creerTurtle();
var turtle2 = templateEnnemi.creerTurtle();
var turtle3 = templateEnnemi.creerTurtle();
var ninja1 = templateEnnemi.creerNinja();
var ninja2 = templateEnnemi.creerNinja();
lesEnnemis.push(ninja1, ninja2, turtle1, turtle2, turtle3);

var choix = 0;
while (choix !== 9) {
  afficherMenu();
  choix = parseInt(readline.question("Quelle est votre question ?"));
  switch (choix) {
    case 1:
      joueur.afficherMonJoueur();
      break;
    case 2:
      afficherLesEnnemis();
      break;
    case 3:
      combattreEnnemi();
      break;
    case 9:
      console.log("À bientôt");
      break;
    default:
      console.log("Cas non compris");
      break;
  }
}
function afficherMenu() {
  txt = "";
  txt += "1 - Afficher les joueurs \n";
  txt += "2 - Afficher la liste des ennemis \n";
  txt += "3 - Combattre un ennemi \n";
  txt += "9 - Quitter le programme";
  console.log(txt);
}

function afficherLesEnnemis() {
  for (var i = 0; i < lesEnnemis.length; i++) {
    lesEnnemis[i].afficherEnnemi(); //function créée dans fichier ennemi.js
  }
}

function retourneEnnemiAleatoire() {
  var numeroEnnemiAleatoire = Math.floor(Math.random() * lesEnnemis.length);
  return lesEnnemis[numeroEnnemiAleatoire];
}

function combattreEnnemi() {
  var ennemiAleatoire = retourneEnnemiAleatoire();
  ennemiAleatoire.afficherEnnemi();
}
