//Définition des variables nombre à trouver et nombre de tentatives :

let nbATrouver = Math.floor(Math.random() * 100 + 1);
let nbEssaies =0;

// Fonction qui vérifie si le nombre entré et le nombre généré par Math.random et Math.floor sont égaux. (floor arrondit en int car random est un float)
function VerifierNombre(){
    // Prendre la valeur du input.value. CECI EST UN STRING UTILISE parseInt(<variable>) :

    let nombreChoisi = document.querySelector('#nbAVerifier').value;
    nombreChoisi = parseInt(nombreChoisi);

    // CONDITION(S) DE RÉUSSITES :

    if(nbATrouver===nombreChoisi) {  alert('Vous avez réussi');}
    else { nbEssaies++; document.querySelector('#essaieEncore').innerText = `Essaie encore!!! Vous avez essayé ${nbEssaies}x ...`; }
    console.log(nombreChoisi);
    console.log(nbATrouver);
    console.log(nbEssaies);
}

// CRÉATION DE 100 CARTES(CARRÉS) REPRÉSENTANT CHACUN DES NOMBRES.



