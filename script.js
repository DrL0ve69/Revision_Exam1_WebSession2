//alert("Bonjour la classe!"); // ; optionnel

console.log("Ça sert juste à déboguer");

// Variable
let variable1 = 1
let variable2 = "Allo"
var variable3 = true
const variable4 = 2.4
variable5 = 'a'   // Guillemets doubles ou simples pour les strings

console.log(variable1 + variable2 + variable3 + variable4 + variable5) //concaténation
console.log(variable1 + variable4)  //adition

// Écrire sur la page
//document.write("Écrire sur la page web avec javascript")
document.getElementById("paragraphe1").innerText = "Texte du paragraphe " + variable1
document.getElementById("paragraphe2").innerHTML = "<strong>Texte</strong> du paragraphe 2"
const lienExempleFormulaire =document.createElement("a")

// Ceci permet d'enregistrer le contenu d'une page ainsi que son href
// On peut ainsi, avec la fonction open (URL, TARGET, FEATURES)
// Ex : onclick="open(lienExempleFormulaire.href, lienExempleFormulaire.target, lienExempleFormulaire.innerText)"
// Donc en cliquant, une nouvelle fenêtre s'ouvrira vers le lien défini !
lienExempleFormulaire.href = "exempleFormulaire1.html"
lienExempleFormulaire.innerText = "Formulaire1";


// Fonction
function ChangerPage()
{
    alert("Voulez-vous vraiment quitter la page?");
}
// Exemple de bouton qui tient un compte
const boutonCompte = document.getElementById("bouton-compte");

boutonCompte.addEventListener("click", (event) => {
    boutonCompte.textContent = `Nombre de cliques: ${event.detail}`; // le event.detail pour un bouton retourne le nombre de fois que le bouton a été cliqué
});
function Popup(){
    alert("Bonjour la classe!")
}



// Appeler la fonction
// Popup()