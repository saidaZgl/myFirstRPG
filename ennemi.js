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

ennemi1.afficherEnnemi();
ennemi2.afficherEnnemi();
