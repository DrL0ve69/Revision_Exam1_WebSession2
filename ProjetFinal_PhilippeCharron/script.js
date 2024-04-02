// 1. Définir la classe Membre et ses propriétés :

function Membre(nom, prenom, telephone, codePostal, email, nomUtilisateur, password) {

    this.Nom = nom; this.Prenom = prenom; this.Telephone = telephone; this.CodePostal = codePostal; this.Email = email;
    this.NomUtilisateur = nomUtilisateur; this.Password = password;
    // Ajouter après l'ajout du nouveau membre → this.Pointage = pointage;
    this.Id = id++;                                   // à tester sinon public static Id => private id=0; id+=;
}

function CreerNouveauMembre(){

    let nouveauMembre = new Membre($('#nom').val(), $('#prenom').val(), $('#numTelephone').val(), $('#codePostal').val(),
        $('#email').val(), $('#nomUtilisateur').val(), $('#passwordCreation').val()) ;
    // Ajouter le membre au JSON et à la page des membres.
}