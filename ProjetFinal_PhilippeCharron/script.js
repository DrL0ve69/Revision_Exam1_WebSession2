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


fetch('https://mockapi.io/clone/660c04c03a0766e85dbd2c18/users', {
    method: 'GET',
    mode: 'cors' ,
    credentials: 'include' ,
    headers: {'content-type':'application/json'},
}).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
}).then(tasks => {
    // Do something with the list of tasks
}).catch(error => {
    // handle error
})

const newTask = {
    content: 'Check out mockapi.io',
    completed: false,
};

fetch('https://mockapi.io/clone/660c04c03a0766e85dbd2c18/users', {
    method: 'POST',
    headers: {'content-type':'application/json'},
    // Send your data in the request body as JSON
    body: JSON.stringify(CreerNouveauMembre())
}).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
}).then(task => {
    // do something with the new task
}).catch(error => {
    // handle error
})

fetch('https://mockapi.io/clone/660c04c03a0766e85dbd2c18/'+ Membre.id, {
    method: 'PUT', // or PATCH
    headers: {'content-type':'application/json'},
    body: JSON.stringify({completed: true})
}).then(res => {
    if (res.ok) {
        return res.json();
    }
    // handle error
}).then(task => {
    // Do something with updated task
}).catch(error => {
    // handle error
})
function Supprimer(id){

    fetch('https://mockapi.io/clone/660c04c03a0766e85dbd2c18/users/'+Membre.id, {
        method: 'DELETE',
    }).then(res => {
        if (res.ok) {
            return res.json();
        }
        // handle error
    }).then(task => {
        // Do something with deleted task
    }).catch(error => {
        // handle error
    })
}

