//Définition des variables nombre à trouver et nombre de tentatives :

let nbATrouver = Math.floor(Math.random() * 100 + 1);
let nbEssaies = 0;

// Fonction visant à <<reset>> le nbATrouver le nbEssaies et les paragraphes
// Ceci pourrait se faire simplement avec un <<reload>> de page... MAIS COMMENT?????
function NouvellePartie()
{
    nbATrouver = Math.floor(Math.random() * 100 + 1);
    nbEssaies = 0;
    document.querySelector('#nbEssayesErrones').innerText = "";
    document.querySelector('#essaieEncore').innerText = "";
    document.querySelector('#nbAVerifier').value = "";
}

// Fonction qui vérifie si le nombre entré et le nombre généré par Math.random et Math.floor sont égaux. (floor arrondit en int car random est un float)
// Voir si on l'on veut un range de 50 à 100 ... Math.random() * 100 + 50); ??????????????????????
function VerifierNombre(){
    // Prendre la valeur du input.value. CECI EST UN STRING UTILISE parseInt(<variable>) :

    let nombreChoisi = document.querySelector('#nbAVerifier').value;
    nombreChoisi = parseInt(nombreChoisi);

    // Array pour enregistrer les inputs
    let arrayNbChoisis = {};

// Message à envoyer si nombre !=
    let messageNbEssaies = `Essaie encore!!! Nombre de tentatives :  ${nbEssaies+1} ...`;

    // CONDITION(S) DE RÉUSSITES :

    if(nbATrouver===nombreChoisi)
    {
        document.querySelector('#essaieEncore').innerText = `VOUS AVEZ TROUVÉ LE NOMBRE CACHÉ!!!
            Il vous a fallu ${nbEssaies+1} essais ... pour trouver la réponse : ${nbATrouver}`;
    }
    else
    {
        arrayNbChoisis[nbEssaies] = nombreChoisi;
        document.querySelector('#nbEssayesErrones').innerText += `${nbEssaies+1}. ${arrayNbChoisis[nbEssaies]}\n`;
        nbEssaies++;
        if(nbATrouver > nombreChoisi)
        {
            document.querySelector('#essaieEncore').innerText = `Le nombre que l'on cherche est plus haut que : ${nombreChoisi}\n
            ${messageNbEssaies}`;
        }
        else
        {
            document.querySelector('#essaieEncore').innerText = `Le nombre que l'on cherche est plus bas que : ${nombreChoisi}\n
            ${messageNbEssaies}`;
        }
        // METTRE LES ESSAIS DANS UN ARRAY POUR AFFICHER LES TENTATIVES
    }
    console.log(nombreChoisi);
    console.log(nbATrouver);
    console.log(nbEssaies);
}

// CRÉATION DE 100 CARTES(CARRÉS) REPRÉSENTANT CHACUN DES NOMBRES.


// Ces 2 commandes permettent d'avoir les informations sur un objet, tel le DOM(document) :
console.dir(document);
console.log(document);
