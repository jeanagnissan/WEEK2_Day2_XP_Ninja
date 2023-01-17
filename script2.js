

//Partie 1
let codePostalUser = prompt('saisissez code postal')
let codePostalUserType = isNaN(codePostalUser);

if(codePostalUserType){
    alert("Veillez saisir un nombre");
}else{
    if(codePostalUser.length == 5){
        console.log("succès")
    }else if(codePostalUser.length > 5){
        console.log("erreur")
    }else{
        console.log("erreur")
    } 
}


//Partie 2
if(codePostalUserType){
    alert("Veillez saisir un nombre");
}else{
    const expRegCode1 = /^(?:0[1-9]|[1-8]\d|9[0-8])\d{3}$/i;
    let resultat1 = expRegCode1.test(codePostalUser);

    if (resultat1) {
        console.log("succès");
    }else{
        console.log("erreur")
    }
}
