

let woldUser = prompt('saisissez un mot')
let woldUserType = isNaN(woldUser);


// 2
if(woldUserType){
    const resultat = woldUser.replace(/[aeiou]/gi, '');
    console.log(resultat);
}else{
    alert("Veillez saisir un text"); 
}


//3
if(woldUserType){
    const resultat = woldUser.replace(/[aeiou]/gi, 'P');
    console.log(resultat);
}else{
    alert("Veillez saisir un text"); 
}

