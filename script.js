//alert("Bonjour la classe!"); // ; optionnel

console.log("Ça sert juste à déboguer");

// Variable
let variable1 = 1;
let variable2 = "Allo";
var variable3 = true;
const variable4 = 2.4;
variable5 = 'a';   // Guillemets doubles ou simples pour les strings

console.log(variable1 + variable2 + variable3 + variable4 + variable5); //concaténation
console.log(variable1 + variable4); //addition

// Écrire sur la page
//document.write("Écrire sur la page web avec javascript")
document.getElementById("paragraphe1").innerText = "Texte du paragraphe " + variable1;
document.getElementById("paragraphe2").innerHTML = "<strong>Texte</strong> du paragraphe 2";
// Ceci permet d'enregistrer le contenu d'une page ainsi que son href
// On peut ainsi, avec la fonction open (URL, TARGET, FEATURES)
// Ex : onclick="open(lienExempleFormulaire.href, lienExempleFormulaire.target, lienExempleFormulaire.innerText)"
// Donc en cliquant, une nouvelle fenêtre s'ouvrira vers le lien défini !
const lienExempleFormulaire = document.createElement("a");
lienExempleFormulaire.href = "exempleFormulaire1.html";
lienExempleFormulaire.innerText = "Formulaire1";
const lienIndex = document.createElement(`a`)
lienIndex.href = "index.html";


// Fonction

// Exemple de bouton qui tient un compte
const boutonCompte = document.getElementById("bouton-compte");
const boutonCompte2 = document.getElementById("bouton-compte2");
const boutonFooter = document.getElementById("bouton-footer");
let compteurBouton2 = 0;

// Compte les cliques rapides
boutonCompte.addEventListener("click", (event) => {

    boutonCompte.textContent = `Nombre de cliques: ${event.detail}`; // le event.detail pour un bouton retourne le nombre de fois que le bouton a été cliqué
});

// Ouvre dans un nouvel onglet l'exempleFormulaire1

boutonFooter.onclick=(event)=>
{ window.open(lienExempleFormulaire.href) };

// utilise le compteur pour ajuster le décompte du bouton
boutonCompte2.addEventListener("click", (event) => {
    compteurBouton2++;
    boutonCompte2.textContent = `Nombre de cliques: ${compteurBouton2}`; // le event.detail pour un bouton retourne le nombre de fois que le bouton a été cliqué
});
const boutonCompte3 = document.getElementById("bouton-compte3");
let compteurBouton3 = 0;

// Voir le bouton 5 pour un bouton qui, lorsque cliqué, ouvre exempleFormulaire1.html dans la même fenêtre plutôt qu'un(e) nouvel onglet/fenêtre
const lienFormulaire1 = lienExempleFormulaire.href;

// Enregistrer des objets du DOM dans un tableau :
const arrayBoutons = document.getElementsByTagName("button");
for (let x = 0; x <= arrayBoutons.length; x++) {

    if(x===6 || x===4){ arrayBoutons[x].style.backgroundColor = "darkslategrey"; }
    else if(x % 2 !== 0) { arrayBoutons[x].style.borderColor = "green"; }
    else{ arrayBoutons[x].style.color = "red"; }
    arrayBoutons[x].style.width = "200px";
}
function Reformatter(){

    var element = document.querySelector("#telephone");
    var ancien_tel = element.value;

    var nouveau_tel = "(" + ancien_tel.substring(0,3) + ") " + ancien_tel.substring(3,6) + "-" + ancien_tel.substring(6);
    element.value = nouveau_tel;
}


function Popup(){
    alert("Bonjour la classe!")
}



// Appeler la fonction
// Popup()