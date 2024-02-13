// 1. Manipulation du DOM(document) pour créer l'interface de jeu :
//      1.1 Définition d'une constante qui crée un élément ; dans ce cas-ci un bouton(100boutons).
const creerBoutons = document.createElement("button");
for (let i = 0; i <= 100; i++) {

    document.body.appendChild(creerBoutons);
    document.querySelector('#boutonsNb0A100').appendChild(creerBoutons);
    creerBoutons.innerText = i + "";
    creerBoutons.id = `bouton${i}`;


    console.log(creerBoutons);
}


//      1.2 Construire les paramètres des boutons.

//      1.3 Ajouter notre élément au body ou autres sections du document. Ex : document.body.append(creerBoutons);
//  Cependant, dans notre cas, il est nécessaire de <<append>> 100 boutons... voici les étapes :
//          1.3.1 Utiliser une boucle de 1à100 ou 0à100.
//          1.3.2 Les boutons s'ajoutent au body ; à la fin de celui-ci dû au <<append>>. D'autres options s'offrent.

// Déclaration des variables pour le jeu.
let nbATrouver = Math.floor(Math.random() * 100 + 1);
let nbEssaies = 0;
