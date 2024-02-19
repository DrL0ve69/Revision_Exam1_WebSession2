// 1. Créer objets/classes Journalistes et Équipe de journalistes.


/*[abc]	: Peut accepter n’importe quel caractère de la série / [0-9] : idem mais, du premier caractère au dernier
(x|y)		: Peut accepter une ou l’autre des expressions / (x){5}		: Permet d’exiger un certain nombre d’occurrences (ex. 5)*/
// 2. Manipulation du DOM, les variables et RegEx
//  2.1 Enregistrer les entrées des <<input>> dans des variables ou utilisation de Jquery →
//   2.1.1 Mettre les valeurs des <<inputs>> dans les variables :



//   2.1.2 Identifier les balises et manipuler le <<innerText>> ou <<textContent>> à l'aide de variables ou Jquery


//  2.3
//   2.3.1 RegExNom → Contraintes :

//   2.3.2 RegExTextArea => Contraintes?

// 3. Soumission du formulaire et vérification des champs *** PAS DE COULEUR IDENTIQUE

function VerifierFormulaire()
{
	let inputNom = document.querySelector('#nomTexte').value;
	let inputBiographie = document.querySelector('#biographie').value;
	let inputSpecialite = document.querySelector('#inputGroupSelect01').value;
	let inputCouleur = document.querySelector('#couleurPreferee').value;


	if (/[A-Z][a-z]/.test(inputNom) !== true || inputNom === null || inputBiographie === null)
	{
		document.querySelector('#boutonSoumettre').disabled = true;
	}
	else
	{
		document.querySelector('#membresEquipe').innerText += "Nom : " + inputNom + "\n" + "Specialité : " + inputSpecialite + "\n" + "Couleur favorite : " + inputCouleur + "\n\n" ;
		console.log(inputSpecialite,inputBiographie,inputNom,inputCouleur);
	}
}

// 4. Ajout du journaliste dans l'équipe (<span>)