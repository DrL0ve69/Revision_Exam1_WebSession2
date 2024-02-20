
/*[abc]	: Peut accepter n’importe quel caractère de la série / [0-9] : idem mais, du premier caractère au dernier
(x|y)		: Peut accepter une ou l’autre des expressions / (x){5}		: Permet d’exiger un certain nombre d’occurrences (ex. 5)*/

//  2.3
//   2.3.1 RegExNom → Contraintes :

//   2.3.2 RegExTextArea => Contraintes?

// 3. Soumission du formulaire et vérification des champs *** PAS DE COULEUR IDENTIQUE
let compteur = 0;
let equipeJournaliste = [];
function VerifierFormulaire()
{// 1. Manipulation du DOM, les variables et RegEx, créer objets/classes Journalistes et Équipe de journalistes.
	let inputNom = document.querySelector('#nomTexte').value;
	let inputBiographie = document.querySelector('#biographie').value;
	let inputSpecialite = document.querySelector('#inputGroupSelect01').value;
	let inputCouleur = document.querySelector('#couleurPreferee').value;



	let journaliste = {nom:inputNom, biographie:inputBiographie, specialite:inputSpecialite, couleur:inputCouleur};

	equipeJournaliste[compteur] = [journaliste];
	compteur++;

	if (/[A-Z][a-z]/.test(inputNom) !== true || inputNom === null || inputBiographie === null)
	{
		document.querySelector('#boutonSoumettre').disabled = true;
	}
	else
	{
		//document.querySelector('#membresEquipe').innerHTML.color = inputCouleur; Ajuster avec couleur roundedpills avec inputCouleur
		document.querySelector('#membresEquipe').innerText += "Nom : " + journaliste.nom + "\n" + "Specialité" +
			" : " + inputSpecialite + "\n" + "Couleur favorite : " + inputCouleur + "\n\n";
		console.log(inputSpecialite,inputBiographie,inputNom,inputCouleur,equipeJournaliste);
	}
}

// 4. Ajout du journaliste dans l'équipe (<span>)