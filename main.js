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
var gameOver = false;
while (choix !== 9 && !gameOver) {
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

function combattreEnnemi() {
  var numeroEnnemiAleatoire = Math.floor(Math.random() * lesEnnemis.length);
  var ennemiAleatoire = lesEnnemis[numeroEnnemiAleatoire];
  ennemiAleatoire.afficherEnnemi();

  joueur.pv -= ennemiAleatoire.force;
  ennemiAleatoire.pv -= joueur.caracteres.force;

  if (ennemiAleatoire.pv <= 0) {
    console.log("L'ennemi est mort");
    joueur.levelUp; //si ennemi est mort, on rajoute 1 level à notre joueur
    detruireEnnemi(numeroEnnemiAleatoire);
    if (lesEnnemis.length <= 0) {
      gameOver = true;
      console.log("Vous avez gagné !");
    }
  }
  if (joueur.pv <= 0) {
    console.log("Tu es mort");
    gameOver = true;
  }
}

function detruireEnnemi(numero) {
  for (var i = numero; numero < lesEnnemis.length; numero++) {
    lesEnnemis[i] = lesEnnemis[i] + 1;
    //la case de l'ennemi à supprimer va prendre la valeur de celui qui est à côté, c-à-d lesEnnemis de i + 1 => permet d'écraser par dessus l'ennemi sélectionné
  }
  lesEnnemis.pop(); //permet de supprimer la dernière case du tableau
}
