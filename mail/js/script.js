// Lista Utenti registrati
var listMail = [
  'marco@libero.it',
  'andrea@yahoo.com',
  'lisa@libero.it',
  'chiara@gmail.com'];
// E-mail dell'utente
var mailUser = prompt('Inserisci la tua e-mail');
console.log(mailUser);

var permit = false;
// Ciclo For
for( var i=0; i<listMail.length; i++){
  var mail = listMail[i];
  // console.log(mail);
  if(mailUser == mail){
    permit = true;
  }
}
// console.log(permit);

// Valutazione Permessi
if (permit == false) {
  alert('Accesso non consentito');
  console.log('Accesso non consentito');
} else {
  console.log('Accesso consentito');
}
