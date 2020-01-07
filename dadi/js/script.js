// alert('ciao');
// var buttonPlay = document.getElementById('play');
// buttonPlay.addEventListener('click',
function dado(){
  var lancioDado1 = Math.floor(Math.random() * 6) + 1;
  var lancioDado2 = Math.floor(Math.random() * 6) + 1;
  var dadoResult;

  if (lancioDado1 > lancioDado2 ){
    dadoResult = 'Ha vinto il giocatore 1';
  }else if(lancioDado1 < lancioDado2){
    dadoResult = 'Ha vinto il giocatore 2';
  }else{
    dadoResult = 'Pareggio';
  }
document.getElementById('result').innerHTML= dadoResult;

  document.getElementById('first_player').innerHTML='Il tuo risultato: ' + lancioDado1;
  document.getElementById('second_player').innerHTML='Il tuo risultato: ' + lancioDado2;
  console.log('Il tuo numero:' + lancioDado1);
  console.log('Il tuo numero:' + lancioDado2);
}
// )
dado();
