const nameUser = prompt('Inserisci il tuo nome');

const userRandom = Math.ceil(Math.random()* 6);

const computerRandom = Math.ceil(Math.random()* 6);

document.getElementById('numberUser').innerHTML = userRandom;
document.getElementById('numberComputer').innerHTML = computerRandom;

const messageUserWin = `
Complimenti ${nameUser} hai vinto!
`
const messageUserLose = `
Mi dispiace ${nameUser} hai perso!
`
const messageNobodyWin = `
Hai pareggiato!
`

if (userRandom > computerRandom){
  document.getElementById('output').innerHTML = messageUserWin;
}else if (userRandom < computerRandom){
  document.getElementById('output').innerHTML = messageUserLose;
}else{
  document.getElementById('output').innerHTML = messageNobodyWin;
}

console.log(userRandom, computerRandom);