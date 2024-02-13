// 1. Manipulation du DOM (document) pour créer l'interface de jeu : JQUERY
//      1.1 Définition d'une constante qui crée un élément ; dans ce cas-ci un bouton(100boutons).
//          1.1.1 Voir https://api.jquery.com/appendTo/ Ce snippet crée 100boutons avec Id
//          Ex : $('<code html dans les balise></la fermée aussi si possible>').appendTo('.uneClasse') => à une classe ou autre appendTo('#unId'), etc...
let arrayBoutons = {}

for (let i = 0; i <= 100; i++) {

    $(`<button class="boutonsJeu" id="bouton${i}" value="${i}" onclick="hidden=true; VerifierNb();">${i}</button>`).appendTo('#boutonsNb0A100');
    console.log(`bouton${i}`);


}
$(`arrayBoutons`).addClass('.boutonsJeu');
console.log(arrayBoutons[6]);
//***   1.3 Ajouter notre élément au body ou autres sections du document. Ex : document.body.append(creerBoutons);
//  Cependant, dans notre cas, il est nécessaire de <<append>> 100 boutons... voici les étapes :
//          1.3.1 Utiliser une boucle de 1à100 ou 0à100.
//          1.3.2 Les boutons s'ajoutent au body ; à la fin de celui-ci dû au <<append>>.
//                D'autres options s'offrent. Ne fonctionne pas le bouton s'ajoute sur lui-même.
//***   Avec du Javascript natif ; sans JQUERY

// Déclaration des variables pour le jeu.

let nbATrouver = Math.floor(Math.random() * 100 + 1);
let nbEssaies = 0;
console.log(nbATrouver);

function VerifierNb()
{

        document.querySelector('#nbEssayesErrones').innerText = ` Nombre d'essais : ${nbEssaies+1} \n`;
        nbEssaies++;
}


