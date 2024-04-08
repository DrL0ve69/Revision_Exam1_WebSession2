// 1. Définir la classe Membre et ses propriétés :
let dataJson = document.href;
function Membre(nom, prenom, email, nomUtilisateur, password) {

    this.Nom = nom; this.Prenom = prenom;  this.Email = email;
    this.NomUtilisateur = nomUtilisateur; this.Password = password;
    // Ajouter après l'ajout du nouveau membre → this.Pointage = pointage;
    let id = 0;
    this.Id += id; // à tester sinon public static Id => private id=0; id+=;
    
}

function CreerNouveauMembre( key, value ){

    let nouveauMembre = new Membre($('#nom').val(), $('#prenom').val(),
        $('#email').val(), $('#nomUtilisateur').val(), $('#passwordCreation').val()) ;
    function toString()
    {
        return `${this.Id},. ${this.Nom}, ${this.Prenom}`;
    }
    dataJson += localStorage.setItem( "Membres", `${nouveauMembre.Id},. ${nouveauMembre.Nom}, ${nouveauMembre.Prenom}` );
    // Ajouter le membre au JSON et à la page des membres.
}