var templateEnnemi = {
  creerTurtle: function() {
    var ennemi1 = {
      nom: "Turtle",
      description: "Tortue du sud",
      level: 1,
      force: 2,

      afficherEnnemi: function() {
        var txt = "Nom : " + this.nom + "\n";
        txt += "Description : " + this.description + "\n";
        txt += "Level : " + this.level + "\n";
        txt += "Force : " + this.force;
        console.log(txt);
      }
    };
    return ennemi1;
  },

  creerNinja: function() {
    var ennemi2 = {
      nom: "Ninja",
      description: "Ninja du nord",
      level: 2,
      force: 4,

      afficherEnnemi: function() {
        var txt = "Nom : " + this.nom + "\n";
        txt += "Description : " + this.description + "\n";
        txt += "Level : " + this.level + "\n";
        txt += "Force : " + this.force;
        console.log(txt);
      }
    };
    return ennemi2;
  }
};

var turtle1 = templateEnnemi.creerTurtle();
var turtle2 = templateEnnemi.creerTurtle();
turtle2.level = 2;
turtle2.force++;

turtle1.afficherEnnemi();
turtle2.afficherEnnemi();

var ninja1 = templateEnnemi.creerNinja();
ninja1.afficherEnnemi();
