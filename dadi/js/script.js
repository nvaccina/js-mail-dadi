const nameUser = prompt('Inserisci il tuo nome');

const userRandom = Math.floor((Math.random()* 6) + 1);

const computerRandom = Math.floor((Math.random()* 6) + 1);

document.getElementById('numberUser').innerHTML = userRandom;
document.getElementById('numberComputer').innerHTML = computerRandom;

const messageUserWin = `
Complimenti ${nameUser} hai vinto!
`
const messageUserLose = `
Mi dispiace ${nameUser} hai perso!
`
const messageNobodyWin = `
Mi dispiace è pari!
`

if (userRandom > computerRandom){
  document.getElementById('output').innerHTML = messageUserWin;
}else if (userRandom < computerRandom){
  document.getElementById('output').innerHTML = messageUserLose;
}else{
  document.getElementById('output').innerHTML = messageNobodyWin;
}

console.log(userRandom, computerRandom);