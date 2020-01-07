// alert('Ciao');

// Esercizio 1
// Lista Utenti registrati
var listMail = ['marco@libero.it', 'andrea@yahoo.com', 'lisa@libero.it', 'chiara@gmail.com'];
// E-mail dell'utente
var mailUser = prompt('Inserisci la tua e-mail');
console.log(mailUser);

var permit = false;
// Ciclo for
for( var i=0; i<listMail.length; i++){
  var mail = listMail[i];
  // console.log(mail);
  if(mailUser==listMail){
    permit = true;
    console.log(mail);
  }
}
console.log(permit);
