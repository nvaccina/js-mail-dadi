const listaMail = [
  'nico@user.com',
  'matteo@user.com',
  'luca@user.com',
  'alessia@user.com',
  'benedetta@user.com',
  'giovanni@user.com',
  'sandra@user.com',
  'marco@user.com',
  'carlotta@user.com',
]

const mailAccesso = prompt('Inserisci il tuo indirizzo mail','yourname@user.com');

const messageBenvenuto = `
BENVENUTO NEL PROGRAMMA
`
const messageNegato = `
IL TUO ACCESSO E' STATO NEGATO
`
if (listaMail.includes(mailAccesso)){
  document.getElementById('output').innerHTML = messageBenvenuto;
}else{
  document.getElementById('output').innerHTML = messageNegato;
    output.classList.add('denied');
}

